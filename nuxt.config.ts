// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  css: [
    '~/style/main.css'
  ],
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
  },
  devtools: { enabled: true }
})
