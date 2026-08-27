<template>
    <nav>
        <ul class="navigationbar">
            <li class="parent"  :class="{ 'parent-activenav': activeNav && activeNav.startsWith('recipes') }">
                <NuxtLink :to="{ path: '/recipe_overview', query: { filterrecipe: 'allerezepte' } }" @click="() => { setActiveLink('recipes'); closeMenus() }" :class="{ activenav: activeNav === 'recipes' }">Rezepte</NuxtLink>
                <ul class="child">
                    <li class="parent upperBorder expandmenu">
                        <NuxtLink :to="{ path: '/recipe_overview', query: { filterrecipe: 'hauptspeisen' } }" @click="() => { setActiveLink('recipes:hauptspeisen'); closeMenus() }" :class="{ activenav: activeNav === 'recipes:hauptspeisen' }">Hauptspeisen</NuxtLink>
                        <ul class="child topzero">
                            <li><NuxtLink :to="{ path: '/recipe_overview', query: { filterrecipe: 'auflauf' } }" @click="() => { setActiveLink('recipes:auflauf'); closeMenus() }" :class="{ activenav: activeNav === 'recipes:auflauf' }">Auflauf</NuxtLink></li>
                            <li><NuxtLink :to="{ path: '/recipe_overview', query: { filterrecipe: 'fleisch' } }" @click="() => { setActiveLink('recipes:fleisch'); closeMenus() }" :class="{ activenav: activeNav === 'recipes:fleisch' }">Fleisch</NuxtLink></li>
                            <li><NuxtLink :to="{ path: '/recipe_overview', query: { filterrecipe: 'nudeln' } }" @click="() => { setActiveLink('recipes:nudeln'); closeMenus() }" :class="{ activenav: activeNav === 'recipes:nudeln' }">Nudeln</NuxtLink></li>
                            <li><NuxtLink :to="{ path: '/recipe_overview', query: { filterrecipe: 'suppe' } }" @click="() => { setActiveLink('recipes:suppe'); closeMenus() }" :class="{ activenav: activeNav === 'recipes:suppe' }">Suppen</NuxtLink></li>
                            <li><NuxtLink :to="{ path: '/recipe_overview', query: { filterrecipe: 'sossen' } }" @click="() => { setActiveLink('recipes:sossen'); closeMenus() }" :class="{ activenav: activeNav === 'recipes:sossen' }">Soßen</NuxtLink></li>
                        </ul>
                    </li>
                    <li class="parent"><NuxtLink :to="{ path: '/recipe_overview', query: { filterrecipe: 'nachspeise' } }" @click="() => { setActiveLink('recipes:nachspeise'); closeMenus() }" :class="{ activenav: activeNav === 'recipes:nachspeise' }">Nachspeise</NuxtLink></li>
                    <li class="parent expandmenu">
                        <NuxtLink :to="{ path: '/recipe_overview', query: { filterrecipe: 'salate' } }" @click="() => { setActiveLink('recipes:salate'); closeMenus() }" :class="{ activenav: activeNav === 'recipes:salate' }">Salate</NuxtLink>
                        <ul class="child">
                            <li class="upperBorder"><NuxtLink :to="{ path: '/recipe_overview', query: { filterrecipe: 'mitkartoffeln' } }" @click="() => { setActiveLink('recipes:mitkartoffeln'); closeMenus() }" :class="{ activenav: activeNav === 'recipes:mitkartoffeln' }">Mit Kartoffeln</NuxtLink></li>
                            <li><NuxtLink :to="{ path: '/recipe_overview', query: { filterrecipe: 'mitnudeln' } }" @click="() => { setActiveLink('recipes:mitnudeln'); closeMenus() }" :class="{ activenav: activeNav === 'recipes:mitnudeln' }">Mit Nudeln</NuxtLink></li>
                        </ul>
                    </li>
                    <li class="parent expandmenu">
                        <NuxtLink :to="{ path: '/recipe_overview', query: { filterrecipe: 'backen' } }" @click="() => { setActiveLink('recipes:backen'); closeMenus() }" :class="{ activenav: activeNav === 'recipes:backen' }">Backen</NuxtLink>
                        <ul class="child">
                            <li class="upperBorder"><NuxtLink :to="{ path: '/recipe_overview', query: { filterrecipe: 'kekse' } }" @click="() => { setActiveLink('recipes:kekse'); closeMenus() }" :class="{ activenav: activeNav === 'recipes:kekse' }">Kekse</NuxtLink></li>
                            <li><NuxtLink :to="{ path: '/recipe_overview', query: { filterrecipe: 'kuchen' } }" @click="() => { setActiveLink('recipes:kuchen'); closeMenus() }" :class="{ activenav: activeNav === 'recipes:kuchen' }">Kuchen</NuxtLink></li>
                            <li><NuxtLink :to="{ path: '/recipe_overview', query: { filterrecipe: 'torten' } }" @click="() => { setActiveLink('recipes:torten'); closeMenus() }" :class="{ activenav: activeNav === 'recipes:torten' }">Torten</NuxtLink></li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li class="parent" :class="{ 'parent-activenav': activeNav && activeNav.startsWith('gallery') }">
                <NuxtLink to="/gallery" @click="() => { setGalleryFilter('allebilder'); setActiveLink('gallery'); closeMenus() }" :class="{ activenav: activeNav === 'gallery' }">Fotografie</NuxtLink>
                <ul class="child">
                    <li class="parent" style="border-top: #36401f 1px solid;">
                        <NuxtLink to="/gallery?filter=blumen" @click="() => { setGalleryFilter('blumen'); setActiveLink('gallery:blumen'); closeMenus() }" :class="{ activenav: activeNav === 'gallery:blumen' }">Blumen</NuxtLink></li>
                    <li class="parent">
                        <NuxtLink :to="{ path: '/gallery', query: { filter: 'fruechte' } }" @click="() => { setGalleryFilter('fruechte'); setActiveLink('gallery:fruechte'); closeMenus() }" :class="{ activenav: activeNav === 'gallery:fruechte' }" data-filter="fruechte">Früchte</NuxtLink>
                    </li>
                    <li class="parent">
                        <NuxtLink :to="{ path: '/gallery', query: { filter: 'tiere' } }" @click="() => { setGalleryFilter('tiere'); setActiveLink('gallery:tiere'); closeMenus() }" :class="{ activenav: activeNav === 'gallery:tiere' }" data-filter="tiere">Tiere</NuxtLink>
                    </li>
                    <li class="parent">
                        <NuxtLink :to="{ path: '/gallery', query: { filter: 'gruen' } }" @click="() => { setGalleryFilter('gruen'); setActiveLink('gallery:gruen'); closeMenus() }" :class="{ activenav: activeNav === 'gallery:gruen' }" data-filter="gruen">Grün</NuxtLink>
                    </li>
                    <li class="parent">
                        <NuxtLink :to="{ path: '/gallery', query: { filter: 'gebaeude' } }" @click="() => { setGalleryFilter('gebaeude'); setActiveLink('gallery:gebaeude'); closeMenus() }" :class="{ activenav: activeNav === 'gallery:gebaeude' }" data-filter="gebaeude">Gebäude</NuxtLink>
                    </li>
                </ul>
            </li>
            <li class="parent" :class="{ 'parent-activenav': activeNav === 'about' || activeNav === 'portfolio' }"><NuxtLink to="/about_me" @click="() => { setActiveLink('about'); closeMenus() }" :class="{ activenav: activeNav === 'about' }">Über mich</NuxtLink>
                <ul class="child">
                    <li class="parent upperBorder">
                        <NuxtLink to="/portfolio" @click="() => { setActiveLink('portfolio'); closeMenus() }" :class="{ activenav: activeNav === 'portfolio' }">Portfolio</NuxtLink>
                    </li>
                </ul>
            </li>
        </ul>
    </nav>
