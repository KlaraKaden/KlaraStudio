<template>
  <div id="body_recipe_overview">
    <button @click="topFunction" id="topBtn" title="Go to top">
      nach oben <i class="fa-solid fa-arrow-up"></i>
    </button>

    <div class="gridcontainer">
      <aside class="sidebar-rezepte">
        <label for="searchbar" id="label">
          <input
            type="search"
            @input="search_recipe"
            id="searchbar"
            name="search"
            placeholder="Suche Rezepte..."
          >
          <i class="fa-solid fa-magnifying-glass magnifyingGlass"></i>
        </label>

        <div class="filter-list-rezepte" id="filter-options-recipe">
          <ul>
            <li @click="filterRecipe('allerezepte', $event)" :class="{ activerecipe: activeFilter === 'allerezepte' }">
              Alle Rezepte
            </li>
          </ul>

          <button class="dropdown-btn" @click="toggleDropdown($event, 'hauptspeisen')">
            Hauptspeisen <i class="fa fa-angle-down"></i>
          </button>
          <ul class="dropdown-container">
            <li @click="filterRecipe('hauptspeisen', $event)" class="burgerdisplay">Alle Hauptspeisen</li>
            <li @click="filterRecipe('auflauf', $event)">Auflauf</li>
            <li @click="filterRecipe('fleisch', $event)">Fleisch</li>
            <li @click="filterRecipe('nudeln', $event)">Nudeln</li>
            <li @click="filterRecipe('suppe', $event)">Suppe</li>
            <li @click="filterRecipe('sossen', $event)">Soßen</li>
          </ul>

          <ul>
            <li @click="filterRecipe('nachspeise', $event)">Nachspeise</li>
          </ul>

          <button class="dropdown-btn" @click="toggleDropdown($event, 'salate')">
            Salate <i class="fa fa-angle-down"></i>
          </button>
          <ul class="dropdown-container">
            <li @click="filterRecipe('salate', $event)" class="burgerdisplay">Alle Salate</li>
            <li @click="filterRecipe('mitkartoffeln', $event)">Mit Kartoffeln</li>
            <li @click="filterRecipe('mitnudeln', $event)">Mit Nudeln</li>
          </ul>

          <button class="dropdown-btn" @click="toggleDropdown($event, 'backen')">
            Backen <i class="fa fa-angle-down"></i>
          </button>
          <ul class="dropdown-container">
            <li @click="filterRecipe('backen', $event)" class="burgerdisplay" id="backen">Alle Backrezepte</li>
            <li @click="filterRecipe('kekse', $event)">Kekse</li>
            <li @click="filterRecipe('kuchen', $event)">Kuchen</li>
            <li @click="filterRecipe('torten', $event)">Torten</li>
          </ul>
        </div>
      </aside>

      <main class="main-rezepte">
        <div class="container">
          <div class="heading">
            <h3>Rezepte</h3>
          </div>
        </div>

        <template v-if="serverRecipes.length">
          <NuxtLink
            v-for="r in serverRecipes"
            :key="r.slug"
            :to="recipeLink(r.slug)"
            :class="['Rezeptseiten', 'Struktur', ...(r.categories || [])]"
          >
            <article class="recipelink">
              <div>
                <h2>{{ r.title }} <i class="fa fa-angle-right"></i></h2>
                <p>{{ r.date }}</p>
              </div>
              <img :src="resolveImage(r.image)" :alt="r.title" @error="onImgError">
            </article>
          </NuxtLink>
        </template>

        <a class="Rezeptseiten Struktur auflauf suppe nachspeise n1 n2 n3 torten" href="#">
          <article class="recipelink">
            <div>
              <h2>weitere Rezepte in Arbeit</h2>
            </div>
          </article>
        </a>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({ title: 'ALLES KLARA. - Recipe Overview' })

