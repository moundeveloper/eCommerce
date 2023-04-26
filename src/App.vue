<script setup>
import NavBar from './components/NavBar.vue';
import Footer from './components/Footer.vue';
import { useCartStore } from './store/cart';

const store = useCartStore()
store.loadCart()

</script>

<template>
    <div class="custom-container flex flex-col">
        <header class="py-2 px-7 z-2 flex items-center justify-between">
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
    min-height: 100vh;
    z-index: 0;
    background: url("/assets/decoration.svg");
}

header {
    padding-top: 1rem;
    padding-bottom: 1rem;
    z-index: 4;
}
</style>
