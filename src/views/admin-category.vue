<template>
    <AdminCategoryPopup v-if="showPopup" :closePopup="closePopup" />
    <div class="flex flex-col">
        <div class="self-center flex flex-col items-center">
            <h1>Admin</h1>
            <button class="head-buttons">+</button>
        </div>

        <div class="products-bar flex flex-row">
            <button class="head-buttons">Fliter</button>
            <p>Prodotti disponibili: </p>
        </div>
        <div class="products">
            <div class="product glassmorphism p-4 rounded-2xl" v-for="shirt in tShirts" :key="shirt.model">
                <p>{{ shirt.model }}</p>
                <img src="https://cdn.pixabay.com/photo/2016/12/06/09/31/blank-1886008__340.png" alt="">
                <div class="btns">
                    <button class="w-6/12" @click="openPopup">Edit</button>
                    <button class="w-6/12">Rush</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import AdminCategoryPopup from '../components/AdminCategoryPopup.vue';
import { ref } from 'vue';

const showPopup = ref(false);
const props = defineProps({ openPopup: Function })
const tShirts = [
    { model: "Women T-Shirt", price: 19.99, model3dPath: "/assets/shirt_female.gltf", meshName: "T_shirt_women", imageModel: "/assets/shirt_female_image.png" },
    { model: "Men T-Shirt", price: 21.99, model3dPath: "/assets/shirt_male.gltf", meshName: "T_shirt_male", imageModel: "/assets/shirt_male_image.png" },
    { model: "Child T-Shirt", price: 24.99, model3dPath: "/assets/shirt_child.gltf", meshName: "T_shirt_child", imageModel: "/assets/shirt_child_image.png" },
];

function openPopup() {
    console.log("Funziona");
    showPopup.value = true;
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
    border-collapse: separate;
    border-bottom-left-radius: 0.5rem;
    border-top-left-radius: 0.5rem;
}

.btns button:last-child {
    border: 1px solid var(--primary-color);
    border-collapse: separate;
    border-bottom-right-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
    background-color: var(--secondary-color);
}
</style>