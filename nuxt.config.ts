export default defineNuxtConfig({
  app: {
    baseURL: process.env.NODE_ENV === 'production' ? '/portafolio/' : '/',
    buildAssetsDir: '/_nuxt/'
  },
  css: ['~/assets/main.css'],
  
  // Agrega esta configuración para generar sitio estático
  ssr: true,
  nitro: {
    preset: 'static'
  }
})