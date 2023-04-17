<template>

    <!-- Contenuto: logo, nav con i link & link fuori dalla nav per il carrello -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <div class="logo">
      <svg width="30"  viewBox="0 0 1160 1265" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="894.506" height="81.3831" fill="white"/>
        <rect x="487.944" y="81.3831" width="894.506" height="81.3831" transform="rotate(90 487.944 81.3831)" fill="white"/>
        <rect x="183.792" y="288.389" width="487.944" height="81.3831" fill="white"/>
        <rect x="671.737" y="369.772" width="894.506" height="81.3831" transform="rotate(90 671.737 369.772)" fill="white"/>
        <path d="M671.737 288.388C735.815 288.388 799.266 301.009 858.466 325.53C917.666 350.052 971.457 385.994 1016.77 431.304C1062.08 476.613 1098.02 530.404 1122.54 589.604C1147.06 648.805 1159.68 712.255 1159.68 776.333C1159.68 840.411 1147.06 903.861 1122.54 963.061C1098.02 1022.26 1062.08 1076.05 1016.77 1121.36C971.457 1166.67 917.666 1202.61 858.466 1227.14C799.266 1251.66 735.815 1264.28 671.737 1264.28L671.737 1183.2C725.168 1183.2 778.076 1172.68 827.44 1152.23C876.803 1131.78 921.656 1101.81 959.438 1064.03C997.219 1026.25 1027.19 981.399 1047.64 932.035C1068.08 882.671 1078.61 829.764 1078.61 776.333C1078.61 722.902 1068.08 669.994 1047.64 620.631C1027.19 571.267 997.219 526.414 959.438 488.632C921.656 450.851 876.803 420.881 827.44 400.434C778.076 379.987 725.168 369.463 671.737 369.463L671.737 288.388Z" fill="white"/>
        </svg>
    </div>

  <!-- Contenuto: logo, nav con i link & link fuori dalla nav per il carrello -->
  <nav class="flex gap-4 justify-center">
    <router-link to="/">Home</router-link>
    <router-link to="/customize-shirt">Customize</router-link>
    <router-link to="/catalog">Catalog</router-link>
    <router-link to="/cart">Cart</router-link>


    <!-- Le icone si usano in questo modo e le cercate da https://oh-vue-icons.js.org/docs 
            il name delle icone è sempre in lower-case con il trattino
        -->
    </nav>
   
  <button class="btn"><v-icon name="md-shoppingbag-round" fill="black"/>CARRELO</button>
</template>

<script setup></script>

<style scoped>
a{
    text-transform: capitalize;
}
header{
    padding: 2rem 0;
}

a{
    color: white;
    text-decoration: none;
    letter-spacing: 3px;
}

button{
    background-color:white;
    color: black;
    padding: 0.5rem 1rem;
    font-size: 1rem; 
    cursor: pointer;
    border-radius: 0.8rem;
    display: flex;
    gap: 0.7rem;
    right: 0;
   align-items: center;
}
@media screen {
    
}
</style>