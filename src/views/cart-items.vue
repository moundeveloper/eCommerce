<template>
    <div class="flex justify-between gap-10 py-16 cart-elements">
        <CartList />
        <ReportisticaCarrello />
    </div>
</template>

<script setup>
import CartList from '../components/CartList.vue';
import ReportisticaCarrello from '../components/ReportisticaCarrello.vue';
</script>

<style scoped>
@media only screen and (max-width: 1100px) {

    .cart-elements {
        flex-direction: column;
        align-items: center;
    }

}
</style>