</template>

<style scoped>
    /* /////////////////////////////////////////////////////////////////////////////////////////////////////////// */
    /* Navigationsbar anfang*/
    /* /////////////////////////////////////////////////////////////////////////////////////////////////////////// */
    .navigationbar {
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        display: flex;
        justify-content: center;
        width: 100%;
        border-top: #36401f 1px solid;
        border-bottom: #36401f 1px solid;
    }
    .parent {
        display: block;
        position: relative;
        float: left;
        line-height: 40px;
        background-color: darkseagreen;
    }
    .parent a {
        padding: 10px 24px;
        color: #36401f;
        text-decoration: none;
    }

    .parent:hover>ul,
    .parent:focus-within>ul {
        display: block;
        position: absolute;
        z-index: 2;
    }
    /* sichtbaren Fokus für Tastaturnutzer */
    /* .parent > a:focus {
        outline: 2px dashed #5b702c;
        outline-offset: 4px;
    } */
    .child {
        display: none;
    }
    .child li {
        background-color: darkseagreen; 
        line-height: 40px;
        border-bottom: #36401f 1px solid;
        width: 100%;
    }
    .child li a {
        color: #36401f;
    }

    header nav ul {
        list-style: none;
        margin: 0;
        padding: 0px;
        min-width: 12em;
    }
    ul ul ul {
        left: 100%;
        top: -1px;
        margin-left: 1px;
    }
    .topzero {
        left: 100%;
        top: 0px;
        margin-left: 1px;
    }
    .navigationbar li:hover:not(.active) {
        background-color: #9eae79;	
    }
    .navigationbar li:focus-within:not(.active) {
        background-color: #9eae79;	
    }
    .parent li a:hover:not(.active) {
        background-color: #9eae79;
    }
    .parent li a:focus-within:not(.active) {
        background-color: #9eae79;
    }
    .expand {
        font-size: 12px;
        float: right;
        margin-right: 5px;
    }
    .expandmenu::after {
        content: ">>";
        font-size: 12px;
        float: right;
        margin-right: 5px;
    }
    .upperBorder {
        border-top: #36401f 1px solid;
    }
    /* Allgemeine Regel für alle Links - Schriftfarbe ändern */
    .navigationbar a.activenav {
        color: #36401f; /* Textfarbe für das aktive Element */
    }

    /* Spezifische Regel für Hauptmenü (Rezepte, Fotografie, Über mich) - Hintergrundfarbe ändern */
    .navigationbar > .parent > a.activenav {
        background-color: #da7e28; /* Hintergrundfarbe für direkt ausgewähltes Hauptmenü-Element */
        color: #fff; /* Textfarbe für direkt ausgewähltes Hauptmenü-Element */
    }

    /* Hauptmenüelemente, wenn ein Untermenü aktiv ist */
    .navigationbar > .parent.parent-activenav > a {
        background-color: #7b9a6c; /* Hintergrundfarbe, wenn ein Untermenü aktiv ist */
        color: #fff; /* Textfarbe für übergeordnetes aktives Element */
    }

    /* Keine Hintergrundfarbe für Untermenü-Elemente */
    .navigationbar .child a.activenav,
    .navigationbar .child .parent-activenav > a {
        background-color: transparent; /* Keine Hintergrundfarbe für aktive Untermenü-Elemente */
        color: #d132dd; /* Textfarbe für aktive Untermenü-Elemente */
        color: #4d64c2;
        color: #fff;
    }

    /* /////////////////////////////////////////////////////////////////////////////////////////////////////////// */
    /* Navigationsbar ende*/
    /* /////////////////////////////////////////////////////////////////////////////////////////////////////////// */
