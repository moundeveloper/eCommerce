<template>
    <div class="flex flex-col mt-10 gap-5">
        <h1 class="self-center">Catalogo</h1>
        <div class="cards">

            <!-- Card template -->
            <div class="card glassmorphism custom-shadow " v-for="shirt in store.getProducts" :key="shirt.model">
                <span class="model">{{ shirt.model }}</span>
                <div class="img-wraper">
                    <img :src="shirt.imageModel" alt="" />
                </div>
                <div class="flex justify-between mt-auto"><span>categoria </span><span>{{ shirt.category }}</span></div>
                <div class="flex justify-between mt-auto"><span>Prezzo </span><span>{{ shirt.price }} €</span></div>

                <router-link :to="{ name: 'customize-shirt', query: shirt }">more</router-link>
            </div>
            <!-- End Card template -->
        </div>
    </div>
</template>
<script setup>
import { useProductStore } from '../store/product';

const store = useProductStore()
store.loadProducts()

</script>

<style scoped>
.model {
    align-self: center;
    font-size: 1.5rem;
}

.img-wraper {
    max-width: 15rem;
    display: flex;
    justify-content: center;
    align-self: center;
}

.img-wraper img {
    width: 30rem;
}


span {
    color: var(--primary-color);
    font-weight: 100;
}

h1 {
    color: var(--primary-color);
}

.title h2 {
    display: inline;
}

p {
    display: flex;
    color: var(--secondary-color);
}

.cards {
    display: grid;
    grid-template-columns: repeat(auto-fill, 19rem);
    justify-content: center;
    grid-auto-flow: row;
    gap: 2.5rem 10rem;
    margin: 4rem 0;
}

.card {
    padding: 1rem;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    background-image: url("/assets/darker_decoration.svg");
    background-position: center;
}

a {
    padding: 0.7rem 0;
    width: 100%;
    text-align: center;
    border: transparent;
    text-decoration: none;
    background-color: var(--tertiary-color);
    border-radius: 0.5rem;
    cursor: pointer;
    font-weight: 300;
    text-transform: capitalize;
}
</style>