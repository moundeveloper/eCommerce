import { createApp } from "vue";
import "./assets/global.css";
import { createPinia } from "pinia";
import App from "./App.vue";
import { router } from "./router";
import { OhVueIcon, addIcons } from "oh-vue-icons";
import * as MaterialDesignIcons from "oh-vue-icons/icons/md";
import "uno.css";

const pinia = createPinia();
const Md = Object.values({ ...MaterialDesignIcons });

addIcons(...Md);

const app = createApp(App).use(router).use(pinia);
app.component("v-icon", OhVueIcon);
router.isReady().then(() => app.mount("#app"));
