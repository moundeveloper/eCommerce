import { defineStore } from "pinia";
import { v4 as uuidv4 } from "uuid";

function getCurrentDate() {
  const currentDate = new Date();
  const day = currentDate.getDate().toString().padStart(2, "0");
  const month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
  const year = currentDate.getFullYear().toString();
  const hours = currentDate.getHours().toString().padStart(2, "0");
  const minutes = currentDate.getMinutes().toString().padStart(2, "0");
  const seconds = currentDate.getSeconds().toString().padStart(2, "0");
  return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
}

export const useCartStore = defineStore("cartStore", {
  state: () => ({
    cart: [],
    historyCartPayments: [],
  }),
  getters: {
    /* cart getters */
    getCart: (state) => state.cart,
    getCartCounter: (state) => state.cart.length,
    getCartTotal: (state) =>
      state.cart.reduce((total, product) => {
        return total + parseInt(product.totalPrice);
      }, 0),

    /* History cart payments getters */
    getCartHistory: (state) => state.historyCartPayments,
  },

  actions: {
    /* Cart actions */
    loadCart() {
      const localCart = JSON.parse(localStorage.getItem("cart"));
      if (localCart) this.cart = localCart;
    },
    setMerch() {
      /* TO-DO */
    },
    setCartItem(editedCartItem) {
      this.cart.map((cartItem) => {
        if (cartItem.id === editedCartItem.id) {
          return editedCartItem;
        }
        return cartItem;
      });
      localStorage.setItem("cart", JSON.stringify(this.cart));
    },
    addCartItem(cartItem) {
      this.cart.push(cartItem);
      localStorage.setItem("cart", JSON.stringify(this.cart));
    },
    removeFromCart(id) {
      this.cart = this.cart.filter((cartItem) => cartItem.id !== id);
      localStorage.setItem("cart", JSON.stringify(this.cart));
    },
    clearCart() {
      this.cart = [];
      localStorage.setItem("cart", JSON.stringify(this.cart));
    },

    /* History cart payments actions */
    loadCartHistory() {
      const localCartHistory = JSON.parse(localStorage.getItem("cart-history"));
      if (localCartHistory) this.historyCartPayments = localCartHistory;
    },
    addCartHistory(cart, totalPrice, cartItemLength) {
      this.historyCartPayments.push({
        id: uuidv4(),
        cart: cart,
        date: getCurrentDate(),
        cartItemLength: cartItemLength,
        totalPrice: totalPrice,
      });
      localStorage.setItem(
        "cart-history",
        JSON.stringify(this.historyCartPayments)
      );
    },
  },
});
