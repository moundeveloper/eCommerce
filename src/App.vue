<script setup>
import NavBar from './components/NavBar.vue';
import Footer from './components/Footer.vue';
import { useCartStore } from './store/cart';

const store = useCartStore()
store.loadCart()


</script>

<template>
    <div class="custom-container flex flex-col">
        <header class="py-2 px-7 grid items-center">
            <NavBar />
        </header>
        <main class="flex flex-col grow z-2">
            <router-view :key="$route.fullPath">
            </router-view>
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

    grid-template-columns: 1fr 1fr 1fr;
}

@media only screen and (max-width: 900px) {
    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
}
</style>


<style >
.slide-fade-enter-active {
    transition: all 0.2s ease-out;
}

.slide-fade-leave-active {
    transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateX(20px);
    opacity: 0;
}
</style>