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
    getCartTotal: (state) => {
      return state.cart
        .reduce((total, product) => {
          return parseFloat(total) + parseFloat(product.totalPrice);
        }, 0)
        .toFixed(2);
    },
    /* History cart payments getters */
    getCartHistory: (state) => state.historyCartPayments,
  },

  actions: {
    /* Cart actions */
    loadCart() {
      const localCart = JSON.parse(localStorage.getItem("cart"));
      console.log(localCart);
      if (localCart === null) localStorage.setItem("cart", JSON.stringify([]));
      if (localCart.length) this.cart = localCart;
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
      console.log(cartItem);
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
    resetOrderDate() {
      this.historyCartPayments.sort((obj1, obj2) => {
        const [day, month, year, hours, minutes, seconds] =
          obj1.date.split(/[/ :]/);
        const [day2, month2, year2, hours2, minutes2, seconds2] =
          obj2.date.split(/[/ :]/);

        // Convert the date strings to Date objects
        const dateObj1 = new Date(
          year,
          month - 1,
          day,
          hours,
          minutes,
          seconds
        );

        const dateObj2 = new Date(
          year2,
          month2 - 1,
          day2,
          hours2,
          minutes2,
          seconds2
        );

        // Compare the Date objects and return the comparison result
        return dateObj2 - dateObj1;
      });
    },
    orderByDateHistory(mode) {
      if (mode === "desc") {
        this.historyCartPayments.sort((obj1, obj2) => {
          const [day, month, year, hours, minutes, seconds] =
            obj1.date.split(/[/ :]/);
          const [day2, month2, year2, hours2, minutes2, seconds2] =
            obj2.date.split(/[/ :]/);

          // Convert the date strings to Date objects
          const dateObj1 = new Date(
            year,
            month - 1,
            day,
            hours,
            minutes,
            seconds
          );

          const dateObj2 = new Date(
            year2,
            month2 - 1,
            day2,
            hours2,
            minutes2,
            seconds2
          );

          // Compare the Date objects and return the comparison result
          return dateObj2 - dateObj1;
        });

        return;
      }
      this.historyCartPayments.sort((obj1, obj2) => {
        const [day, month, year, hours, minutes, seconds] =
          obj1.date.split(/[/ :]/);
        const [day2, month2, year2, hours2, minutes2, seconds2] =
          obj2.date.split(/[/ :]/);

        // Convert the date strings to Date objects
        const dateObj1 = new Date(
          year,
          month - 1,
          day,
          hours,
          minutes,
          seconds
        );

        const dateObj2 = new Date(
          year2,
          month2 - 1,
          day2,
          hours2,
          minutes2,
          seconds2
        );
        // Compare the Date objects and return the comparison result
        return dateObj1 - dateObj2;
      });
    },
    orderByCostHistory(mode) {
      if (mode === "desc") {
        this.historyCartPayments.sort((a, b) => {
          // Compare the totalPrice values
          return b.totalPrice - a.totalPrice;
        });
        return;
      }
      this.historyCartPayments.sort((a, b) => {
        // Compare the totalPrice values
        return a.totalPrice - b.totalPrice;
      });
    },
    orderByAmountHistory(mode) {
      if (mode === "desc") {
        this.historyCartPayments.sort((a, b) => {
          // Compare the totalPrice values
          return b.cartItemLength - a.cartItemLength;
        });
        return;
      }
      this.historyCartPayments.sort((a, b) => {
        // Compare the totalPrice values
        return a.cartItemLength - b.cartItemLength;
      });
    },
  },
});
