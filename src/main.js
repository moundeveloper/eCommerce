import { createApp } from "vue";
import "./assets/global.css";
import { createPinia } from "pinia";
import App from "./App.vue";
import { router } from "./router";
import { OhVueIcon, addIcons } from "oh-vue-icons";
import * as MaterialDesignIcons from "oh-vue-icons/icons/md";
import * as FontAwesome from "oh-vue-icons/icons/fa";
import "uno.css";

const pinia = createPinia();
const Md = Object.values({ ...MaterialDesignIcons });
const Fa = Object.values({ ...FontAwesome });
addIcons(...Md);
addIcons(...Fa);
const app = createApp(App).use(router).use(pinia);
app.component("v-icon", OhVueIcon);
router.isReady().then(() => app.mount("#app"));
