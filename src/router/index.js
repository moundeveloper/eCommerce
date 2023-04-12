import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/home.vue";
import Welcome from "../views/welcome.vue";

const routes = [
  {
    path: "/",
    name: "welcome",
    component: Welcome,
  },
  {
    path: "/home",
    name: "home",
    component: Home,
  },
];

const router = createRouter({
  mode: "history",
  history: createWebHistory("/"),
  routes,
});

export { router };
