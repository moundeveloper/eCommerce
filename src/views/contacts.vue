<template>
<div class="everything">
    <div class="left"> 
     <router-link class="logo" to="/">

<svg width="200" viewBox="0 0 1160 1265" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="894.506" height="81.3831" fill="var(--primary-color)" />
  <rect x="487.944" y="81.3831" width="894.506" height="81.3831" transform="rotate(90 487.944 81.3831)"
    fill="var(--primary-color)" />
  <rect x="183.792" y="288.389" width="487.944" height="81.3831" fill="var(--primary-color)" />
  <rect x="671.737" y="369.772" width="894.506" height="81.3831" transform="rotate(90 671.737 369.772)"
    fill="var(--primary-color)" />
  <path
    d="M671.737 288.388C735.815 288.388 799.266 301.009 858.466 325.53C917.666 350.052 971.457 385.994 1016.77 431.304C1062.08 476.613 1098.02 530.404 1122.54 589.604C1147.06 648.805 1159.68 712.255 1159.68 776.333C1159.68 840.411 1147.06 903.861 1122.54 963.061C1098.02 1022.26 1062.08 1076.05 1016.77 1121.36C971.457 1166.67 917.666 1202.61 858.466 1227.14C799.266 1251.66 735.815 1264.28 671.737 1264.28L671.737 1183.2C725.168 1183.2 778.076 1172.68 827.44 1152.23C876.803 1131.78 921.656 1101.81 959.438 1064.03C997.219 1026.25 1027.19 981.399 1047.64 932.035C1068.08 882.671 1078.61 829.764 1078.61 776.333C1078.61 722.902 1068.08 669.994 1047.64 620.631C1027.19 571.267 997.219 526.414 959.438 488.632C921.656 450.851 876.803 420.881 827.44 400.434C778.076 379.987 725.168 369.463 671.737 369.463L671.737 288.388Z"
    fill="var(--primary-color)" />
</svg>
</router-link>
     </div>
 <div class="line mr-10"></div>
        <div class="middle">
          
             <div class="main-head"> 
                <h1 class="contacts">Contacts</h1>
                <h2 class="second-text"><span>  Drop us a line to get the </span>
                    <span>conversation started</span></h2>
            </div>

                 <form action="">
                 <input type="text" value="Name" class="glassmorphism">
                 <input type="text" value="Surname" class="glassmorphism" >
                 <input type="email" id="" value="email"  class="glassmorphism">
                 <input type="text" id="" value="Number"  class="glassmorphism">
                 <input type="text" id="messages" value="Messages"  class="glassmorphism">
                 <input type="submit" value="Sumbit" id="sumbit">
                 </form>
        </div>

<div class="right"></div>
</div>
</template>

<script setup>
</script>
<style scoped>
input{
  color: rgba(0, 0, 0, 0.527);
}
.second-text{
  display: flex;
  flex-direction: column;
  align-items: center;
 
}
.second-text span{
  font-weight: 200;
  font-size: 2rem;
}
.everything{
    display: flex;
    margin: 2rem 0;
    align-items: center;
   
}
.logo{
display: flex;
justify-self: center;
align-self: center;
margin: 8rem;
}
.middle{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 1rem;
    gap: 3rem;
}

/*.space{
display: flex;
flex-direction: column;
} */

form{
    display: flex;
  justify-content: center;
  align-items: center;
    flex-direction: column;
    column-gap: 5rem;
    margin-bottom: 2rem;
    gap: 1rem;
   
}
input{
    height: 3rem;
    width: 23rem;
    border: transparent;
    padding: 0.5rem 1rem;
    color: var(--accent-color);
    border-radius: 0.5rem;
}

#messages{
  height: 6rem;
  width: 17;

}
#sumbit{
  padding: 0.5rem 1rem;
  background-color: var(--tertiary-color);
  color: var(--accent-color);

}
.main-head{
  display: flex;
  flex-direction: column;
  
}

.contacts{
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffffa1;
  font-size: 4rem;
}
.line::before{
  content: "";
  display: flex;
  display: block;
  height: 26rem;
  width: 3px;
  background-color: rgb(149, 72, 170);
  transform: translateY(5.5rem);
}
@media (max-width:800px) {
  .left{
    display: none;
  }
  .right{
    display: none;
  }
  .line{
    display: none;
  }
  .everything{
    justify-content: center;
  }
}
</style>
