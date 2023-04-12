<template>
    <div>
        Home
        <ShirtRenderer />
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import ShirtRenderer from '../components/ShirtRenderer.vue';

const route = useRoute()
</script>

<style scoped></style>