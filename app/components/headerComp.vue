<template>
    <!-- <header>
        <h3 class="header-title"><nuxt-link to="/">DLR Filmarchive</nuxt-link></h3>
        <ul>
            <li>
                <nuxt-link to="/">Home</nuxt-link>
            </li>
            <li>
                <nuxt-link to="/about">About</nuxt-link>
            </li>
            <li>
                <nuxt-link to="/contact">Contact</nuxt-link>
            </li>
        </ul>

        <div class="burger-menu-center">
            <div class="burger-menu">
                <div class="bar1"></div>
                <div class="bar2"></div>
                <div class="bar3"></div>
            </div>
    </div>

    </header> -->
    <header>
        <NuxtLink to="/" id="title-a"><div id="title"><b>ALLES KLARA.</b></div></NuxtLink>
        <div>
            <!-- <nav>
                <ul class="navigationbar">
                    <li class="parent"><a href="recipe_overview.html?filterrecipe=allerezepte">Rezepte</a>
                        <ul class="child">
                            <li class="parent upperBorder expandmenu"><a href="recipe_overview.html?filterrecipe=hauptspeisen">Hauptspeisen</a> <!-- <span class="expand">>></span>
                                <ul class="child topzero">
                                    <li><a href="recipe_overview.html?filterrecipe=auflauf">Auflauf</a></li>
                                    <li><a href="recipe_overview.html?filterrecipe=fleisch">Fleisch</a></li>
                                    <li><a href="recipe_overview.html?filterrecipe=nudeln">Nudeln</a></li>
                                    <li><a href="recipe_overview.html?filterrecipe=suppe">Suppen</a></li>
                                    <li><a href="recipe_overview.html?filterrecipe=sosse">Soßen</a></li>
                                </ul>
                            </li>
                            <li class="parent"><a href="recipe_overview.html?filterrecipe=nachspeise">Nachspeise</a></li>
                            <li class="parent expandmenu"><a href="recipe_overview.html?filterrecipe=salate">Salate</a> <!-- <span class="expand">>></span> 
                                <ul class="child">
                                    <li class="upperBorder"><a href="recipe_overview.html?filterrecipe=mitkartoffeln">Mit Kartoffeln</a></li>
                                    <li><a href="recipe_overview.html?filterrecipe=mitnudeln">Mit Nudeln</a></li>
                                </ul>
                            </li>
                            <li class="parent expandmenu"><a href="recipe_overview.html?filterrecipe=backen">Backen</a> <!-- <span class="expand">>></span> 
                                <ul class="child">
                                    <li class="upperBorder"><a href="recipe_overview.html?filterrecipe=kekse">Kekse</a></li>
                                    <li><a href="recipe_overview.html?filterrecipe=kuchen">Kuchen</a></li>
                                    <li><a href="recipe_overview.html?filterrecipe=torten">Torten</a></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li class="parent">
                        <NuxtLink to="/gallery" @click="() => setGalleryFilter('allebilder')">Fotografie</NuxtLink>
                        <ul class="child">
                            <li class="parent" style="border-top: #36401f 1px solid;">
                                <NuxtLink to="/gallery?filter=blumen" @click="() => setGalleryFilter('blumen')">Blumen</NuxtLink>
                            </li>
                            <li class="parent"><NuxtLink :to="{ path: '/gallery', query: { filter: 'fruechte' } }" data-filter="fruechte">Früchte</NuxtLink></li>
                            <li class="parent"><NuxtLink :to="{ path: '/gallery', query: { filter: 'tiere' } }" data-filter="tiere">Tiere</NuxtLink></li>
                            <li class="parent"><NuxtLink :to="{ path: '/gallery', query: { filter: 'gruen' } }" data-filter="gruen">Grün</NuxtLink></li>
                            <li class="parent"><NuxtLink :to="{ path: '/gallery', query: { filter: 'gebaeude' } }" data-filter="gebaeude">Gebäude</NuxtLink></li>
                        </ul>
                    </li>
                    <li class="parent"><NuxtLink to="/about_me">Über mich</NuxtLink>
                        <ul class="child">
                            <li class="parent upperBorder">
                                <NuxtLink to="/portfolio">Portfolio</NuxtLink>
                            </li>
                            <li class="parent"><a href="wunschzettel.html">Wunschzettel</a></li>
                        </ul>
                    </li>
                </ul>
            </nav> -->
            <navBar />
        </div>
    </header>
</template>

<script>
    import navBar from './navBar.vue'
    export default {
        components: {
            navBar
        }
    }
</script>

<style scoped>

