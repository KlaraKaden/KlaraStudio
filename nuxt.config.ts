// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  vite: {
    optimizeDeps: {
      include: [
        '@vueuse/core',
        'three',
      ]
    }
  },

  // css: [
  //   '~/assets/style.css',
  // ],
})
