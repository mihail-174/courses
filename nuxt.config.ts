export default defineNuxtConfig({
  target: 'static',
  app: {
    baseURL: '/courses/'
  },
  router: {
    base: '/courses/'
  },
  devtools: { enabled: false },
  ssr: true,
  css: ['~/assets/style.css'],
  modules: [
      '@pinia/nuxt'
  ]
})
