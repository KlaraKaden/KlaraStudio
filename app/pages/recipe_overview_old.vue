<template>
    <div id="body_recipe_overview">

        <button @click="topFunction" id="topBtn" title="Go to top">nach oben <i class="fa-solid fa-arrow-up"></i></button>

        <div class="gridcontainer">
            <aside class="sidebar-rezepte">
                <label for="searchbar" id="label">
                    <input type="search" @input="search_recipe" id="searchbar" name="search" placeholder="Suche Rezepte...">
                    <i class="fa-solid fa-magnifying-glass magnifyingGlass"></i>
                </label>

                <div class="filter-list-rezepte" id="filter-options-recipe">
                    <ul>
                        <li @click="filterRecipe('allerezepte', $event)" :class="{ activerecipe: activeFilter === 'allerezepte' }">Alle Rezepte</li>
                    </ul>

                    <button class="dropdown-btn" @click="toggleDropdown($event, 'hauptspeisen')">Hauptspeisen <i class="fa fa-angle-down"></i></button>
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
                    <!-- <button class="dropdown-btn" onclick="filterRecipe('nachspeise', this)">Nachspeise 
                        <i class="fa fa-angle-down"></i>
                    </button>
                    <ul class="dropdown-container">
                        <li onclick="filterRecipe('Nachspeise', this)">Nachspeise</li>
                        <li onclick="filterRecipe('n1', this)">n1</li>
                        <li onclick="filterRecipe('n2', this)">n2</li>
                        <li onclick="filterRecipe('n3', this)">n3</li>
                    </ul> -->
                    <button class="dropdown-btn" @click="toggleDropdown($event, 'salate')">Salate 
                        <i class="fa fa-angle-down"></i>
                    </button>
                    <ul class="dropdown-container">
                        <li @click="filterRecipe('salate', $event)" class="burgerdisplay">Alle Salate</li>
                        <li @click="filterRecipe('mitkartoffeln', $event)">Mit Kartoffeln</li>
                        <li @click="filterRecipe('mitnudeln', $event)">Mit Nudeln</li>
                    </ul>

                    <button class="dropdown-btn" @click="toggleDropdown($event, 'backen')">Backen <i class="fa fa-angle-down"></i></button>
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
                <!-- Data-driven recipe cards (managed via admin) -->
                <template v-if="serverRecipes.length">
                    <NuxtLink v-for="r in serverRecipes" :key="r.slug" :to="{ path: `/recipes/${r.slug}`, query: { filterrecipe: (r.categories && r.categories[0]) ? r.categories[0] : undefined } }" :class="['Rezeptseiten','Struktur', ...(r.categories || [])]">
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
                            <h2>weitere Rezepte in Arbeit <!--<i class="fa fa-angle-right"></i>--></h2>
                            <!-- <p>19.07.2024</p> -->
                        </div>
                        <!-- <img src="assets/images/bild1.jpg" alt="Bild 1"> -->
                    </article>
                </a>
                <!-- (duplicate block removed) -->
            </main>

        </div>

    </div>
</template>

<script setup>
useHead({ title: 'ALLES KLARA. - Recipe Overview' })

// fallback image (Vite will resolve the asset path)
import fallbackImg from '~/assets/images/Bild_folgt.png'

import useScrollTop from '../../composables/useScrollTop'
// import { ref, onMounted, onUnmounted, nextTick } from 'vue'
// import { useRoute, useRouter } from 'vue-router'

const { topFunction } = useScrollTop({ buttonSelector: '#topBtn', footerSelector: '#footer', showAfter: 100 })



import { ref, computed, onMounted, nextTick, onUnmounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useAsyncData } from '#app'

const route = useRoute()
const router = useRouter()

// Reactive data
const activeFilter = ref('allerezepte')
const showLightbox = ref(false)
const currentLightboxIndex = ref(0)
const recipeItems = ref([])
const visibleRecipes = ref([])
// Recipes fetched from server (/api/recipes)
const serverRecipes = ref([])

// If an <img> fails to load, replace it with our fallback resolved by Vite
const onImgError = (ev) => {
    try { ev && ev.target && (ev.target.src = fallbackImg) } catch (e) {}
}

