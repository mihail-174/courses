//
export default defineNuxtConfig({
  app: {
    baseURL: '/courses/'
  },
  devtools: { enabled: true },
  ssr: true,
  css: ['~/assets/style.css'],
  modules: [
      '@pinia/nuxt'
  ]
})
