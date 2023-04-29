<template>
    <div class="cards">
        <div v-for="item in store.getCart" :key="item.id">
            <CartItem :cartItem="item" />
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
    grid-template-columns: repeat(auto-fill, 19rem);
    justify-content: center;
    grid-auto-flow: row;
    gap: 2.5rem 10rem;
}
</style>