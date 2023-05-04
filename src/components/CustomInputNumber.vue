<template>
    <div type="button" class="custom-input-number flex justify-between items-center">
        <!--         <span  contenteditable="true" @keyup="updateValue" ref="inputValueRef">{{
            inputValueRef.innerText
        }}</span> -->
        <input class="grow max-w-[5ch]" type="number" name="" id="" v-model="inputValueRef">
        <div class="flex flex-col">
            <button @click="increment">
                <v-icon name="fa-angle-up" fill="var(--primary-color)" class="vicon" scale="0.8" />
            </button>
            <button @click="decrement">
                <v-icon name="fa-angle-down" fill="var(--primary-color)" class="vicon" scale="0.8" />
            </button>
        </div>

    </div>
</template>

<script setup>
import { ref, onMounted, watchEffect } from 'vue';

const min = ref(0);
const max = ref(50);
const step = ref(1);
const inputValueRef = ref(1);
const props = defineProps({
    inputValue: Number,
})
const emits = defineEmits(['input-value']);

onMounted(() => {
    setDefaultSelectedOption()
})

watchEffect(() => {
    if (inputValueRef.value.toString().length > 2) {
        inputValueRef.value = max.value
    }

    if (parseInt(inputValueRef.value) < 0) {
        inputValueRef.value = 0
    }

    if (parseInt(inputValueRef.value) > max.value) {
        inputValueRef.value = max.value
    }

})

// Set the default selected option if one is not provided
const setDefaultSelectedOption = () => {
    inputValueRef.value = props.inputValue || 1;
    emits('input-value', inputValueRef.value);
}

function increment() {
    inputValueRef.value = Math.min(inputValueRef.value + step.value, max.value);
    if (inputValueRef.value > max)
        inputValueRef.value = max
    emits('input-value', inputValueRef.value);
}

function decrement() {
    inputValueRef.value = Math.max(inputValueRef.value - step.value, min.value);
    if (inputValueRef.value < 0)
        inputValueRef.value = 0
    emits('input-value', inputValueRef.value);
}

</script>

<style scoped>
.custom-input-number {
    border: 1px solid var(--primary-color);
    background-color: transparent;
    border-radius: 0.5rem;
    padding: 0.5rem 1rem;
    font-weight: 300;
    text-align: center;
    width: 10ch;
}

.custom-input-number button {
    background-color: transparent;
    border: transparent;
}

input[type="number"] {
    -webkit-appearance: textfield;
    -moz-appearance: textfield;
    appearance: textfield;
    background: transparent;
    border: none;
    text-align: center;
    font-size: 1rem;
    font-weight: 400;
}

input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button {
    -webkit-appearance: none;
}

.vicon {
    cursor: pointer;
}
</style>
