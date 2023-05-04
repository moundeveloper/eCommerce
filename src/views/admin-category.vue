<template>
    <AdminCategoryPopup v-if="showPopup" :closePopup="closePopup" :popUpId="popUpId" :popUpData="popUpData" />
    <div class="flex flex-col px-20">
        <div class="self-center flex flex-col items-center gap-5">
            <h1>Admin</h1>
            <button class="plus-button p-1" @click="openPopup(null, $event)" id="add-product">+</button>
        </div>

        <div class="products-bar flex flex-row px-20">
            <button class="filter-button p-1 ">filter</button>
            <p class="p-1">Prodotti disponibili: </p>
        </div>
        <div class="products">
            <div class="product glassmorphism p-4 rounded-2xl" v-for="product in store.getProducts" :key="product.model">
                <p>{{ product.model }}</p>
                <img src="https://cdn.pixabay.com/photo/2016/12/06/09/31/blank-1886008__340.png" alt="">
                <div class="btns">
                    <button class="w-6/12" @click="openPopup(product, $event)" id="edit-product">Edit</button>
                    <button class="w-6/12" @click="deleteProduct(product.id)">Delete</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import AdminCategoryPopup from '../components/AdminCategoryPopup.vue';
import { ref } from 'vue';
import { useProductStore } from '../store/product';

const store = useProductStore()
store.loadProducts()
const showPopup = ref(false);
const popUpId = ref("")
const popUpData = ref({})
const props = defineProps({ openPopup: Function })


function openPopup(shirt, e) {
    showPopup.value = true;
    popUpId.value = e.target.getAttribute("id")
    popUpData.value = shirt
}

const deleteProduct = (id) => {
    console.log(id)
    store.deleteProduct(id)
}

function closePopup() {
    showPopup.value = false;
}
</script>

<style  scoped>
.products-bar {
    justify-content: space-between;

}

.products {
    display: grid;
    grid-template-columns: repeat(auto-fill, 19rem);
    justify-content: center;
    grid-auto-flow: row;
    gap: 2.5rem 10rem;
    margin: 4rem 0;
}

p {
    text-align: center;
}

img {
    max-width: 100%;
    max-height: 100%;
}

button {
    cursor: pointer;
    text-transform: capitalize;
    background-color: var(--tertiary-color);
    border-radius: 0.1rem;
}

.btns button {
    padding: 0.7rem 0;
    width: 50%;
    text-align: center;
    border: transparent;
    text-decoration: none;
    cursor: pointer;
    font-weight: 300;
    text-transform: capitalize;
    background: transparent;
}

.btns button:first-child {
    border: 1px solid var(--primary-color);
    border-bottom-left-radius: 0.5rem;
    border-top-left-radius: 0.5rem;
}

.btns button:last-child {
    border: 1px solid var(--primary-color);
    border-bottom-right-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
    background-color: var(--secondary-color);
}

.plus-button {
    display: grid;
    place-items: center;
    width: 2rem;
    height: 2rem;
    aspect-ratio: 1;
    border-radius: 50%;
    border: transparent;
    background-color: var(--primary-color);
    color: var(--secondary-color);
}

.filter-button {
    display: grid;
    place-items: center;
    border-radius: 0.5rem;
    border: transparent;
    background-color: var(--primary-color);
    color: var(--secondary-color);
    text-transform: capitalize;

}
</style>