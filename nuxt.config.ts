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

  // Für GitHub Pages (statisches Hosting)
  ssr: false,

  app: {
    // lokal "/" | auf GitHub Pages "/KlaraStudio/"
    // baseURL: process.env.NODE_ENV === 'production' ? '/KlaraStudio/' : '/',
    baseURL: '/KlaraStudio/',
  },

  // WICHTIG für Nuxt auf GitHub Pages
  nitro: {
    preset: 'github_pages',
  },
})
