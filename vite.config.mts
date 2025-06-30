import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "node:path";
import { fileURLToPath } from "node:url";
import tailwindcss from "@tailwindcss/vite";
import Components from "unplugin-vue-components/vite";

export default defineConfig({
  plugins: [
    vue(),
    Components({
      dirs: [
        path.resolve("src/app/components"),
        path.resolve("src/app/layouts")
      ]
    }),
    tailwindcss()
  ],
  resolve: {
    alias: {
      "#src": fileURLToPath(new URL("src", import.meta.url))
    }
  },
  publicDir: fileURLToPath(new URL("public", import.meta.url)),
  build: {
    manifest: true,
    outDir: path.resolve("build/client"),
    rollupOptions: {
      input: {
        main: "./src/app/index.html"
      }
    }
  }
});
