// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  css: [
    '~/style/main.css'
  ],
  app: {
    baseURL: '/'
  },
  devtools: { enabled: true }
})
