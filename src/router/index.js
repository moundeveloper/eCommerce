import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/home.vue";
import CustomizeShirt from "../views/customize-shirt.vue";
import Catalog from "../views/catalog.vue";
import Cart from "../views/cart.vue";
import Contacts from "../views/contacts.vue";
import Admin from "../views/admin.vue";
import CartItems from "../views/cart-items.vue";
import CartHistory from "../views/cart-history.vue";

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
    path: "/contacts",
    name: "contacts",
    component: Contacts,
  },
  ,
  {
    path: "/admin",
    name: "admin",
    component: Admin,
  },
  {
    path: "/cart",
    name: "cart",
    component: Cart,
    redirect: "/cart/items",
    children: [
      {
        path: "items",
        name: "items",
        component: CartItems,
      },
      {
        path: "history",
        name: "history",
        component: CartHistory,
      },
    ],
  },
];

const router = createRouter({
  mode: "history",
  history: createWebHistory("/"),
  routes,
});

export { router };
