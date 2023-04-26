<template>
    <div v-for="item in store.getCart" :key="item.id">
        <CartItem :cartItem="item" />
    </div>
</template>

<script setup>
import { useCartStore } from '../store/cart';
import CartItem from './CartItem.vue';

const store = useCartStore()

</script>

<style scoped></style>