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
        <div class="prodcuts-wraper flex flex-col gap-4 my-10">
            <div class="products-head grid-products  place-items-center glassmorphism rounded-lg px-4 py-[0.5rem]">
                <span v-for="column in gridColumns">
                    {{ column }}
                </span>
            </div>
            <div class="products flex flex-col gap-4">
                <div class="product grid-products place-items-center glassmorphism p-4 rounded-2xl"
                    v-for="product in store.getProducts" :key="product.model">
                    <span>{{ product.model }}</span>
                    <span>{{ product.category }}</span>
                    <span>{{ product.price }} €</span>
                    <span>{{ product.amount }}</span>
                    <div class="p-2 color-wraper flex gap-2">
                        <div class="color-box" :style="{ backgroundColor: color }" v-for="color in product.colors">
                        </div>
                    </div>
                    <div class="size-grid">
                        <div class="text-[0.8rem]" v-for="size in product.sizes">{{ size }}</div>
                    </div>
                    <img :src="product.image" alt="">
                    <span>{{ product.model3d }}</span>
                    <span>{{ product.modelMesh }}</span>

                    <button class="w-6/12" @click="openPopup(product, $event)" id="edit-product">
                        <v-icon name="md-edit" scale="1.2" />
                    </button>
                    <button class="w-6/12" @click="deleteProduct(product.id)">
                        <v-icon name="md-deleteforever" scale="1.2" />
                    </button>
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
const gridColumns = ["modello", "categoria", "price", "quantità", "colori", "taglie", "img", "3d-model", "mesh"]


function openPopup(product, e) {
    showPopup.value = true;
    popUpId.value = e.target.getAttribute("id")
    popUpData.value = product
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


.grid-products {
    display: grid;
    grid-template-columns: repeat(9, minmax(0, 1fr)) 0.7fr 0.7fr;
    grid-auto-flow: row;
}


.color-wraper {
    width: 100%;
}

.color-box {
    width: 20%;
    aspect-ratio: 1;
    border-radius: 50%;
}

span {
    font-weight: 200;

    padding: 0 1rem;
    -webkit-line-clamp: 1;
    /* max line number */

}

.size-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    padding: 0 1rem;
    justify-content: center;
}

.size-grid div {
    border: 1px solid var(--primary-color);
    padding: 0.3rem;
    text-align: center;
    font-size: 0.7rem;
}

.product span {
    max-width: 13ch;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}


p {
    text-align: center;
}

img {
    max-width: 60%;
    border-radius: 0.5rem;
}

button {
    cursor: pointer;
    text-transform: capitalize;
    border: transparent;
    background-color: transparent;
    border-radius: 0.1rem;
    width: 3rem;
    aspect-ratio: 1;
    display: grid;
    place-items: center;
    border-radius: 50%;
    border: 1px solid var(--primary-color);
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