// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  css: [
    '~/style/main.css'
  ],
  app: {
    baseURL: '/Nuxt-2026/'
  },
  devtools: { enabled: true }
})