</style>

<script setup>
import { onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'

function updateNavBar(category) {
    // Entferne vorherige Markierungen
    const activeLinks = document.querySelectorAll('.navigationbar a.activenav, .navigationbar .parent-activenav')
    activeLinks.forEach(link => {
        link.classList.remove('activenav')
        link.classList.remove('parent-activenav')
    })

    // Markiere die neuen Elemente basierend auf dem Filter
    const navLinks = document.querySelectorAll('.navigationbar a')
    navLinks.forEach(link => {
        if (link.href.includes(category)) {
            link.classList.add('activenav')
            let parentLi = link.closest('.parent')
            while (parentLi) {
                parentLi.classList.add('parent-activenav')
                const parentLink = parentLi.querySelector('a')
                if (parentLink) parentLink.classList.add('activenav')
                parentLi = parentLi.closest('.parent')?.parentElement?.closest('.parent')
            }
        }
    })
}

onMounted(() => {
    // Initialize active nav based on current route
    updateActiveFromRoute()
})

// Reactive active key to support immediate visual feedback when clicking links
const route = useRoute()
const activeNav = ref('')

const setActiveLink = (key) => {
    activeNav.value = key
}

// Close any open menus by blurring the currently focused element.
// This collapses menus that rely on :focus-within.
const closeMenus = () => {
    if (process.client) {
        try {
            // Blur the currently focused element to remove :focus-within state.
            const el = document.activeElement
            if (el && typeof el.blur === 'function') el.blur()
        } catch (e) {
            // ignore
        }
    }
}

// const updateActiveFromRoute = () => {
//     const p = route.path || ''
//     if (p === '/gallery' || p.startsWith('/gallery')) {
//         const f = route.query.filter
//         if (f) activeNav.value = `gallery:${Array.isArray(f) ? f[0] : f}`
//         else activeNav.value = 'gallery'
//     } else if (p === '/about_me') {
//         activeNav.value = 'about'
//     } else if (p.startsWith('/portfolio')) {
//         activeNav.value = 'portfolio'
//     } else {
//         activeNav.value = ''
//     }
// }
const updateActiveFromRoute = () => {
    const p = route.path || ''

    if (p === '/gallery' || p.startsWith('/gallery')) {
        const f = route.query.filter

        if (f) {
            activeNav.value = `gallery:${Array.isArray(f) ? f[0] : f}`
        } else {
            activeNav.value = 'gallery'
        }

    } else if (p === '/recipe_overview' || p.startsWith('/recipe_overview')) {
        const f = route.query.filterrecipe

        if (f) {
            activeNav.value = `recipes:${Array.isArray(f) ? f[0] : f}`
        } else {
            activeNav.value = 'recipes'
        }

    } else if (p === '/about_me') {
        activeNav.value = 'about'

    } else if (p.startsWith('/portfolio')) {
        activeNav.value = 'portfolio'

    } else {
        activeNav.value = ''
    }
}

// Keep reactive update when route changes (e.g. client-side navigation)
watch(() => route.fullPath, () => {
    updateActiveFromRoute()
})





const setGalleryFilter = (filter) => {
  // Wenn bereits auf Galerie-Seite, direkt filtern
    if (process.client && window.location.pathname.includes('/gallery')) {
        const galleryComponent = document.querySelector('.gridcontainer')?.__vue__
        if (galleryComponent && galleryComponent.applyFilterFromNavigation) {
        galleryComponent.applyFilterFromNavigation(filter)
        }
    }
}

// const setRecipeFilter = (filter) => {
//     // Wenn bereits auf Recipe-Übersicht, direkt filtern
//     if (process.client && window.location.pathname.includes('/recipe_overview')) {
//         const recipeComponent = document.querySelector('.gridcontainer')?.__vue__
//         if (recipeComponent && recipeComponent.applyFilterFromNavigation) {
//             recipeComponent.applyFilterFromNavigation(filter)
//         }
//     }
// }
</script>