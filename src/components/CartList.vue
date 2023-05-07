<template>
    <div class="cards" :class="{ 'cards-grid-template': store.getCart.length }">
        <div v-for="item in store.getCart" :key="item.id">
            <CartItem :cartItem="item" />
        </div>
        <div v-if="!store.getCart.length"
            class="justify-self-center self-start flex flex-col gap-5 items-center glassmorphism p-10 rounded-lg">
            <img src="https://em-content.zobj.net/source/microsoft-teams/337/disappointed-face_1f61e.png" class="w-[5rem]"
                alt="">
            Nessun prodotto nel carrello
            <router-link :to="{ name: 'catalog' }">vai al catalogo</router-link>
        </div>
    </div>
</template>

<script setup>
import { useCartStore } from '../store/cart';
import CartItem from './CartItem.vue';

const store = useCartStore()

</script>

<style scoped>
.cards {
    display: grid;
    width: 100%;
}

.cards-grid-template {
    grid-template-columns: repeat(auto-fill, 19rem);
    justify-content: center;
    grid-auto-flow: row;
    gap: 2.5rem 10rem;
}

a {
    padding: 0.5rem;
    background-color: var(--tertiary-color);
    width: 100%;
    text-align: center;
    text-decoration: none;
    font-weight: 300;
    border-radius: 0.5rem;
    text-transform: capitalize;
    margin-top: 1rem;
}
</style>