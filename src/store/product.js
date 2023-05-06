import { defineStore } from "pinia";
import { v4 as uuidv4 } from "uuid";
import defaultProducts from "./defaultProducts.json";

export const useProductStore = defineStore("productStore", {
  state: () => ({
    products: [],
  }),
  getters: {
    getProducts: (state) => state.products,
    getProductById: (state) => (id) => {
      return state.products.find((product) => product.id === id);
    },
  },
  actions: {
    loadProducts() {
      const localProducts = JSON.parse(localStorage.getItem("products"));
      if (localProducts) {
        this.products = localProducts;
      } else {
        this.products = defaultProducts;
      }
    },
    addProduct(newProduct) {
      this.products.push(newProduct);
      localStorage.setItem("products", JSON.stringify(this.products));
    },
    deleteProduct(id) {
      this.products = this.products.filter((product) => product.id !== id);
      localStorage.setItem("products", JSON.stringify(this.products));
    },
    saveProduct(editedProduct) {
      this.products = this.products.map((product) => {
        if (product.id === editedProduct.id) {
          return editedProduct;
        }
        return product;
      });
      localStorage.setItem("products", JSON.stringify(this.products));
    },
  },
});
