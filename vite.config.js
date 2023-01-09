// vite.config.js
import { resolve } from "path"
import { defineConfig } from "vite"

export default defineConfig({
  base: "./",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        about: resolve(__dirname, "about.html"),
        contact: resolve(__dirname, "contact.html"),
        single: resolve(__dirname, "single-post.html"),
        travel: resolve(__dirname, "category/travel.html"),
        lifestyle: resolve(__dirname, "category/lifestyle.html"),
        motivations: resolve(__dirname, "category/motivations.html"),
      },
    },
  },
})
