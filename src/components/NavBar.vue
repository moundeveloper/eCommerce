<template>
    <!-- Contenuto: logo, nav con i link & link fuori dalla nav per il carrello -->
    <nav class="flex gap-4 justify-center">
        <router-link to="/">home</router-link>
        <router-link to="/customize-shirt">customize</router-link>
        <router-link to="/catalog">catalog</router-link>
        <router-link to="/cart">cart</router-link>

        <!-- Le icone si usano in questo modo e le cercate da https://oh-vue-icons.js.org/docs 
            il name delle icone è sempre in lower-case con il trattino
        -->
        <v-icon name="md-add" />
    </nav>
</template>

<script setup>

</script>

<style scoped></style>