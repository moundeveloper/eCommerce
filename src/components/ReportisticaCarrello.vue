<template>
    <div class="riepilogo-wraper glassmorphism custom-shadow">
        <h2 class="mb-10">riepilogo carrello</h2>
        <div class="flex justify-between">
            <span>numero di prodotti:</span>
            <span>{{ store.getCartCounter }}</span>
        </div>
        <div class="flex justify-between">
            <span>totale</span>
            <span>{{ store.getCartTotal }}€</span>
        </div>

        <div class="flex justify-between">
            <span class="max-w-[20ch]">costi di spedizione e gestione previsti</span>
            <span>gratis</span>
        </div>
        <button @click="payCart">vai al pagamento</button>
    </div>
</template>

<script setup>
import { useCartStore } from '../store/cart';
const store = useCartStore()

const payCart = () => {
    if (store.getCartCounter) {
        store.addCartHistory(store.getCart, store.getCartTotal, store.getCartCounter)
        store.clearCart()
    }
}
</script>

<style  scoped>
.riepilogo-wraper {
    padding: 2rem;
    align-self: flex-start;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    border-radius: 0.5rem;
    min-width: 30rem;
}

h2 {
    font-weight: 600;
    text-transform: capitalize;
}

span {
    font-weight: 300;
    text-transform: capitalize;
}

button {
    padding: 1rem 1rem;
    background-color: var(--tertiary-color);
    border: transparent;
    cursor: pointer;
    border-radius: 0.5rem;
    text-transform: capitalize;
}

button:active {
    outline: 1px solid var(--primary-color)
}
</style>