import fallbackImg from '~/assets/images/Bild_folgt.png'
import useScrollTop from '../../composables/useScrollTop'
import { ref, computed, nextTick, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

type Recipe = {
  slug: string
  title: string
  date?: string
  image?: string
  categories?: string[]
}

const config = useRuntimeConfig()
const route = useRoute()
const router = useRouter()
const { topFunction } = useScrollTop({ buttonSelector: '#topBtn', footerSelector: '#footer', showAfter: 100 })

const activeFilter = ref('allerezepte')
const recipeItems = ref<HTMLElement[]>([])
const visibleRecipes = ref<HTMLElement[]>([])

const recipesPath = `${config.app.baseURL}recipes.json`

const { data: initialRecipes } = await useAsyncData<Recipe[]>('recipes-overview', () =>
  $fetch(recipesPath)
)

const serverRecipes = computed(() =>
  Array.isArray(initialRecipes.value) ? initialRecipes.value.filter((r) => r && r.slug) : []
)

const onImgError = (ev: Event) => {
  try {
    const target = ev.target as HTMLImageElement | null
    if (target) target.src = fallbackImg
  } catch {
    // ignore
  }
}

const resolveImage = (src?: string) => {
  if (!src) return fallbackImg
  try {
    const s = String(src)
    if (/^https?:\/\//.test(s)) return s
    if (s.startsWith('/uploads') || s.startsWith('/_nuxt') || s.startsWith('/public/')) return s
    if (s.startsWith('/assets') || s.startsWith('assets/')) return fallbackImg
    return `${config.app.baseURL}${s.replace(/^\/+/, '')}`
  } catch {
    return fallbackImg
  }
}

const recipeLink = (slug: string) => ({
  path: `/recipes/${slug}`,
})

const updateRecipeItems = () => {
  const items = document.getElementsByClassName('Rezeptseiten')
  recipeItems.value = Array.from(items) as HTMLElement[]
}

const updateVisibleRecipes = () => {
  updateRecipeItems()

  if (activeFilter.value === 'allerezepte') {
    visibleRecipes.value = Array.from(recipeItems.value)
  } else {
    visibleRecipes.value = Array.from(recipeItems.value).filter((item) =>
      item.classList.contains(activeFilter.value)
    )
  }
}

const filterRecipe = (category: string, element: any) => {
  activeFilter.value = category

  const items = document.getElementsByClassName('Rezeptseiten')

  if (category === 'allerezepte') {
    for (let i = 0; i < items.length; i++) {
      ;(items[i] as HTMLElement).style.display = 'block'
    }
  } else {
    for (let i = 0; i < items.length; i++) {
      const item = items[i] as HTMLElement
      item.style.display = item.classList.contains(category) ? 'block' : 'none'
    }
  }

  updateVisibleRecipes()

  router.push({
    query: {
      ...route.query,
      filterrecipe: category === 'allerezepte' ? undefined : category,
    },
  })

  clearActiveMarkers()

  const el = element && element.currentTarget ? element.currentTarget : element
  if (el) {
    const tag = ((el as HTMLElement).tagName || '').toUpperCase()
    if (tag === 'LI') {
      (el as HTMLElement).classList.add('activerecipe')
      const parentDropdown = (el as HTMLElement).closest('.dropdown-container') as HTMLElement
      if (parentDropdown) {
        parentDropdown.style.display = 'block'
        const prev = parentDropdown.previousElementSibling as HTMLElement
        if (prev && prev.tagName === 'BUTTON') prev.classList.add('activerecipebtn_sub')
      }
    }
    if (tag === 'BUTTON') {
      (el as HTMLElement).classList.add('activerecipebtn')
      try {
        const dropdown = (el as HTMLElement).nextElementSibling as HTMLElement
        if (dropdown && dropdown.classList && dropdown.classList.contains('dropdown-container')) {
          dropdown.style.display = 'block'
        }
      } catch {
        // ignore
      }
    }
  } else {
    const norm = normalizeFilterName(category)
    const listItems = Array.from(document.querySelectorAll('#filter-options-recipe li'))
    const foundLi = listItems.find((li) => normalizeFilterName(li.textContent || '') === norm) as HTMLElement
    if (foundLi) {
      foundLi.classList.add('activerecipe')
      const parentDropdown = foundLi.closest('.dropdown-container') as HTMLElement
      if (parentDropdown) {
        parentDropdown.style.display = 'block'
        const prev = parentDropdown.previousElementSibling as HTMLElement
        if (prev && prev.tagName === 'BUTTON') prev.classList.add('activerecipebtn_sub')
      }
    } else {
      const buttons = Array.from(document.querySelectorAll('#filter-options-recipe button'))
      const foundBtn = buttons.find((b) => normalizeFilterName(b.textContent || '') === norm) as HTMLElement
      if (foundBtn) {
        foundBtn.classList.add('activerecipebtn')
        const dropdown = foundBtn.nextElementSibling as HTMLElement
        if (dropdown && dropdown.classList && dropdown.classList.contains('dropdown-container')) {
          dropdown.style.display = 'block'
        }
      }
    }
  }
}

const normalizeFilterName = (name: string) => {
  if (!name) return ''
  let s = String(name).toLowerCase()
  s = s.replace(/ä/g, 'ae')
    .replace(/ö/g, 'oe')
    .replace(/ü/g, 'ue')
    .replace(/ß/g, 'ss')
  s = s.normalize ? s.normalize('NFD').replace(/\p{Diacritic}/gu, '') : s
  s = s.replace(/[^a-z0-9\s]/g, '')
  s = s.replace(/\s+/g, '')
  return s
}

const highlightFilterRecipe = (filter: string) => {
  const normalizedFilter = normalizeFilterName(filter)
  const filterMap: Record<string, string> = {
    allerezepte: 'allerezepte',
    hauptspeisen: 'hauptspeisen',
    salate: 'salate',
    backen: 'backen',
    kuchen: 'kuchen',
    kekse: 'kekse',
    mitkartoffeln: 'mitkartoffeln',
    mitnudeln: 'mitnudeln',
    auflauf: 'auflauf',
    fleisch: 'fleisch',
    nudeln: 'nudeln',
    suppe: 'suppe',
    sossen: 'sossen',
    nachspeise: 'nachspeise',
    torten: 'torten',
  }

  const mappedFilter = filterMap[normalizedFilter] || filterMap[filter] || 'allerezepte'
  nextTick(() => {
    filterRecipe(mappedFilter, null)
  })
}

const clearActiveMarkers = () => {
  const lis = Array.from(document.querySelectorAll('#filter-options-recipe li'))
  lis.forEach((li) => li.classList.remove('activerecipe'))
  const btns = Array.from(document.querySelectorAll('#filter-options-recipe button'))
  btns.forEach((btn) => {
    btn.classList.remove('activerecipebtn')
    btn.classList.remove('activerecipebtn_sub')
  })
}

function toggleDropdown(event: Event, _key: string) {
  const btn = event.currentTarget as HTMLElement
  const dropdown = btn.nextElementSibling as HTMLElement | null
  const isOpen = dropdown && dropdown.style && dropdown.style.display === 'block'

  if (isOpen) {
    btn.classList.remove('activerecipebtn')
    if (dropdown) dropdown.style.display = 'none'
    return
  }

  btn.classList.add('activerecipebtn')
  if (dropdown) dropdown.style.display = 'block'
  try {
    filterRecipe(_key, event)
  } catch (e) {
    console.warn('[recipe] filterRecipe call failed in toggleDropdown', e)
  }
}

function search_recipe(e: Event | string) {
  const input = typeof e === 'string' ? e : (e && (e.target as HTMLInputElement) ? (e.target as HTMLInputElement).value : '')
  const q = normalizeFilterName(input || '')
  const elements = Array.from(document.getElementsByClassName('Rezeptseiten')) as HTMLElement[]
  elements.forEach((el) => {
    const textNorm = normalizeFilterName(el.textContent || '')
    const classesNorm = normalizeFilterName(Array.from(el.classList || []).join(' '))
    const match = q === '' || textNorm.includes(q) || classesNorm.includes(q)
    el.style.display = match ? 'block' : 'none'
  })
}

watch(() => route.query.filterrecipe, (newFilter) => {
  if (newFilter) {
    highlightFilterRecipe(String(newFilter))
  } else {
    filterRecipe('allerezepte', null)
  }
})
</script>

<style scoped>
#body_recipe_overview {
        /* background-image: url("data:image/svg+xml,<svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='90' height='90' patternTransform='scale(1) rotate(0)'><rect x='0' y='0' width='100%' height='100%' fill='hsla(0, 0%, 100%, 0)'/><path d='M0 0v90h90V0Zm3.735.72h5.628v8.644H.72V3.735Zm7.068 0h8.46v8.644h-8.46zm9.9 0h5.231v17.283h-8.309v7.554H.72v-4.854h10.083v-9.9h9.9zm6.671 0h6.822v10.25H44.28v7.033H27.374Zm28.43 0h6.821v17.283H45.72V10.97h10.083zm8.261 0h5.232v10.084h9.9v9.9H89.28v4.853H72.374v-7.554h-8.309zm6.672 0h8.46v8.644h-8.46zm9.9 0h5.628l3.015 3.015v5.629h-8.644Zm-45 0h18.726v8.81H35.636ZM.72 10.804h8.643v8.46H.72Zm79.916 0h8.644v8.46h-8.644zm-61.57 8.64h6.868v6.113h-6.869zm8.308 0H44.28v4.853H34.197v9.9h-9.9V44.28h-5.232V26.997h8.31zm18.346 0h16.905v7.553h8.31V44.28h-5.232V34.197h-9.9v-9.9H45.72Zm18.345 0h6.87v6.113h-6.87zm-28.429 6.293h8.644v8.46h-8.644zm10.084 0h8.643v8.46H45.72Zm-45 1.26h16.905V44.28H10.97V34.197H.72Zm71.654 0H89.28v7.2H79.031V44.28h-6.657ZM.72 35.637h8.809v18.727H.72Zm25.017 0h8.46v8.643h-8.46zm9.9 0h8.643v5.628l-3.015 3.015h-5.629zm10.083 0h8.643v8.643h-5.628l-3.015-3.015Zm10.083 0h8.46v8.643h-8.46zm24.668 0h8.809v18.727h-8.809ZM10.97 45.72h6.656v17.283H.72v-7.2h10.249zm8.096 0h5.232v10.084h9.9v9.9H44.28v4.853H27.374v-7.554h-8.309zm6.672 0h8.46v8.644h-8.46zm9.9 0h5.628l3.015 3.015v5.629h-8.644zm13.098 0h5.628v8.644H45.72v-5.629Zm7.068 0h8.46v8.644h-8.46zm9.9 0h5.231v17.283h-8.309v7.554H45.72v-4.854h10.083v-9.9h9.9zm6.671 0h6.657v10.084H89.28v7.2H72.374ZM35.636 55.804h8.644v8.46h-8.644zm10.084 0h8.643v8.46H45.72Zm-45 8.64h16.905v7.553h8.31V89.28h-5.232V79.197h-9.9v-9.9H.72Zm18.345 0h6.87v6.113h-6.87zm45 0h6.87v6.113h-6.87zm8.31 0H89.28v4.853H79.197v9.9h-9.9V89.28h-5.232V71.997h8.31zM.72 70.736h8.643v8.46H.72Zm79.916 0h8.644v8.46h-8.644zm-53.262 1.26H44.28v7.034H34.196v10.25h-6.822zm18.346 0h16.905V89.28h-6.822V79.031H45.72ZM35.636 80.47h18.727v8.809H35.636ZM.72 80.637h8.643v8.643H3.735L.72 86.265Zm10.083 0h8.46v8.643h-8.46zm59.934 0h8.46v8.643h-8.46zm9.9 0h8.643v5.628l-3.015 3.015h-5.629z'  stroke-width='1' stroke='none' fill='hsla(122, 24%, 72%, 1)'/></pattern></defs><rect width='800%' height='800%' transform='translate(0,0)' fill='url(%23a)'/></svg>"); */
        background-image: url('/images/square_background.svg');
        position: relative;
        width: 100%;
    }


    /* /////////////////////////////////////////////////////////////////////////////////////////////////////////// */
    /* Rezepte Übersicht anfang*/
    /* /////////////////////////////////////////////////////////////////////////////////////////////////////////// */
    .sidebar-rezepte{
        grid-area: sidebar;
        margin-left: 50px;
        /* border-right: 1px solid #7b4d29;  */
        margin-top: 165px;
        margin-bottom: 10px;
    }
    .main-rezepte {
        grid-area: main;
        /* font-size: 20px; */
        /* padding: 0px 10px; */
        padding: 0 3em 0 3em;
        /* padding: 0px 20px 0 30px; */
        margin-top: 165px;
        list-style: none;
        border-left: 1px solid #7b4d29;
        margin-bottom: 2em;
    }
    .container {
        margin-top: -70px;
    }
    /* .container .heading {
        width: 70%;
    } */
    .container .heading h3 {
        border-bottom: 3px solid #7b4d29;
        color: #7b4d29;
        margin-top: 0;
    }

    .sidebar-rezepte {
        align-self: start;
        position: sticky;
        top: 100px;
        max-height: 100%;
    }

    #label {
        position: relative;
        cursor: pointer;
        margin: 8px;
    }
    /* #label {
        position: sticky;
        top: 100px;
    } */
    #searchbar {
        background-color: #b4d3a6;
        width: 0px;
        transition: width 1s, border-radius 1s;
        border-radius: 50%;
        border-color: transparent;
        outline: none;
        padding: 12px 20px 10px 16px;
        color: #b4d3a6;
        cursor: pointer;
    }
    #searchbar:focus {
        border-radius: 10px;
        width: 75%;
        color: black;
        cursor: pointer;
    }
    .magnifyingGlass {
        font-size: 20px;
        /* color: #36401f; */
        color: #7b4d29;
        display: inline-block;
        position: absolute;
        left: 9px;
        bottom: -1.5px;
        transition: 0.4s;
        cursor: pointer;
    }
    #searchbar:focus + .magnifyingGlass {
        opacity: 0;
    }
    /* .filter-list-rezepte {
        position: sticky;
        top: 150px;
    } */
    .filter-list-rezepte ul {
        list-style: none;
        /* margin: 0; */
        padding: 0px;
        /* min-width: 12em; */
    }
    .filter-list-rezepte li.activerecipe {
        background-color: #decf91;
        color: #7b4d29;
        border-radius: 10px;
    }

    .filter-list-rezepte button.activerecipebtn {
        background-color: #decf91;
        color: #0e1754;
        border-radius: 10px;
    }

    .filter-list-rezepte button.activerecipebtn_sub {
        background-color: #b4b0a0;
        color: #0e1754;
        border-radius: 10px;
    }

    /* Dropdown container (hidden by default).*/
    /* .dropdown-container {
    display: none;
    padding-left: 8px;
    }
    .filter-list-rezepte {
        margin-left: 30px;
    } */

    .dropdown-container {
        display: none;
        padding-left: 20px;
        margin-left: 20px;
    }
    /* .dropdown-container li {
        margin-left: 30px;
    } */

    /* Style the sidenav links and the dropdown button */
    .filter-list-rezepte li, .dropdown-btn {
        padding: 5px 0px 5px 5px;
        margin: 20px auto;
        text-decoration: none;
        font-size: 1.5em;
        color: #7b4d29;
        display: block;
        border: none;
        background: none;
        width: 96%;
        text-align: left;
        cursor: pointer;
        outline: none;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
    }

    .filter-list-rezepte a:hover, .dropdown-btn:hover {
        color: #f1f1f1;
    }

    .fa {
        font-size: 1em;
    }

    .main-rezepte a {
        display: block;
        text-decoration: none;
        /* margin-left: 3em;
        margin-right: 3em; */
        margin: 0;
        padding: 0;
    }
    .recipelink {
        width: 100%;
        box-sizing: border-box; /* ensure padding/border stays inside width */
        background-color: #e8d69b;
        padding: 2em;
        display: flex;
        justify-content: space-between;
        margin-bottom: 2em;
        border-radius: 10px;
    }
    .recipelink h2 {
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-size: 4.5rem;
        color: #7b4d29;
        margin-top: 0.2em;
        margin-bottom: 0.5em;
    }
    .recipelink div h2:hover {
        color: #738c39;
    }

    .recipelink div p {
        margin-top: 30px;
        padding: 3px 6px;
        border: 1px solid #1c170f;
        border-radius: 40px;
        width: 80px;
        text-align: center;
        font-size: 14px;
        color: #7b4d29;
        background-color:  #d8c797;
    }
    .recipelink img {
        border-radius: 10px;
        object-fit: cover;
        height: 250px;
        width: 250px;
    }
    /* .burgerdisplay {
        display: none;
    } */
    /* Erster Eintrag in der Hauptnavigation ausblenden */
    .sidebar-rezepte .dropdown-container li:first-child {
        display: none;
    }
</style>