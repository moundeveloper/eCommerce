<template>
    <div id="container"></div>
</template>

<script setup>
import { onMounted } from 'vue';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { DecalGeometry } from 'three/addons/geometries/DecalGeometry.js';
import { MeshSurfaceSampler } from 'three/addons/math/MeshSurfaceSampler.js';

let renderer, scene, camera, ambientLight

const init = () => {
    renderer = new THREE.WebGLRenderer({ antialias: true, preserveDrawingBuffer: true })
    renderer.setSize(window.innerWidth / 1.4, window.innerHeight / 1.4)
    renderer.setClearColor(0x00000000, 0)
    document.querySelector('#container').appendChild(renderer.domElement);
    scene = new THREE.Scene()

    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    camera.position.z = 2
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enablePan = false;
    controls.minAzimuthAngle = -Math.PI / 2;
    controls.maxAzimuthAngle = Math.PI / 2;
    controls.minPolarAngle = 0;
    controls.maxPolarAngle = Math.PI / 2.5;
    controls.minDistance = 0.5;
    controls.maxDistance = 1;
    controls.update();
    const axesHelper = new THREE.AxesHelper(5);
    scene.add(axesHelper);
    ambientLight = new THREE.AmbientLight(0xffffff, 1)
    const directionLight = new THREE.DirectionalLight(0xffffff, 0.2)
    directionLight.position.set(75, -300, 1000);
    directionLight.castShadow = true
    const pointLight = new THREE.PointLight(0xffffff, 0.1)
    /* x y z */
    pointLight.position.set(0, 300, 500)
    scene.add(pointLight)
    scene.add(ambientLight)
    scene.add(directionLight)

    const loader = new GLTFLoader()
    loader.load('/assets/shirt_baked.gltf', (gltf) => {
        const model = gltf.scene
        model.position.set(0, 0, 0)
        const s = 1
        model.scale.set(s, s, s)
        const modelMaterial = new THREE.MeshStandardMaterial({
            color: 0x89627D, side: THREE.DoubleSide, roughness: 1,
            metalness: 0,
        });
        model.traverse((node) => {
            if (node.isMesh) {
                node.material = modelMaterial;
            }
        });

        scene.add(model)
        /* const clock = new THREE.Clock() */

        const mesh = model.getObjectByName('T_Shirt_male');

        // Load the decal texture
        let canvas = document.createElement('canvas');
        let paddedTexture = null
        const textureLoader = new THREE.TextureLoader();
        textureLoader.load('/assets/logo.jpg', (texture) => {
            // This code will run when the texture has finished loading
            console.log(texture)
            canvas.width = texture.image.width + 500   // Add 20 pixels of padding on each side
            canvas.height = texture.image.height + 500
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

        function animate() {
            requestAnimationFrame(animate)


            /* const delta = clock.getDelta()
            model.rotation.y += delta  */

            controls.update()
            // Render the scene
            renderer.render(scene, camera)
        }

        animate()
    })

}



onMounted(() => {
    init()
})
</script>

<style  scoped>
#container {
    width: 100%;
}
</style>