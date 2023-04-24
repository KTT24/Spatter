// https://nuxt.com/docs/api/configuration/nuxt-config

import { fileURLToPath } from "url";

export default {
    buildModules: [
        '@nuxtjs/style-resources',
        '@nuxtjs/vite'
    ],
    css: [
        '~/assets/style/style.scss'
    ]
}
