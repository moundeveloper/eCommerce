import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/home.vue";
import CustomizeShirt from "../views/customize-shirt.vue";
import Catalog from "../views/catalog.vue";
import Cart from "../views/cart.vue";
import Admin from "../views/admin.vue";
import AdminCategory from "../views/admin-category.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/customize-shirt",
    name: "customize-shirt",
    component: CustomizeShirt,
  },
  {
    path: "/catalog",
    name: "catalog",
    component: Catalog,
  },
  {
    path: "/cart",
    name: "cart",
    component: Cart,
  },
  ,
  {
    path: "/admin",
    name: "admin",
    component: Admin,
  },
  {
    path: "/admin-category",
    name: "admin-category",
    component: AdminCategory,
  },
];

const router = createRouter({
  mode: "history",
  history: createWebHistory("/"),
  routes,
});

export { router };
