// https://nuxt.com/docs/api/configuration/nuxt-config

import { fileURLToPath } from "url"

export default defineNuxtConfig({
  modules: ["@nuxt/image"],
  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/scss/main.scss" as *;',
        },
      },
    },
  },
})