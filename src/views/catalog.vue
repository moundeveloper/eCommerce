<template>
    <h2 class="title">Catalogo</h2>
<div class="boxes">
        
    <div class="box"><img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHMKLi3j-EDHh86ytdhRM1rQh8S41CJ7RhSGTu5nyi11wlNZLMzl0G4JrUL5k8rFocFzI&usqp=CAU"
        alt=""/><div class="t-shirt">T-shirt</div><div class="price"><span>Prezzo :</span><span>23 EUR</span></div> <div class="real"><button>click for more</button></div></div>
        
    <div class="box"><img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHMKLi3j-EDHh86ytdhRM1rQh8S41CJ7RhSGTu5nyi11wlNZLMzl0G4JrUL5k8rFocFzI&usqp=CAU"
        alt=""/><div class="t-shirt">T-shirt</div><div class="price"><span>Prezzo :</span><span>23 EUR</span></div> <div class="real"><button>click for more</button></div></div>

    <div class="box"><img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHMKLi3j-EDHh86ytdhRM1rQh8S41CJ7RhSGTu5nyi11wlNZLMzl0G4JrUL5k8rFocFzI&usqp=CAU"
        alt=""/><div class="t-shirt">T-shirt</div><div class="price"><span>Prezzo :</span><span>23 EUR</span></div> <div class="real"><button>click for more</button> </div></div>
</div>  
</template>
<script setup>
</script>

<style scoped>

.t-shirt{
    display: flex;
    color: black;
    justify-content: center;
    align-items: center;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif ;
    
}
.price{
    display: flex;
    gap: 7.3rem;
    color: black;
}
span{
    color: black;
}
.title{
    display: flex;
    justify-content: center;
    color: white;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
.title h2{
    display: inline;
}
p{
    display: flex;
    color: black;
}
.boxes{
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 9rem;
    margin: 10px;
}
.box{
   background-color: white;
   padding: 1rem; 
   border-radius: 1rem;
   height: 50vh; 
}
button{
    padding: 0.7rem 0;
    width: 100%;
    background-color:#8136A5;
    border-radius: 0.5rem;
}
.real{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 5rem; 
}

</style>