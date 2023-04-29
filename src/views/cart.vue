<template>
    <div class="h-full flex flex-col">
        <h1 class="self-center">Cart</h1>
        <div class="self-center">
            <router-link to="\">carrello</router-link>
            <router-link to="\">carrello</router-link>
        </div>
        <CartList />
    </div>
</template>

<script setup>
import CartList from '../components/CartList.vue';

</script>

<style scoped></style>