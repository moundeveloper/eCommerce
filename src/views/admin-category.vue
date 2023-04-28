<template>
    <div class="flex flex-col">
        <div class="self-center flex flex-col items-center">
            <h1>Admin</h1>
            <button>+</button>
        </div>
        
        <div class="products-bar flex flex-row">
            <button>Fliter</button>
            <p>Prodotti disponibili: </p>
        </div>
        <div class="products"></div>

    </div>
</template>

<script setup>

</script>

<style  scoped>
    .products-bar{
        justify-content: space-between;

    }
    

</style>