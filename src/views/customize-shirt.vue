<template>
    <div class="h-full flex flex-col justify-start gap-10 pt-10 customizer-wraper">
        <ShirtRenderer ref="shirtRendererRef" :color="color" :img="img" />
        <div class="customize-wraper">
            <h1>Personalizzazione T-shirt</h1>

            <div>
                <span>colors:</span>
                <ul>
                    <li v-for="color in defaultColors" :key="color.name" class="radio-btn"
                        :style="{ backgroundColor: color.hexValue }" @click="changeColor(color.value)"></li>
                </ul>
            </div>

            <div>
                <span>size:</span>
                <ul>
                    <li v-for="size in defaultSizes" :key="size" :class="{ 'active-size': size === activeSize }"
                        class="radio-btn  grid place-items-center text-black" @click="changeSize(size)">{{
                            size }}</li>
                </ul>
            </div>
            <div>
                <span>quantità:</span>
                <input type="number" name="" id="" min="1" value="1">
            </div>
            <div>
                <span>immagine:</span>
                <label for="img" class="flex gap-1 items-center">
                    <span>upload</span>
                    <v-icon name="md-fileupload-round" fill="black" />
                </label>
                <input @change="previewImg" type="file" id="img" name="img">
            </div>
            <div class="buttons">
                <button @click="snapshotCall">snapshot</button>
                <button @click="addToCart">add to cart</button>
            </div>
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


const addToCart = () => {

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
    width: 1.7rem;
    aspect-ratio: 1;
    border-radius: 50%;
    border: transparent;
    outline: 1px solid black;
    cursor: pointer;
    font-weight: 300;
}

.active-size {
    color: white;
    background-color: black;
}

.customize-wraper {
    padding: 2rem;
    background-color: white;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    border-top-left-radius: 2rem;
    border-top-right-radius: 2rem;
}

.customize-wraper>*,
.customize-wraper span {
    color: black;
    text-transform: capitalize;
}

.customize-wraper h1 {
    font-size: clamp(1.7rem, 100%, 2vw);
}

.customize-wraper input[type="number"] {
    color: black;
    max-width: 6ch;
    text-align: center;
}

.customize-wraper>div {
    display: flex;
    justify-content: space-between;
}

.customize-wraper label {
    cursor: pointer;
}

.customize-wraper ul {
    display: flex;
    gap: .5rem;
}

.customize-wraper input[type="file"] {
    display: none;
}

.customize-wraper button {
    padding: .5rem 0;
    border-radius: .5rem;
    border: transparent;
    background-color: black;
    color: white;
}

.customize-wraper button:last-child {
    outline: 1px solid;
    background-color: transparent;
    color: black;
}

.buttons {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.buttons button {
    cursor: pointer;
    text-transform: capitalize;
}

@media screen and (min-width: 900px) {
    .customizer-wraper {
        flex-direction: row;
        justify-content: center;
        gap: 2rem;
        align-items: center;
        padding: 0 4rem;
    }

    .customize-wraper {
        width: 50%;
        border-radius: 1rem;
    }

    .buttons {
        display: flex;
        flex-direction: row;
        gap: 1rem;
    }

    .buttons button {
        width: 50%;
    }
}
</style>