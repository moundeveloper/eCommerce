<template>
    <div class="h-full flex flex-col cart-wraper">
        <h1 class="self-center mb-5">Cart</h1>
        <div class="self-center mb-5 flex gap-10">
            <router-link to="items">
                <v-icon name="md-shoppingbag-round" fill="var(--primary-color)" scale="1.5" />
            </router-link>
            <router-link to="history">
                <v-icon name="md-history-outlined" scale="1.5" />
            </router-link>
        </div>

        <!-- Router view for cart children pages -->
        <router-view :key="$route.fullPath"></router-view>
    </div>
</template>

<script setup>
import { useCartStore } from '../store/cart';

const store = useCartStore()
store.loadCartHistory()

</script>

<style scoped>
.cart-wraper {
    margin: 0 10rem;
}

@media only screen and (max-width: 1100px) {

    .cart-wraper {
        margin: 0;
        align-items: center;
    }
}
</style>