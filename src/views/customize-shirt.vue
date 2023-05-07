<template>
    <div class="h-full flex flex-col justify-start gap-10 pt-10 customizer-wraper ">
        <ShirtRenderer ref="shirtRendererRef" :color="color" :img="img" :product="route.query" />
        <div class="customize-wraper glassmorphism custom-shadow ">
            <h1>Personalizzazione T-shirt </h1>
            <router-link to="/catalog" class="btn-ation-catalog">vai al catalogo</router-link>
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
                        class="size-block" @click="changeSize(size)">{{
                            size }}</li>
                </ul>
            </div>
            <div>
                <span>quantità:</span>
                <CustomInputNumber :emits="emits" @input-value="handleInputNumber" />
            </div>
            <div>
                <span>immagine:</span>
                <label for="img" class="flex gap-1 items-center">
                    <span>upload</span>
                    <v-icon name="md-fileupload-round" fill="var(--primary-color)" />
                </label>
                <input @change="previewImg" type="file" id="img" name="img">
            </div>
            <div class="buttons">
                <button @click="snapshotCall">snapshot</button>
                <button @click="addToCart" v-if="route.query.amount > 0">add to cart</button>
                <button v-else class="no-stock">out of stock</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import ShirtRenderer from '../components/ShirtRenderer.vue';
import { useCartStore } from '../store/cart';
import { v4 as uuidv4 } from 'uuid';
import { ref, onMounted } from 'vue';
import { useRoute } from "vue-router"
import CustomInputNumber from "../components/CustomInputNumber.vue"

const route = useRoute()

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

const amount = ref(null)
const defaultSizes = route.query.sizes
const emits = defineEmits(['input-value']);
const store = useCartStore()
const color = ref(0xE52121)
const img = ref(null)
const activeSize = ref(defaultSizes[0]);
const shirtRendererRef = ref(null);
const model = ref(route.query.model || "T-Shirt male")
const modelPrice = ref(route.query.price || 20)


onMounted(() => {
    amount.value = 1
})

const handleInputNumber = (data) => {
    amount.value = data
}

const snapshotCall = () => {
    shirtRendererRef.value.snapshot();
}

const changeSize = (size) => {
    activeSize.value = size;
}


const addToCart = async () => {
    if (amount.value < 1) return
    const newCartItem = {
        id: uuidv4(),
        model: model.value,
        color: color.value,
        size: activeSize.value,
        amount: amount.value,
        image: await shirtRendererRef.value.getImage(),
        totalPrice: processPrice(),
        singlePrice: modelPrice.value
    }

    store.addCartItem(newCartItem)
}

const processPrice = () => {
    return (parseFloat(modelPrice.value) * parseFloat(amount.value)).toFixed(2)
}

const previewImg = async (event) => {
    if (event.length > 1) {
        alert('You can only select up to 5 files');
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
    outline: 1px solid var(--secondary-color);
    cursor: pointer;
    font-weight: 300;
    color: var(--secondary-color);
}




.customize-wraper {
    padding: 2rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    background-image: url("/assets/darker_decoration.svg");
    background-position: center;
}

.customize-wraper>*,
.customize-wraper span {
    color: var(--secondary-color);
    text-transform: capitalize;
    color: var(--accent-color);
}

.customize-wraper h1 {
    font-size: clamp(1.7rem, 2vw, 6vw);
    text-transform: uppercase;
    font-weight: 900;
    color: var(--primary-color);
}

.size-block {
    padding: 0.3rem 0.9rem;
    border-radius: 0.5rem;
    cursor: pointer;
    border: 1px solid var(--accent-color);
}

.active-size {
    color: var(--primary-color);
    background-color: var(--secondary-color);
    border: transparent;
}

.customize-wraper input[type="number"] {
    color: var(--secondary-color);
    max-width: 6ch;
    text-align: center;
}

.customize-wraper>div {
    display: flex;
    justify-content: space-between;
}

.btn-ation-catalog {
    background-color: var(--tertiary-color);
    width: fit-content;
    text-decoration: none;
    border-radius: 0.5rem;
    color: var(--primary-color);
    padding: 0.5rem 1rem;
    font-weight: 200;
    font-size: 0.8rem;
}

.customize-wraper ul {
    display: flex;
    gap: .5rem;
}

.customize-wraper label {
    cursor: pointer;
}

.customize-wraper input[type="file"] {
    display: none;
}

.customize-wraper button {
    padding: .5rem 0;
    border-radius: .5rem;
    border: transparent;
    background-color: var(--secondary-color);
    color: var(--primary-color);
}


.customize-wraper button:last-child {
    outline: 1px solid;
    background-color: transparent;
    color: var(--primary-color);
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
        margin-bottom: 2rem;
        height: 100%;
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