/* /////////////////////////////////////////////////////////////////////////////////////////////////////////// */
/* Seitenüberschrift/Titel anfang*/
/* /////////////////////////////////////////////////////////////////////////////////////////////////////////// */
header a div {
    font-family: Arial, Helvetica, sans-serif;
    font-style: italic;
    font-weight: bold;
    font-size: 8em;
    text-align: center;
    color: #36401f;
    padding-top: 50px;
    padding-bottom: 20px;
    margin: 0;
}
/* #title-a {
    font-family: Arial, Helvetica, sans-serif;
    font-style: italic;
    font-weight: bold;
    font-size: 8em;
    text-align: center;
    color: #36401f;
    padding-top: 50px;
    padding-bottom: 20px;
    margin: 0;
} */
a:hover div,
a:focus div {
    color: #5b702c;
    /* text-decoration: underline; */
}
/* #title:hover,
#title:focus {
    color: #750000;
    background-color: #4d64c2;
} */
/* #title-a:hover,
#title-a:focus{
    text-decoration: underline;
    color: #5b702c;
} */
header a {
    text-decoration: none;
}
header {
    background-color: darkseagreen;
}
/* /////////////////////////////////////////////////////////////////////////////////////////////////////////// */
/* Seitenüberschrift/Titel Ende*/
/* /////////////////////////////////////////////////////////////////////////////////////////////////////////// */




/* /////////////////////////////////////////////////////////////////////////////////////////////////////////// */
/* Navigationsbar anfang*/
/* /////////////////////////////////////////////////////////////////////////////////////////////////////////// */
/* .navigationbar {
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
} */
/* sichtbaren Fokus für Tastaturnutzer */
/* .parent > a:focus {
    outline: 2px dashed #5b702c;
    outline-offset: 4px;
} */
/* .child {
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
} */
/* Allgemeine Regel für alle Links - Schriftfarbe ändern */
/* .navigationbar a.activenav {
    color: #36401f;
} */

/* Spezifische Regel für Hauptmenü (Rezepte, Fotografie, Über mich) - Hintergrundfarbe ändern */
/* .navigationbar > .parent > a.activenav {
    background-color: #da7e28; 
    color: #fff;
} */

/* Hauptmenüelemente, wenn ein Untermenü aktiv ist */
/* .navigationbar > .parent.parent-activenav > a {
    background-color: #7b9a6c;
    color: #fff;
} */

/* Keine Hintergrundfarbe für Untermenü-Elemente */
/* .navigationbar .child a.activenav,
.navigationbar .child .parent-activenav > a {
    background-color: transparent;
    color: #d132dd;
    color: #4d64c2;
    color: #fff;
} */



/* /////////////////////////////////////////////////////////////////////////////////////////////////////////// */
/* Navigationsbar ende*/
/* /////////////////////////////////////////////////////////////////////////////////////////////////////////// */




/* header {
    background: #eee9e5;
    color: #26291fff;
    width: 100%;
    height: 7em;
    padding: 0 5vw;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}
.header-title {
    font-size: 4vw;
    font-weight: 500;
    margin: 0;
}
header ul {
    list-style: none;
    display: flex;
    flex-direction: row;
    gap: 3em;
}
header ul li {
    font-size: 1.8vw;
    font-weight: 400;
}
.burger-menu {
        display: none;
    }

@media (max-width: 860px) {
    .header-title {
        font-size: 6vw;
    }
    header ul {
        display: none;
    }
    header ul li {
        display: none;
    }

    .burger-menu-center {
        display: flex;
        justify-content: center;
        align-items: center;
        background-image: none;
    }
    .burger-menu {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 40px;
        height: 35px;
        cursor: pointer;
        margin: 10px;
        gap: 10px; 
    }
    .burger-menu div {
        width: 40px;
        /* width: 100%; */
        /*height: 4px;
        background-color: #36401f;
        /* margin: 3px 0; */
        /* transition: 0.4s; */
        /*border-radius: 5px;
    }
} */
</style>

<!-- <script setup>
import { onMounted } from 'vue'

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
    // Client-only DOM manipulation
    const currentUrl = window.location.href
    const navLinks = document.querySelectorAll('.navigationbar a')

    navLinks.forEach(link => {
        if (link.href === currentUrl) {
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
})





const setGalleryFilter = (filter) => {
  // Wenn bereits auf Galerie-Seite, direkt filtern
  if (process.client && window.location.pathname.includes('galerie')) {
    const galleryComponent = document.querySelector('.gridcontainer')?.__vue__
    if (galleryComponent && galleryComponent.applyFilterFromNavigation) {
      galleryComponent.applyFilterFromNavigation(filter)
    }
  }
}
</script> -->