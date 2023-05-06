<template>
    <div class="drop-down-menu-wraper">
        <div type="button" class="select-button w-full flex gap-10 glassmorphism" @click="isOpen = !isOpen">
            {{ selectedOption.label }}
            <v-icon name="md-arrowdropdown" fill="var(--primary-color)" class="ml-auto" />
        </div>

        <ul v-if="isOpen" class="select-options w-full glassmorphism">
            <li v-for="(option, i) in props.options" :key="i" @click="selectOption(option)">
                {{ option.label }}
            </li>
        </ul>
    </div>
</template>

<script setup>
import { ref, onMounted, watchEffect } from 'vue';

const options = ref([]);
const selectedOption = ref("");
const isOpen = ref(false);
const props = defineProps({
    options: Array,
    defaultValue: String
})

const emits = defineEmits(['option-selected']);

const longestLabel = () => {
    return (props.options.find(obj => obj.label.length === Math.max(...props.options.map(o => o.label.length)))).label.length;
}

onMounted(() => {
    const dropDownMenuWraper = document.querySelector('.drop-down-menu-wraper');
    dropDownMenuWraper.style.minWidth = `${longestLabel() + 8}ch`
    setDefaultSelectedOption()
})

function selectOption(option) {
    selectedOption.value = option;
    isOpen.value = false;
    emits('option-selected', option);
}

// Set the default selected option if one is not provided
const setDefaultSelectedOption = () => {
    if (props.defaultValue) {
        const indexDefaultValue = props.options.findIndex(element => element.value === props.defaultValue);
        selectedOption.value = props.options[indexDefaultValue];
        emits('option-selected', props.options[indexDefaultValue]);
        return
    }
    selectedOption.value = props.options[0];
    emits('option-selected', props.options[0]);
}
/* watchEffect(() => {
    selectedOption.value = props.options[0];
    emits('option-selected', props.options[0]);
}) */



</script>

<style scoped>
.drop-down-menu-wraper {
    position: relative;
}

.select-button {
    padding: 0.5rem;
    color: var(--primary-color);
    border: 1px solid var(--primary-color);
    border-radius: 0.25rem;
    cursor: pointer;
    font-size: .9rem;
    font-weight: 300;
}

.select-options {
    position: absolute;
    margin-top: 0.5rem;
    padding: 0.25rem 0;
    border: 1px solid var(--primary-color);
    border-radius: 0.25rem;
    list-style: none;
    max-height: 10rem;
    overflow-y: auto;
    z-index: 20;
}

.select-options li {
    padding: 0.5rem;
    cursor: pointer;
    font-size: .9rem;
    color: var(--primary-color);
    font-weight: 300;
}

.select-options li:hover {
    background-color: var(--accent-light-color);
}

.select-options li.active {
    background-color: var(--secondary-color);
    color: var(--primary-color);
}
</style>
