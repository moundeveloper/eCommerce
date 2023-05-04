<template>
    <Transition name="fade">
        <div class="card glassmorphism custom-shadow" :key="cartItem.model">
            <span class="model">{{ cartItem.model }}</span>
            <div class="img-wraper">
                <img :src="cartItem.image" alt="" />
            </div>
            <div class="flex justify-between">
                <span>Quantità :</span>
                <CustomInputNumber :emits="emits" :inputValue="itemQuantity" @input-value="handleInputNumber" />
            </div>
            <div class="flex justify-between">
                <span>Prezzo : </span>
                <span>{{ cartItem.totalPrice }} €</span>
            </div>
            <div class="btns flex justify-between">
                <button @click="editCartItem">edit</button>
                <button @click="removeFromCart">remove</button>
            </div>
        </div>
    </Transition>
</template>

<script setup>
import { useCartStore } from '../store/cart';
import CustomInputNumber from "./CustomInputNumber.vue"
import { ref } from "vue"


const store = useCartStore()
const props = defineProps({
    cartItem: Object
})
const emits = defineEmits(['input-value']);
const itemQuantity = ref(props.cartItem.amount)


const removeFromCart = () => {
    store.removeFromCart(props.cartItem.id)
}

const editCartItem = () => {

}

const handleInputNumber = (data) => {
    itemQuantity.value = data
    props.cartItem.amount = data
    props.cartItem.totalPrice = (props.cartItem.singlePrice * data).toFixed(2)
    store.setCartItem(props.cartItem)
}

</script>

<style scoped>
.model {
    align-self: center;
    font-size: 1.5rem;
}



.img-wraper img {
    width: 100%;
}


span {
    color: var(--primary-color);
    font-weight: 100;
}


p {
    display: flex;
    color: var(--secondary-color);
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

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>