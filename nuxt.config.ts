// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/ui', '@nuxt/eslint'],
  css: ['~/assets/main.css'],
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  eslint: {}
});
