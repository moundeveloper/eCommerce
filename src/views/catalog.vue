<template>
    <div class="title"><h2>Catalogo</h2></div>
    <div class="boxes">
        <div class="box">T-shirt</div>
        <div class="box">T-shirt</div>
        <div class="box">T-shirt</div>
    </div>

</template>


<script setup>
</script>

<style scoped>
.title{
    display: flex;
    justify-content: center;
    color: white;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
.title h2{
    display: inline;
}
.boxes{
    display: flex;
    gap: 7.8rem;
    margin: 10px;
    
}
.box{
   background-color: white;
 padding: 1rem;
    
}
</style>