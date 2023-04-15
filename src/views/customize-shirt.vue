<template>
    <div class="h-full flex justify-center gap-20 items-center text-black">
        <ShirtRenderer ref="shirtRendererRef" :color="color" :img="img" />
        <div class="bg-white p-8 flex flex-col gap-8 rounded-2xl">
            <h1 class="text-black">Personalizzazione T-shirt</h1>
            <div class="flex gap-2">
                <button v-for="color in defaultColors" :key="color.name" class="radio-btn"
                    :style="{ backgroundColor: color.hexValue }" @click="changeColor(color.value)"></button>
            </div>

            <div class="flex gap-2 ">
                <button v-for="size in defaultSizes" :key="size" :class="{ 'active-size': size === activeSize }"
                    class="radio-btn  grid place-items-center text-black" @click="changeSize(size)">{{
                        size }}</button>
            </div>
            <div class="flex gap-2 ">
                <span class="text-black">Quantità</span>
                <input type="number" name="" id="" class="text-black">
            </div>
            <input @change="previewImg" type="file" id="img" name="img">
            <button class="bg-dark py-1 px-2" @click="snapshotCall">snapshot</button>
        </div>
    </div>
</template>

<script setup>
import ShirtRenderer from '../components/ShirtRenderer.vue';
import { ref } from 'vue';

const color = ref(0xE52121)
const img = ref(null)
const activeSize = ref(null);
const shirtRendererRef = ref(null);
const defaultColors = [{
    hexValue: "#E52121",
    value: 0xE52121
},
{
    hexValue: "#BEE521",
    value: 0xBEE521
},
{
    hexValue: "#21E558",
    value: 0x21E558
},
{
    hexValue: "#695C6F",
    value: 0x695C6F
},
{
    hexValue: "#00B2FF",
    value: 0x00B2FF
},
]

const defaultSizes = ["XS", "S", "M", "L", "XL"]

const snapshotCall = () => {
    shirtRendererRef.value.snapshot();
}

const changeSize = (size) => {
    activeSize.value = size;
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

<style scoped>
.radio-btn {
    width: 2rem;
    aspect-ratio: 1;
    border-radius: 50%;
    border: transparent;
    outline: 2px solid black;
    cursor: pointer;
}

.active-size {
    background-color: grey;
}
</style>