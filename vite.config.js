import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import UnoCSS from "unocss/vite";
import { presetUno } from "unocss";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), UnoCSS({ presets: [presetUno()] })],
});
