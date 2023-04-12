<template>
    <nav class="bg-red">
        <ul>
            <li><router-link to="/">Go to welcome</router-link></li>
            <li><router-link to="/home">Go to home</router-link></li>
        </ul>
    </nav>
    <p v-if="show">sdhakjhdkjsahdkas</p>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { ref, watchEffect } from 'vue';

const route = useRoute()
const show = ref(true)


watchEffect(() => {
    if (route.fullPath === "/home") {
        show.value = false
        console.log(show.value)
    } else {
        show.value = true
    }
})
</script>

<style scoped></style>