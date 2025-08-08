export default defineNuxtConfig({
  target: 'static',
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
