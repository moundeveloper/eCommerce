<script setup>
import NavBar from './components/NavBar.vue';
import Footer from './components/Footer.vue';
</script>

<template>
    <div class="custom-container flex flex-col">
        <header class="py-2 px-7 z-2 flex items-center justify-between" >
            <NavBar />
        </header>
        <main class="grow z-2">
            <router-view :key="$route.fullPath"></router-view>
        </main>
           <Footer />
    </div>
</template>

<style scoped>
.custom-container {
    /* Qui modificate l'altezza totale dell'intera app in vh*/
    background: -webkit-linear-gradient(43deg, rgb(27, 22, 26) 0%, rgb(76, 56, 70) 100%);
    background: -o-linear-gradient(43deg, rgb(27, 22, 26) 0%, rgb(76, 56, 70) 100%);
    background: -ms-linear-gradient(43deg, rgb(27, 22, 26) 0%, rgb(76, 56, 70) 100%);
    background: -moz-linear-gradient(43deg, rgb(27, 22, 26) 0%, rgb(76, 56, 70) 100%);
    background: linear-gradient(47deg, rgb(27, 22, 26) 0%, rgb(76, 56, 70) 100%);
    background-image: url("/assets/gradient.png");
    background-size: cover;
    z-index: 0;
}
</style>
