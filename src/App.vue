<script setup>
import NavBar from './components/NavBar.vue';
</script>

<template>
    <div class="custom-container flex flex-col">
        <header class="py-1 ">
            <NavBar />
        </header>
        <main class="grow ">
            <router-view :key="$route.fullPath"></router-view>
        </main>
    </div>
</template>

<style scoped>
.custom-container {
    /* Qui modificate l'altezza totale dell'intera app in vh*/
    height: 100vh;
    background: -webkit-linear-gradient(43deg, rgb(27, 22, 26) 0%, rgb(76, 56, 70) 100%);
    background: -o-linear-gradient(43deg, rgb(27, 22, 26) 0%, rgb(76, 56, 70) 100%);
    background: -ms-linear-gradient(43deg, rgb(27, 22, 26) 0%, rgb(76, 56, 70) 100%);
    background: -moz-linear-gradient(43deg, rgb(27, 22, 26) 0%, rgb(76, 56, 70) 100%);
    background: linear-gradient(47deg, rgb(27, 22, 26) 0%, rgb(76, 56, 70) 100%);

}
</style>
