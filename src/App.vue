<script setup>
import NavBar from './components/NavBar.vue';
</script>

<template>
    <div class="custom-container flex flex-col">
        <header class="py-1 bg-green">
            <NavBar />
        </header>
        <main class="grow bg-blue">
            <router-view :key="$route.fullPath"></router-view>
        </main>
    </div>
</template>

<style scoped>
.custom-container {
    /* Qui modificate l'altezza totale dell'intera app in vh*/
    height: 100vh;
}
</style>
