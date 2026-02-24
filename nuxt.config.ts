// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  css: [
    '~/style/main.css'
  ],
<<<<<<< HEAD
  app: {
    baseURL: '/Nuxt-2026/',
    buildAssetsDir: '/_nuxt/'
=======
  // app: {
  //   baseURL: '/Nuxt-2026/'
  // },
  router: {
    base: '/Nuxt-2026/'
  },
  // build
  nitro: {
    output: {
      dir: 'dist',
      publicDir: 'dist',
    }
  },
  generate: {
    dir: 'dist'
>>>>>>> 04caedb (Update - 2026-02-24_12-56)
  },
  devtools: { enabled: true }
})
