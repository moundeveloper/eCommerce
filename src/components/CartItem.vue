<template>
    <div class="img-wraper">
        <img :src="cartItem.image" alt="">
    </div>

    <button @click="removeFromCart">remove</button>
</template>

<script setup>
import { useCartStore } from '../store/cart';

const store = useCartStore()
const props = defineProps({
    cartItem: Object
})

const removeFromCart = () => {
    store.removeFromCart(props.cartItem.id)
}

</script>

<style scoped>
.img-wraper {
    overflow: hidden;
    max-width: 10rem;
    display: flex;
    flex-direction: column;
    outline: 1px solid orange;
}

.img-wraper img {
    align-self: center;
    justify-self: center;
    width: 30rem;
}
</style>