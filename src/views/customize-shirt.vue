<template>
    <div class="h-full">
        <ShirtRenderer ref="shirtRendererRef" :color="color" :img="img" />
        <button class="bg-dark py-1 px-2" @click="changeColor(0xE52121)">red</button>
        <button class="bg-dark py-1 px-2" @click="changeColor(0xBEE521)">yellow</button>
        <button class="bg-dark py-1 px-2" @click="changeColor(0x21E558)">green</button>
        <input @change="previewImg" type="file" id="img" name="img">
        <button class="bg-dark py-1 px-2" @click="snapshotCall">snapshot</button>
    </div>
</template>

<script setup>
import ShirtRenderer from '../components/ShirtRenderer.vue';
import { ref } from 'vue';

const color = ref(0xE52121)
const img = ref(null)
const shirtRendererRef = ref(null);


const snapshotCall = () => {
    shirtRendererRef.value.snapshot();
}


const previewImg = async (event) => {
    if (event.length > 1) {
        alert('You can only select up to 5 files');
        input.value = null;
    }

    const file = event.target.files[0];
    if (!file) {
        return;
    }

    function readFileAsDataURL(file) {
        return new Promise((resolve) => {
            const reader = new FileReader();
            reader.onload = () => {
                resolve(reader.result);
            };
            reader.readAsDataURL(file);
        });
    }
    const dataUrl = await readFileAsDataURL(file);
    img.value = dataUrl
}


const changeColor = (newColor) => {
    color.value = newColor
}
</script>

<style scoped></style>