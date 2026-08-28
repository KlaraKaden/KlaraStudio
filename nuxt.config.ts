import { readFileSync } from 'node:fs'
import { join } from 'node:path'

type RecipeEntry = {
  slug?: string
}

function loadRecipeRoutes() {
  try {
    const file = join(process.cwd(), 'public', 'recipes.json')
    const raw = readFileSync(file, 'utf8')
    const recipes = JSON.parse(raw) as RecipeEntry[]

    return recipes
      .filter((recipe) => recipe && recipe.slug)
      .map((recipe) => `/recipes/${recipe.slug}`)
  } catch {
    return []
  }
}


// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  vite: {
    optimizeDeps: {
      include: [
        '@vueuse/core',
        'three',
        // '@public-ui/components', 
        // '@public-ui/vue'
      ]
    }
  },

  router: {
    options: {
      scrollBehaviorType: 'smooth'
    }
  },

  // css: [
  //   '~/assets/style.css',
  // ],

  // Für GitHub Pages (statisches Hosting)
  ssr: false,

  // css: ['~/assets/style.css'],

  app: {
    // lokal "/" | auf GitHub Pages "/KlaraStudio/"
    // baseURL: process.env.NODE_ENV === 'production' ? '/KlaraStudio/' : '/',
    baseURL: '/KlaraStudio/',
    head: {
    //   title: 'ALLES KLARA.',
    //   meta: [
    //     { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    //     { name: 'description', content: 'Beschreibung der Seite' }
    //   ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/KlaraStudio/favicon.ico' },
        { rel: 'icon', type: 'image/png', href: '/KlaraStudio/favicon.png' },
        { rel: 'apple-touch-icon', href: '/KlaraStudio/favicon.png' },
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined' }
      ]
    }
  },

  // WICHTIG für Nuxt auf GitHub Pages
  nitro: {
    preset: 'github_pages',
    prerender: {
      routes: ['/', ...loadRecipeRoutes()],
    },
  },

  // vue: {
  //   compilerOptions: {
  //     // treat dashed tags as custom elements so Vue doesn't try to compile them
  //     isCustomElement: (tag) => tag.includes('-')
  //   }
  // }
})
