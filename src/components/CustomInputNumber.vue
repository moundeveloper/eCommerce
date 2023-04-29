<template>
    <div type="button" class="custom-input-number flex justify-between items-center">
        <span>{{ inputValueRef }}</span>
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
import { ref, onMounted } from 'vue';

const inputValueRef = ref(1);
const props = defineProps({
    inputValue: Number,
})
const emits = defineEmits(['input-value']);
onMounted(() => {
    setDefaultSelectedOption()
})


// Set the default selected option if one is not provided
const setDefaultSelectedOption = () => {
    inputValueRef.value = props.inputValue || 1;
    emits('input-value', props.inputValue);
}

const min = ref(1);
const max = ref(50);
const step = ref(1);

function increment() {
    inputValueRef.value = Math.min(inputValueRef.value + step.value, max.value);
    emits('input-value', inputValueRef.value);
}

function decrement() {
    inputValueRef.value = Math.max(inputValueRef.value - step.value, min.value);
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

.vicon {
    cursor: pointer;
}
</style>
