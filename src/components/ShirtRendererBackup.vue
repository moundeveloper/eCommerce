<template>
    <!-- Se hai aperto questo file per sbaglio 
        torna sulla tua strada 
        e non toccare niente che senno ti 🔪🩸💀 -->
    <div class="canvas-container">
        <div id="container"></div>
    </div>
</template>

<script setup>
import { ref, onMounted, watchEffect } from 'vue';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { DecalGeometry } from 'three/addons/geometries/DecalGeometry.js';
import { MeshSurfaceSampler } from 'three/addons/math/MeshSurfaceSampler.js';

const props = defineProps({
    color: Number,
    img: String
})


const currentColor = ref(props.color)
const currentImg = ref("/assets/logo.jpg")


let renderer, scene, camera, controls, renderTarget

const snapshot = () => {
    const snapshot = renderer.domElement.toDataURL('image/png');
    // Do something with the snapshot (e.g. display it in an img element)
    const link = document.createElement('a');
    link.href = snapshot;
    link.download = 'Download.png';
    link.click();
}

const init = () => {


    // Initialize renderer
    renderer = new THREE.WebGLRenderer({ antialias: true, preserveDrawingBuffer: true });
    const aspectRatio = 1.4
    renderer.setSize(window.innerWidth / aspectRatio, window.innerHeight / aspectRatio);
    renderer.setClearColor(0x00000000, 0);
    renderer.alpha = true;

    renderTarget = new THREE.WebGLRenderTarget(window.innerWidth, window.innerHeight, {
        format: THREE.RGBAFormat,
        transparent: true,
    });

    document.querySelector('#container').appendChild(renderer.domElement);

    // Initialize scene
    scene = new THREE.Scene();

    // Initialize camera
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 2;

    // Add controls
    controls = new OrbitControls(camera, renderer.domElement);
    controls.enablePan = false;
    /* controls.minAzimuthAngle = -Math.PI / 2;
    controls.maxAzimuthAngle = Math.PI / 2; */
    controls.minPolarAngle = 0;
    controls.maxPolarAngle = Math.PI / 2.5;
    /*     controls.minDistance = 0.55;
        controls.maxDistance = 0.7; */
    controls.update();

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
    loader.load('/assets/shirt_baked.gltf', (gltf) => {
        const model = gltf.scene
        model.position.set(0, 0, 0)
        const s = 1
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
            const mesh = model.getObjectByName('T_Shirt_male');

            // Load the decal texture
            let canvas = document.createElement('canvas');
            let paddedTexture = null
            const textureLoader = new THREE.TextureLoader();
            textureLoader.load(currentImg.value, (texture) => {
                // This code will run when the texture has finished loading
                texture.image.width = 500
                texture.image.height = 500
                canvas.width = texture.image.width + 600   // Add 20 pixels of padding on each side
                canvas.height = texture.image.height + 600
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
                const decalGeometry = new DecalGeometry(mesh, new THREE.Vector3(0, 0.1, 0.12), new THREE.Euler(-0.4, 0, 0), new THREE.Vector3(0.2, 0.2, 0.2));
                // Sample the surface of the mesh
                const sampler = new MeshSurfaceSampler(mesh).build();

                // Apply the decal texture to the sampled surface
                for (let i = 0; i < sampler.length; i++) {
                    const position = sampler.getPosition(i);
                    const normal = sampler.getNormal(i);
                    const uv = sampler.getUv(i);
                    const color = new THREE.Color().setHex(Math.random() * 0xffffff);

                    decalGeometry.addDecal(position, normal, new THREE.Vector3(1, 1, 1), color, uv);
                }

                // Create a decal mesh
                const decalMesh = new THREE.Mesh(decalGeometry, decalMaterial);

                // Add the decal to the model's mesh
                mesh.add(decalMesh);
            });


        })


        function animate() {
            requestAnimationFrame(animate)
            // Render the scene and enable control
            controls.update()
            renderer.render(scene, camera, renderTarget)
        }
        animate()
    })
}

defineExpose({
    snapshot
})

onMounted(() => {
    init()
})
</script>

<style  scoped>
.canvas-container {
    outline: 1px solid blue;
    display: grid;
    place-items: center;
    max-width: 40%;
    height: fit-content;
    overflow: hidden;
}

#container {
    width: fit-content;
    outline: 1px solid red;
    overflow: hidden;
    position: relative;
}
</style>