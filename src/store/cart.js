import { defineStore } from "pinia";

export const useCartStore = defineStore("cartStore", {
  state: () => {
    return { cart: [] };
  },
  getters: {
    getCart: (state) => state.cart,
  },
  actions: {
    loadCart() {
      const localCart = JSON.parse(localStorage.getItem("cart"));
      if (localCart) this.cart = localCart;
    },
    setMerch() {
      /* TO-DO */
    },
    addCartItem(cartItem) {
      this.cart.push(cartItem);
      localStorage.setItem("cart", JSON.stringify(this.cart));
    },
    removeFromCart(id) {
      this.cart = this.cart.filter((cartItem) => cartItem.id !== id);
      localStorage.setItem("cart", JSON.stringify(this.cart));
    },
  },
});
