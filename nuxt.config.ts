// https://nuxt.com/docs/api/configuration/nuxt-config

import { fileURLToPath } from "url"

export default {
  buildModules: ["@nuxtjs/style-resources", "@nuxtjs/vite", "@nuxtjs/google-fonts"],
  modules: ["@nuxt/image"],
  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },
  image: {
    format: ['webp']
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
}