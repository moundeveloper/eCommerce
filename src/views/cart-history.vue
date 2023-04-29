<template>
    <div class="my-10 flex flex-col gap-5">
        <div class="history-cart-item glassmorphism flex justify-between" v-for="cartHistoryItem in store.getCartHistory"
            :key="cartHistoryItem.id">
            <!-- Left section -->
            <div class="flex flex-col">
                <div v-for="cartItem in cartHistoryItem.cart" :key="cartItem.id">
                    <img :src="cartItem.image" alt="">
                    {{ cartItem.model }}
                </div>
            </div>

            <!-- Right section -->
            <div class="flex flex-col w-[30rem]">
                <div class="flex justify-between">
                    <span>items</span>
                    <span>{{ cartHistoryItem.cartItemLength }}</span>
                </div>
                <div class="flex justify-between">
                    <span>data di pagamento</span>
                    <span>{{ cartHistoryItem.date }}</span>
                </div>
                <div class="flex justify-between">
                    <span>costo totale</span>
                    <span>{{ cartHistoryItem.totalPrice }}€</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useCartStore } from '../store/cart';
const store = useCartStore()
store.loadCartHistory()
</script>

<style scoped>
.history-cart-item {
    border-radius: 1rem;
    padding: 1rem;
}

span {
    font-weight: 500;
    text-transform: capitalize;
}
</style>