// Resolve image paths coming from server-data. If the stored path points into
// the local `assets/` folder (which isn't directly served at runtime), fall
// back to the imported placeholder. Allow fully qualified URLs and /uploads.
const resolveImage = (src) => {
    if (!src) return fallbackImg
    try {
        const s = String(src)
        if (/^https?:\/\//.test(s)) return s
        // allow server-served uploads or nuxt-built assets
        if (s.startsWith('/uploads') || s.startsWith('/_nuxt') || s.startsWith('/public/')) return s
        // don't try to use '/assets/...' paths from server-data — use fallback
        if (s.startsWith('/assets') || s.startsWith('assets/')) return fallbackImg
        return s
    } catch (e) {
        return fallbackImg
    }
}

// Server-side fetch so the overview is populated on first render
try {
    const { data: initialRecipes } = await useAsyncData('recipes-overview', () => $fetch('/api/recipes'))
    if (initialRecipes && Array.isArray(initialRecipes.value)) {
        serverRecipes.value = initialRecipes.value.filter(r => r && r.slug)
    }
} catch (e) {
    console.warn('[recipe_overview] initial fetch failed', e)
}

// Refs für DOM-Elemente
const recipeItemRefs = ref([])

// Funktion zum Normalisieren von Filternamen (Umlaute, ß und andere Zeichen behandeln)
const normalizeFilterName = (name) => {
    if (!name) return ''
    // convert to string, lowercase
    let s = String(name).toLowerCase()
    // replace common German characters and ß
    s = s.replace(/ä/g, 'ae')
             .replace(/ö/g, 'oe')
             .replace(/ü/g, 'ue')
             .replace(/ß/g, 'ss')
    // remove diacritics (e.g., é -> e) and non-word characters except spaces
    s = s.normalize ? s.normalize('NFD').replace(/\p{Diacritic}/gu, '') : s
    // remove extra whitespace and non-alphanumeric characters (keep letters/numbers)
    s = s.replace(/[^a-z0-9\s]/g, '')
    s = s.replace(/\s+/g, '')
    return s
}

// Rezepte aus DOM lesen
const updateRecipeItems = () => {
  const items = document.getElementsByClassName('Rezeptseiten')
  recipeItems.value = Array.from(items)
}

// Sichtbare Rezepte aktualisieren basierend auf Filter
const updateVisibleRecipes = () => {
  // Ensure we have the latest DOM references before computing visible items
  updateRecipeItems()

  if (activeFilter.value === 'allerezepte') {
    visibleRecipes.value = Array.from(recipeItems.value)
  } else {
    visibleRecipes.value = Array.from(recipeItems.value).filter(item => 
      item.classList.contains(activeFilter.value)
    )
  }
}

// Lightbox computed properties
// const currentLightboxImage = computed(() => {
//   if (visibleRecipes.value[currentLightboxIndex.value]) {
//     return visibleRecipes.value[currentLightboxIndex.value].children[0].getAttribute('src')
//   }
//   return ''
// })

// const currentLightboxCaption = computed(() => {
//   if (visibleRecipes.value[currentLightboxIndex.value]) {
//     return visibleRecipes.value[currentLightboxIndex.value].getAttribute('data-caption')
//   }
//   return ''
// })

// Filter-Funktionen (angepasst für Rezepte)
const filterRecipe = (category, element) => {
  activeFilter.value = category
  
  // Alle Rezepte verstecken/zeigen
  const items = document.getElementsByClassName('Rezeptseiten')
  
  if (category === 'allerezepte') {
    for (let i = 0; i < items.length; i++) {
      items[i].style.display = 'block'
    }
  } else {
    for (let i = 0; i < items.length; i++) {
      if (items[i].classList.contains(category)) {
        items[i].style.display = 'block'
      } else {
        items[i].style.display = 'none'
      }
    }
  }
  
  updateVisibleRecipes()
  
  // Update URL parameter (recipe page uses 'filterrecipe')
  router.push({ 
    query: { 
      ...route.query, 
      filterrecipe: category === 'allerezepte' ? undefined : category 
    } 
  })

    // Manage active classes for sidebar filters
    clearActiveMarkers()

    const el = element && element.currentTarget ? element.currentTarget : element
    if (el) {
        const tag = (el.tagName || '').toUpperCase()
        if (tag === 'LI') {
            el.classList.add('activerecipe')
            // if inside dropdown, mark parent button with sub-class
            const parentDropdown = el.closest('.dropdown-container')
            if (parentDropdown) {
                // expand the dropdown so the selected submenu is visible
                parentDropdown.style.display = 'block'
                const prev = parentDropdown.previousElementSibling
                if (prev && prev.tagName === 'BUTTON') prev.classList.add('activerecipebtn_sub')
            }
        }
        if (tag === 'BUTTON') {
            el.classList.add('activerecipebtn')
            // if this button controls a dropdown, expand it so the submenu is visible
            try {
                const dropdown = el.nextElementSibling
                if (dropdown && dropdown.classList && dropdown.classList.contains('dropdown-container')) {
                    dropdown.style.display = 'block'
                }
            } catch (e) {
                // ignore if DOM shape unexpected
            }
        }
    } else {
        // no event provided: try to find by matching text or by category class on items
        // Mark first matching li or button
        const norm = normalizeFilterName(category)
        const listItems = Array.from(document.querySelectorAll('#filter-options-recipe li'))
        const foundLi = listItems.find(li => normalizeFilterName(li.textContent || '') === norm)
        if (foundLi) {
            foundLi.classList.add('activerecipe')
            const parentDropdown = foundLi.closest('.dropdown-container')
            if (parentDropdown) {
                // expand the dropdown so the selected submenu is visible
                parentDropdown.style.display = 'block'
                const prev = parentDropdown.previousElementSibling
                if (prev && prev.tagName === 'BUTTON') prev.classList.add('activerecipebtn_sub')
            }
        } else {
            const buttons = Array.from(document.querySelectorAll('#filter-options-recipe button'))
            const foundBtn = buttons.find(b => normalizeFilterName(b.textContent || '') === norm)
            if (foundBtn) {
                foundBtn.classList.add('activerecipebtn')
                // expand its dropdown if it has one
                const dropdown = foundBtn.nextElementSibling
                if (dropdown && dropdown.classList && dropdown.classList.contains('dropdown-container')) {
                    dropdown.style.display = 'block'
                }
            }
        }
    }
}

const highlightFilterRecipe = (filter) => {
  const normalizedFilter = normalizeFilterName(filter)
  
  // Filter-Mapping für verschiedene Schreibweisen (Rezepte)
  const filterMap = {
    'allerezepte': 'allerezepte',
    'hauptspeisen': 'hauptspeisen',
    'salate': 'salate',
    'backen': 'backen',
    'kuchen': 'kuchen',
    'kekse': 'kekse',
    'mitkartoffeln': 'mitkartoffeln',
    'mitnudeln': 'mitnudeln',
    'auflauf': 'auflauf',
    'fleisch': 'fleisch',
    'nudeln': 'nudeln',
    'suppe': 'suppe',
    'sossen': 'sossen',
    'nachspeise': 'nachspeise',
    'torten': 'torten'
  }
  
  const mappedFilter = filterMap[normalizedFilter] || filterMap[filter] || 'allerezepte'
  
    // Direkt filterRecipe aufrufen und danach Markierungen setzen
    nextTick(() => {
        filterRecipe(mappedFilter, null)
    })
}

// Lightbox-Funktionen
// const currentImage = function(event) {
//   // Refresh visible recipes (in case filter changed)
//   updateVisibleRecipes()

//   // Determine the clicked Rezeptseiten element robustly
//   let clickedElement = event.currentTarget || event.target
//   if (clickedElement && clickedElement.classList && !clickedElement.classList.contains('Rezeptseiten')) {
//     clickedElement = clickedElement.closest('.Rezeptseiten')
//   }

//   console.debug('[recipe] currentImage called - clicked element:', clickedElement)

//   // Prefer using the data-index attribute to locate the item among visibleRecipes.
//   let imageIndex = -1
//   const idxAttr = clickedElement ? clickedElement.getAttribute && clickedElement.getAttribute('data-index') : null
//   if (idxAttr) {
//     imageIndex = visibleRecipes.value.findIndex(item => item.getAttribute && item.getAttribute('data-index') === idxAttr)
//   }

//   // Fallback to direct reference compare if data-index wasn't present/matched
//   if (imageIndex === -1 && clickedElement) {
//     imageIndex = visibleRecipes.value.indexOf(clickedElement)
//   }

//   console.debug('[recipe] resolved imageIndex=', imageIndex, 'visibleRecipes length=', visibleRecipes.value.length)

//   if (imageIndex !== -1) {
//     currentLightboxIndex.value = imageIndex
//     showLightBox(imageIndex + 1)
//   }
// }

// const showLightBox = (n) => {
//   if (n > visibleRecipes.value.length) {
//     currentLightboxIndex.value = 0
//   } else if (n < 1) {
//     currentLightboxIndex.value = visibleRecipes.value.length - 1
//   } else {
//     currentLightboxIndex.value = n - 1
//   }
//   console.debug('[recipe] showLightBox called n=', n, 'resolved index=', currentLightboxIndex.value, 'visibleRecipes=', visibleRecipes.value.length)
//   showLightbox.value = true
//   document.body.style.overflow = "hidden"
  
//   // Deactivate touch scrolling
//   document.body.addEventListener('touchmove', preventScroll, { passive: false })
//   document.body.addEventListener('wheel', preventScroll, { passive: false })
// }

// const hideLightBox = () => {
//   showLightbox.value = false
//   document.body.style.overflow = "auto"
  
//   // Reactivate touch scrolling
//   document.body.removeEventListener('touchmove', preventScroll, { passive: false })
//   document.body.removeEventListener('wheel', preventScroll, { passive: false })
// }

// const preventScroll = (event) => {
//   event.preventDefault()
// }

// const closeLightbox = () => {
//   hideLightBox()
// }

// const closeLightboxOnBackground = (event) => {
//   if (event.target.classList.contains('lightbox') || 
//       event.target.classList.contains('lightbox-close')) {
//     hideLightBox()
//   }
// }

// const sliderImage = (n) => {
//   showLightBox(currentLightboxIndex.value + 1 + n)
// }

// const previousImage = () => {
//   sliderImage(-1)
// }

// const nextImage = () => {
//   sliderImage(1)
// }

// Hilfsfunktionen für Aktivklassen
const clearActiveMarkers = () => {
    const lis = Array.from(document.querySelectorAll('#filter-options-recipe li'))
    lis.forEach(li => li.classList.remove('activerecipe'))
    const btns = Array.from(document.querySelectorAll('#filter-options-recipe button'))
    btns.forEach(btn => {
        btn.classList.remove('activerecipebtn')
        btn.classList.remove('activerecipebtn_sub')
    })
}

// Dropdown toggle
function toggleDropdown(event, _key) {
    const btn = event.currentTarget
    const dropdown = btn.nextElementSibling
    // determine current open state (explicit 'block' means open)
    const isOpen = dropdown && dropdown.style && dropdown.style.display === 'block'

    if (isOpen) {
        // close: remove active class and hide dropdown but DO NOT re-apply filter
        btn.classList.remove('activerecipebtn')
        if (dropdown) dropdown.style.display = 'none'
        return
    }

    // open: mark button active, show dropdown and apply the filter
    btn.classList.add('activerecipebtn')
    if (dropdown) dropdown.style.display = 'block'
    try {
        filterRecipe(_key, event)
    } catch (e) {
        // swallow in case filterRecipe isn't ready; avoid breaking the toggle
        console.warn('[recipe] filterRecipe call failed in toggleDropdown', e)
    }
}

// Suche
function search_recipe(e) {
    const input = typeof e === 'string' ? e : (e && e.target ? e.target.value : '')
    const qRaw = (input || '')
    const q = normalizeFilterName(qRaw)
    const elements = Array.from(document.getElementsByClassName('Rezeptseiten'))
    elements.forEach(el => {
        const text = el.textContent || ''
        const classes = Array.from(el.classList || []).join(' ')
        const textNorm = normalizeFilterName(text)
        const classesNorm = normalizeFilterName(classes)
        const match = q === '' || textNorm.includes(q) || classesNorm.includes(q)
        el.style.display = match ? 'block' : 'none'
    })
}

// Funktion für Navigation von Header
const applyFilterFromNavigation = (filter) => {
  highlightFilterRecipe(filter)
}

// Lifecycle hooks
onMounted(async () => {
  // DOM-Elemente lesen
  updateRecipeItems()
  updateVisibleRecipes()
  
  // Handle URL parameters beim Laden der Seite
  const filter = route.query.filterrecipe
  if (filter) {
    highlightFilterRecipe(filter)
  }

  // Keyboard navigation für Lightbox
  const handleKeydown = (event) => {
    if (showLightbox.value) {
      if (event.key === 'ArrowLeft') {
        previousImage()
      } else if (event.key === 'ArrowRight') {
        nextImage()
      } else if (event.key === 'Escape') {
        closeLightbox()
      }
    }
  }
  
  document.addEventListener('keydown', handleKeydown)
  
  // Cleanup beim Unmount
  onUnmounted(() => {
    document.removeEventListener('keydown', handleKeydown)
    document.body.style.overflow = 'auto'
  })
    
})

// Watch für URL-Änderungen (z.B. von Navigation)
watch(() => route.query.filterrecipe, (newFilter) => {
  if (newFilter) {
    highlightFilterRecipe(newFilter)
  } else {
    filterRecipe('allerezepte', null)
  }
})

// Expose Funktion für Header-Navigation
defineExpose({
  applyFilterFromNavigation
})


// const route = useRoute()
// const router = useRouter()
// const activeFilter = ref('allerezepte')

// const normalize = (s) => String(s || '')
//     .toLowerCase()
//     .replace(/ä/g, 'ae')
//     .replace(/ö/g, 'oe')
//     .replace(/ü/g, 'ue')
//     .replace(/ß/g, 'ss')
//     .replace(/\s+/g, '')

// function highlightFilterRecipe(filterrecipe) {
//     const norm = normalize(filterrecipe)
//     const filterOptions = Array.from(document.querySelectorAll('#filter-options-recipe li'))
//     filterOptions.forEach(option => option.classList.toggle('activerecipe', normalize(option.textContent) === norm))

//     const filterButtons = Array.from(document.querySelectorAll('#filter-options-recipe button'))
//     filterButtons.forEach(button => {
//         button.classList.toggle('activerecipebtn', normalize(button.textContent) === norm)
//         if (normalize(button.textContent) === norm && button.closest('.dropdown-container')) {
//             const prev = button.closest('.dropdown-container').previousElementSibling
//             if (prev) prev.classList.add('activerecipebtn_sub')
//         }
//     })
// }

// function filterRecipe(category, event = null) {
//     activeFilter.value = category
//     const items = Array.from(document.getElementsByClassName('Rezeptseiten'))
//     if (category === 'allerezepte') items.forEach(it => it.style.display = 'block')
//     else items.forEach(it => { it.style.display = it.classList.contains(category) ? 'block' : 'none' })

//     const el = event && event.currentTarget ? event.currentTarget : null
//     if (el && el.tagName === 'LI') el.classList.add('activerecipe')
//     if (el && el.tagName === 'BUTTON') el.classList.add('activerecipebtn')

//     // reflect in history and router query
//     history.pushState({ filterrecipe: category }, '', `?filterrecipe=${category}`)
//     router.replace({ query: { filterrecipe: category } }).catch(() => {})
// }

// function applyFilterFromNavigation(filter) {
//     highlightFilterRecipe(filter)
//     nextTick(() => filterRecipe(filter, null))
// }

// function toggleDropdown(event, _key) {
//     const btn = event.currentTarget
//     btn.classList.toggle('activerecipebtn')
//     const dropdown = btn.nextElementSibling
//     if (dropdown) dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block'
// }

// function search_recipe(e) {
//     const input = typeof e === 'string' ? e : (e.target ? e.target.value : '')
//     const q = input.toLowerCase()
//     const elements = Array.from(document.getElementsByClassName('Rezeptseiten'))
//     elements.forEach(el => {
//         const text = (el.textContent || '').toLowerCase()
//         el.style.display = (text.includes(q) || q === '') ? 'block' : 'none'
//     })
// }

// onMounted(() => {
//     const q = route.query.filterrecipe
//     const initial = Array.isArray(q) ? q[0] : q
//     if (initial) {
//         highlightFilterRecipe(initial)
//         filterRecipe(initial, null)
//     }
// })

// onUnmounted(() => {})

// defineExpose({ applyFilterFromNavigation })
</script>

<style scoped>
    #body_recipe_overview {
        background-image: url("data:image/svg+xml,<svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='90' height='90' patternTransform='scale(1) rotate(0)'><rect x='0' y='0' width='100%' height='100%' fill='hsla(0, 0%, 100%, 0)'/><path d='M0 0v90h90V0Zm3.735.72h5.628v8.644H.72V3.735Zm7.068 0h8.46v8.644h-8.46zm9.9 0h5.231v17.283h-8.309v7.554H.72v-4.854h10.083v-9.9h9.9zm6.671 0h6.822v10.25H44.28v7.033H27.374Zm28.43 0h6.821v17.283H45.72V10.97h10.083zm8.261 0h5.232v10.084h9.9v9.9H89.28v4.853H72.374v-7.554h-8.309zm6.672 0h8.46v8.644h-8.46zm9.9 0h5.628l3.015 3.015v5.629h-8.644Zm-45 0h18.726v8.81H35.636ZM.72 10.804h8.643v8.46H.72Zm79.916 0h8.644v8.46h-8.644zm-61.57 8.64h6.868v6.113h-6.869zm8.308 0H44.28v4.853H34.197v9.9h-9.9V44.28h-5.232V26.997h8.31zm18.346 0h16.905v7.553h8.31V44.28h-5.232V34.197h-9.9v-9.9H45.72Zm18.345 0h6.87v6.113h-6.87zm-28.429 6.293h8.644v8.46h-8.644zm10.084 0h8.643v8.46H45.72Zm-45 1.26h16.905V44.28H10.97V34.197H.72Zm71.654 0H89.28v7.2H79.031V44.28h-6.657ZM.72 35.637h8.809v18.727H.72Zm25.017 0h8.46v8.643h-8.46zm9.9 0h8.643v5.628l-3.015 3.015h-5.629zm10.083 0h8.643v8.643h-5.628l-3.015-3.015Zm10.083 0h8.46v8.643h-8.46zm24.668 0h8.809v18.727h-8.809ZM10.97 45.72h6.656v17.283H.72v-7.2h10.249zm8.096 0h5.232v10.084h9.9v9.9H44.28v4.853H27.374v-7.554h-8.309zm6.672 0h8.46v8.644h-8.46zm9.9 0h5.628l3.015 3.015v5.629h-8.644zm13.098 0h5.628v8.644H45.72v-5.629Zm7.068 0h8.46v8.644h-8.46zm9.9 0h5.231v17.283h-8.309v7.554H45.72v-4.854h10.083v-9.9h9.9zm6.671 0h6.657v10.084H89.28v7.2H72.374ZM35.636 55.804h8.644v8.46h-8.644zm10.084 0h8.643v8.46H45.72Zm-45 8.64h16.905v7.553h8.31V89.28h-5.232V79.197h-9.9v-9.9H.72Zm18.345 0h6.87v6.113h-6.87zm45 0h6.87v6.113h-6.87zm8.31 0H89.28v4.853H79.197v9.9h-9.9V89.28h-5.232V71.997h8.31zM.72 70.736h8.643v8.46H.72Zm79.916 0h8.644v8.46h-8.644zm-53.262 1.26H44.28v7.034H34.196v10.25h-6.822zm18.346 0h16.905V89.28h-6.822V79.031H45.72ZM35.636 80.47h18.727v8.809H35.636ZM.72 80.637h8.643v8.643H3.735L.72 86.265Zm10.083 0h8.46v8.643h-8.46zm59.934 0h8.46v8.643h-8.46zm9.9 0h8.643v5.628l-3.015 3.015h-5.629z'  stroke-width='1' stroke='none' fill='hsla(122, 24%, 72%, 1)'/></pattern></defs><rect width='800%' height='800%' transform='translate(0,0)' fill='url(%23a)'/></svg>");
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