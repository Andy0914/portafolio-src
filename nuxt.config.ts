export default defineNuxtConfig({
  app: {
    baseURL: process.env.NODE_ENV === 'production' ? '/portafolio/' : '/',
    buildAssetsDir: '/_nuxt/'
  },
  css: ['~/assets/main.css'],
  // Agrega esto para generar sitio estático correctamente
  ssr: true,
  nitro: {
    preset: 'static'
  }
})