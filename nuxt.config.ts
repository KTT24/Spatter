// https://nuxt.com/docs/api/configuration/nuxt-config

import { fileURLToPath } from "url"

export default {
  buildModules: ["@nuxtjs/style-resources", "@nuxtjs/vite", "@nuxtjs/google-fonts"],
  css: ['~/assets/style.css'],
  modules: ['@nuxt/image',],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
}