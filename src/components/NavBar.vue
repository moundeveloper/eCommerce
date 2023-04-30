<template>
  <!--Logo -->
  <router-link class="logo" to="/">
    <svg width="30" viewBox="0 0 1160 1265" fill="none" xmlns="http://www.w3.org/2000/svg">
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
  <!-- Link nav-->
  <nav ref="nav" class="flex gap-4 justify-center justify-self-center" :class="{ 'glassmorphism': isSmallScreen() }">
    <button class="exit-button" @click="menuhide">
      <v-icon name="md-close" fill="var(--secondary-color)" scale="1.5" />
    </button>
    <router-link to="/">Home</router-link>
    <router-link to="/customize-shirt">Customize</router-link>
    <router-link to="/catalog">Catalog</router-link>
    <router-link to="/contacts">Contacts</router-link>
  </nav>
  <!-- Icona carrello-->

  <router-link to="/cart" class="cart-link justify-self-end">
    <v-icon name="md-shoppingbag-round" class="cart-icon" fill="var(--primary-color)" scale="1.5" />
    <div class="cart-counter">{{ store.getCartCounter }}</div>
  </router-link>

  <!-- Icona menu -->

  <button class="menu-button" @click="menushow">
    <v-icon name="md-menu" fill="var(--primary-color)" class="menu-icon" scale="1.5" /></button>
</template>

<script setup>
import { ref } from 'vue';
import { useCartStore } from '../store/cart';

const store = useCartStore()
const nav = ref("")

const menushow = () => {
  nav.value.classList.add("show")
}
const menuhide = () => {
  nav.value.classList.remove("show")
}

/* Apply glassmorphism in mobile */
window.addEventListener('resize', () => {
  if (window.innerWidth < 900) {
    nav.value.classList.add("glassmorphism")
    return
  }
  nav.value.classList.remove("glassmorphism")
})

const isSmallScreen = () => {
  return window.innerWidth < 900;
}

</script>

<style scoped>
a {
  text-transform: capitalize;
  color: var(--primary-color);
  text-decoration: none;
  letter-spacing: 3px;
}

button {
  background: transparent;
  border: transparent;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 0.8rem;
  display: flex;
  gap: 0.7rem;
  right: 0;
  align-items: center;
}

.cart-link {
  position: relative;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
}

.cart-link span {
  display: flex;
  color: var(--primary-color);
  font-weight: 400;
}

.exit-button {
  display: none;
}

nav a {
  border-bottom: 1px solid transparent;
  padding-bottom: 0.5rem;
  font-weight: 500;
}

nav a:hover {
  border-color: var(--primary-color);
}

.menu-button {
  display: none;
}

.cart-counter {
  position: absolute;
  top: 0;
  right: 0;
}

@media only screen and (max-width: 900px) {
  nav {
    position: fixed;
    justify-self: flex-end;
    flex-direction: column;
    top: 0;
    right: 0;
    padding: 1rem 1.5rem;
    gap: 2rem;
    height: 100%;
    justify-content: flex-start;
    display: none;
    z-index: 2;
    width: 15rem;
    border-left: 1px solid var(--secondary-color);
  }


  nav a {
    color: var(--secondary-color);
  }

  nav a:hover {
    border-color: var(--secondary-color);
  }

  .exit-button {
    display: block;
    align-self: flex-end;
  }

  .cart-link span {
    display: none;
  }

  .cart-icon,
  .menu-icon {
    fill: var(--primary-color);
  }


  .cart-link {
    display: block;
    margin-left: auto;
    margin-right: 0.5rem;
    border: transparent;
  }

  .menu-button {
    display: block;
  }

  .show {
    display: flex;
  }
}
</style>