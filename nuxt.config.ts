// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        // baseURL: '/dcomb-nuxt3-static-page/', // baseURL: '/<repository>/'
    },
    devtools: {enabled: true},
    modules: [
        '@pinia/nuxt',
        '@pinia-plugin-persistedstate/nuxt',
        '@unocss/nuxt',
        '@nuxt/image',
        'nuxt-simple-sitemap',
        'nuxt-gtag'
    ],
    pinia: {
        autoImports: [
            // automatically imports `defineStore`
            'defineStore', // import { defineStore } from 'pinia'
            ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
        ],
    },
    site: {
        url: 'https://web.dco.tw'
    },
    gtag: {
        id: 'G-NENSXF1GL6'
    },
    image: {
        domains: ['dcomb-web.s3.ap-northeast-1.amazonaws.com']
    }
})
