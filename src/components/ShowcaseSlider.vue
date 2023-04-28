<template>
    <!-- Se hai aperto questo file per sbaglio 
        torna sulla tua strada 
        e non toccare niente che senno ti 🔪🩸💀 -->
    <div class="canvas-container">
        <div ref="containerRef" id="container"></div>
    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { DecalGeometry } from 'three/addons/geometries/DecalGeometry.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const currentColor = ref(0x6A2B87)
const currentImg = ref("/assets/logo.jpg")
const containerRef = ref(null)

let renderer, scene, camera, controls, renderTarget, animationFrameId

const init = () => {
    // Initialize renderer
    renderer = new THREE.WebGLRenderer({ antialias: true, preserveDrawingBuffer: true });
    const aspectRatio = 1.3
    renderer.setSize(window.innerWidth / aspectRatio, window.innerHeight / aspectRatio);
    renderer.setClearColor(0x00000000, 0);
    renderer.alpha = true;
    renderTarget = new THREE.WebGLRenderTarget(window.innerWidth, window.innerHeight, {
        format: THREE.RGBAFormat,
        transparent: true,
    });

    containerRef.value.appendChild(renderer.domElement);

    // Initialize scene
    scene = new THREE.Scene();

    // Initialize camera
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 3.9;

    window.addEventListener('resize', () => {
        if (window.innerWidth < 900) {
            camera.position.z = 4.8;
        } else {
            camera.position.z = 3.9;
        }
    })

    // Add lights
    const directionLight = new THREE.DirectionalLight(0xffffff, 0.2);
    directionLight.position.set(75, -300, 1000);
    directionLight.castShadow = true;
    const pointLight = new THREE.PointLight(0xffffff, 0.9);
    pointLight.position.set(0, 300, 500);
    scene.add(pointLight);
    const pointLight2 = new THREE.PointLight(0xffffff, 0.9);
    pointLight2.position.set(0, 300, -500);
    scene.add(pointLight2);
    scene.add(directionLight);

    // Load T-shirt 3D model
    const loader = new GLTFLoader()
    loader.load('/assets/shirt_female.gltf', (gltf) => {
        const model = gltf.scene
        model.position.set(0, 0, 0)
        const s = 5
        model.scale.set(s, s, s)

        // Create T-shirt material
        const modelMaterial = new THREE.MeshStandardMaterial({
            color: currentColor.value, side: THREE.DoubleSide, roughness: 1,
            metalness: 0,
        });

        // Apply t-shirt material to node
        model.traverse((node) => {
            if (node.isMesh) {
                node.material = modelMaterial;
            }
        });
        scene.add(model)

        // Get mesh from GTLF model
        const mesh = model.getObjectByName('T_shirt_women');
        let canvas = document.createElement('canvas');
        let paddedTexture = null
        const textureLoader = new THREE.TextureLoader();
        textureLoader.load(currentImg.value, (texture) => {

            texture.image.width = 500
            texture.image.height = 500
            canvas.width = texture.image.width + 2000   // Add 20 pixels of padding on each side
            canvas.height = texture.image.height + 2000
            const context = canvas.getContext('2d');
            context.fillStyle = 'rgba(0, 0, 0, 0)'; // Set transparent background
            context.fillRect(0, 0, canvas.width, canvas.height);
            context.drawImage(texture.image, canvas.width / 2 - texture.image.width / 2, canvas.height / 2 - texture.image.height / 2, texture.image.width, texture.image.height);
            paddedTexture = new THREE.CanvasTexture(canvas);

            paddedTexture.needsUpdate = true;

            // Create a decal material
            const decalMaterial = new THREE.MeshStandardMaterial({
                map: paddedTexture,
                alphaTest: 0.5,
                transparent: true,
                side: THREE.FrontSide // Set the side property to FrontSide
            });


            // Create a decal geometry
            const decalGeometry = new DecalGeometry(mesh, new THREE.Vector3(0, 0.4, 0.9), new THREE.Euler(-0.4, 0, 0), new THREE.Vector3(2.5, 2.5, 2.5));

            decalGeometry.scale(1 / s, 1 / s, 1 / s); // Scale the decal by the inverse of the model's scale

            // Create a decal mesh
            const decalMesh = new THREE.Mesh(decalGeometry, decalMaterial);

            // Add the decal to the model's mesh
            mesh.add(decalMesh);

        })

        renderer.render(scene, camera, renderTarget)

        function animate() {
            animationFrameId = requestAnimationFrame(animate)
            // Render the scene and enable control
            renderer.render(scene, camera, renderTarget)
            model.rotation.y += 0.01;
        }

        setTimeout(() => {
            animate()
        }, 300)


    })
}

onMounted(() => {
    init()
})

onBeforeUnmount(() => {
    cancelAnimationFrame(animationFrameId);
    renderer.dispose();
    containerRef.value.removeChild(renderer.domElement);
});
</script>

<style  scoped>
.canvas-container {
    display: grid;
    place-items: center;
    max-width: 100%;
    height: 22rem;
    overflow: hidden;
}

@media screen and (min-width: 900px) {
    .canvas-container {
        display: grid;
        place-items: center;
        max-width: 30rem;
        height: 30rem;
        overflow: hidden;
    }
}

#container {
    width: fit-content;
    position: relative;
    overflow: hidden;
}
</style>