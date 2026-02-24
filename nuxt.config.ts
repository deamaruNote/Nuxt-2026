// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  css: [
    '~/style/main.css'
  ],
  app: {
    baseURL: '/',
    buildAssetsDir: '/_nuxt/'
  },
  devtools: { enabled: true }
})
