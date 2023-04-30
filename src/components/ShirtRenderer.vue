<template>
    <!-- Se hai aperto questo file per sbaglio 
        torna sulla tua strada 
        e non toccare niente che senno ti 🔪🩸💀 -->
    <div class="canvas-container">
        <div ref="containerRef" id="container"></div>
    </div>
</template>

<script setup>
import { ref, onMounted, watchEffect, onBeforeUnmount } from 'vue';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { DecalGeometry } from 'three/addons/geometries/DecalGeometry.js';

const props = defineProps({
    color: Number,
    img: String,
    tshirt: Object
})

const currentColor = ref(props.color)
const currentImg = ref("/assets/logo.jpg")
const containerRef = ref(null)
const currentShirt = ref({})

if (Object.keys(props.tshirt).length === 0) {
    currentShirt.value = {
        model: 'Men T-Shirt',
        price: '21.99',
        model3dPath: '/assets/shirt_male.gltf',
        meshName: 'T_shirt_male'
    }
} else {
    currentShirt.value = props.tshirt
}

let renderer, scene, camera, controls, renderTarget, animationFrameId



const snapshot = () => {
    const snapshot = renderer.domElement.toDataURL('image/png');

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();
    img.onload = function () {
        const { width, height } = img;
        const size = Math.min(width, height);
        canvas.width = size;
        canvas.height = size;
        const x = (width - size) / 2;
        const y = (height - size) / 2;
        ctx.drawImage(img, x, y, size, size, 0, 0, size, size);
        canvas.toBlob(blob => {
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.download = 'image.png';
            link.href = url;
            link.click();
            URL.revokeObjectURL(url);
        }, 'image/png');
    };
    img.src = snapshot;

}

const getImage = () => {
    const snapshot = renderer.domElement.toDataURL('image/png')
    return new Promise((resolve, reject) => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        const img = new Image();
        img.onload = function () {
            const { width, height } = img;
            const size = Math.min(width, height);
            canvas.width = size;
            canvas.height = size;
            const x = (width - size) / 2;
            const y = (height - size) / 2;
            ctx.drawImage(img, x, y, size, size, 0, 0, size, size);
            const dataURL = canvas.toDataURL("image/png");

            resolve(dataURL)
            /* canvas.toBlob(blob => {
                console.log(blob)
                const url = URL.createObjectURL(blob);
                resolve(url);
            }, 'image/png'); */
        };
        img.onerror = reject;
        img.src = snapshot;
    });
}

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
    camera.position.z = 3.6;

    // Add controls
    controls = new OrbitControls(camera, renderer.domElement);
    controls.enablePan = false;
    /*controls.minAzimuthAngle = -Math.PI / 2;
       controls.maxAzimuthAngle = Math.PI / 2; */
    controls.minPolarAngle = Math.PI / 2;
    controls.maxPolarAngle = Math.PI / 2;
    if (window.innerWidth < 900) {
        controls.minDistance = 4.4
    } else {
        controls.minDistance = 3.7;
    }
    controls.maxDistance = 7;
    controls.update();

    window.addEventListener('resize', () => {
        if (window.innerWidth < 900) {
            controls.minDistance = 4.7
        } else {
            controls.minDistance = 4;
        }
    })

    // Add axes helper
    /* const axesHelper = new THREE.AxesHelper(5);
    scene.add(axesHelper); */

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
    loader.load(currentShirt.value.model3dPath, (gltf) => {
        const model = gltf.scene
        model.position.set(0, 0, 0)
        const s = 5
        model.scale.set(s, s, s)

        watchEffect(() => {
            currentColor.value = props.color
            currentImg.value = props.img === null ? currentImg.value : props.img;
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
            const mesh = model.getObjectByName(currentShirt.value.meshName);
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
                const decalGeometry = new DecalGeometry(mesh, new THREE.Vector3(0, 0.05, 0.5), new THREE.Euler(-0.4, 0, 0), new THREE.Vector3(2, 2, 2));

                decalGeometry.scale(1 / s, 1 / s, 1 / s); // Scale the decal by the inverse of the model's scale

                // Create a decal mesh

                const decalMesh = new THREE.Mesh(decalGeometry, decalMaterial);

                // Add the decal to the model's mesh
                mesh.add(decalMesh);

            });


        })


        function animate() {
            animationFrameId = requestAnimationFrame(animate)
            // Render the scene and enable control
            controls.update()
            renderer.render(scene, camera, renderTarget)
        }

        animate()
    })
}



defineExpose({
    snapshot,
    getImage
})

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
        max-width: 40%;
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