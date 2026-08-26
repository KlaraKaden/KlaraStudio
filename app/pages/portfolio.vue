<template>
    <div id="body-portfolio">
        <main id="main-portfolio">
            <div class="container">
                <div class="headingportfolio">
                    <h3>Portfolio</h3>
                </div>
            </div>

             <NuxtLink :to="{ path: '/3DRoom' }" id="experiencebutton"  class="portfolio-theme">
            <img src="/images/icons/Icon_Room.PNG" alt="Raumumriss">
            <p>Probier den 3D Raum!</p>
          </NuxtLink>

            <article class="portfolio-theme" id="game">
                <div>
                    <h2>SheepNShapes</h2>
                    <p>Über zwei Semester hinweg habe ich zusammen mit 3 anderen Kommilitoninnen ein Videospiel entwickelt. 
                        Es ist sowohl auf dem PC als auch auf dem Handy spielbar.
                        Kannst du es schaffen das Schaf zu retten?
                        <br><br><NuxtLink to="https://sheepnshapes.github.io" class="gamebutton"><span>Spiele es!</span></NuxtLink>
                    </p>
                    
                </div>
                <img src="assets/images/Game_Cover.png" alt="Titelbild vom Spiel SheepNShapes" class="wide-picture thumbnail" />
            </article>
            
            <article class="portfolio-theme" id="naturdoku">
                <div>
                    <h2>Naturdokumentation</h2>
                    <p>Aufgabe war es, eine Dokumentation zu filmen. 
                        Ich wollte gerne mein Makroobjektiv für mein Handy verwenden, weil ich den Stil damit aufgenommenen Bilder liebe.
                        Sie geben einen Einblick in die winzige Welt der Natur, die wir sonst leicht übersehen.
                    </p>
                </div>
                <video width="700" :poster="DokuPoster" controls>
                    <source :src="DokuVideo" />
                </video>
            </article>
            
            <article class="portfolio-theme" id="vorspann">
                <div>
                    <h2>Vorspann</h2>
                    <p>Aufgabe war es, einen Vorspann für einen imaginären Film zu erstellen.</p>
                </div>
                <video width="700" :poster="vorspannPoster" controls>
                    <source :src="vorspannVideo" />
                </video>
            </article>

            <NuxtLink to="/pearl" class="articlelink">
                <article class="portfolio-theme">
                    <div>
                        <h2>Projekt Pearl <i class="fa fa-angle-right"></i></h2>
                    </div>
                </article>
            </NuxtLink>

            <NuxtLink to="/animation" class="articlelink">
                <article class="portfolio-theme">
                    <div>
                        <h2>Animation <i class="fa fa-angle-right"></i></h2>
                    </div>
                </article>
            </NuxtLink>

            <article class="portfolio-theme" id="blender">
                <div>
                    <h2>Blender</h2>
                    <p>Aufgabe war es, einen Isometric Room in Blender zu erstellen. Darunter versteht man, einen Raum
                        mit gleichlangen Seiten. Er sollte mit verschiedenen Einrichtungsgegenständen gefüllt werden.</p>
                </div>
                <img src="assets/images/isometric_room.png" alt="Isometric room in Blender" class="wide-picture thumbnail" />
            </article>

            <article class="portfolio-theme" id="filmplakat">
                <div>
                    <h2>Filmplakat</h2>
                    <p>Aufgabe war es, ein Filmplakat für einen imaginären oder schon vorhandenen Film zu erstellen.
                        Dabei habe ich mich für den Film "Bohemian Rhapsody" entschieden aufgrund meiner Vorliebe für die Musik von Queen.
                    </p>
                </div>
                <img src="assets/images/Filmplakat.png" alt="Eigen erstelltes Filmplakat zu Bohemian Rhapsody" class="thumbnail" />
            </article>

            <article class="portfolio-theme" id="videoschnitt">
                <div>
                    <h2>Videoschnitt</h2>
                    <p>Aufgabe war es, als Gruppe einen Film zu drehen mit verschiedenen Kameraführungen.
                        Das Video haben danach alle selbst geschnitten und bearbeitet. </p>
                </div>
                <video width="700" :poster="videoschnittPoster" controls>
                    <source :src="filmprojektVideo" />
                </video>
            </article>

            <NuxtLink to="/kunst" class="articlelink">
                <article class="portfolio-theme">
                    <div>
                        <h2>Eigene Kunst <i class="fa fa-angle-right"></i></h2>
                    </div>
                </article>
            </NuxtLink>
        </main>
    </div>

    <!-- Lightbox aufteilung -->
    <div id="lightbox_portfolio" class="lightbox_portfolio">
        <div class="lightbox-portfolio-content">
            <img class="lightbox-portfolio-image" id="lightbox-portfolio-image" />
            <div class="close_lightbox_portfolio"><i class="fa fa-xmark"></i></div>
        </div>
    </div>
</template>

<script setup>
useHead({ title: 'ALLES KLARA. - Portfolio' })

import { onMounted, onBeforeUnmount } from 'vue'

import vorspannVideo from '~/assets/videos/Vorspann_Musik_4_Regen.mp4'
import vorspannPoster from '~/assets/images/poster/Vorspann_Poster.jpeg'
import filmprojektVideo from '~/assets/videos/Filmprojekt_dreamers.mp4'
import videoschnittPoster from '~/assets/images/poster/Videoschnitt_Poster.png'
import DokuVideo from '~/assets/videos/Naturdoku_Farbtakt.mp4'
import DokuPoster from '~/assets/images/poster/Farbtakt_Poster.png'

function preventScroll(e) { e.preventDefault() }

let thumbnailHandlers = []
let closeHandler = null
let windowClickHandler = null
let windowTouchEndHandler = null

onMounted(() => {
    const lightboxportfolio = document.getElementById('lightbox_portfolio')
    const lightboxImagePortfolio = document.getElementById('lightbox-portfolio-image')
    const thumbnails = Array.from(document.querySelectorAll('.thumbnail'))
    const closeLightboxPortfolio = document.querySelector('.close_lightbox_portfolio')

    function showLightbox(src) {
        if (!lightboxportfolio || !lightboxImagePortfolio) return
        lightboxImagePortfolio.src = src || ''
        lightboxportfolio.style.display = 'block'
        document.body.classList.add('noscroll')
        document.body.addEventListener('touchmove', preventScroll, { passive: false })
        document.body.addEventListener('wheel', preventScroll, { passive: false })
    }

    function hideLightbox() {
        if (!lightboxportfolio) return
        lightboxportfolio.style.display = 'none'
        document.body.classList.remove('noscroll')
        document.body.removeEventListener('touchmove', preventScroll, { passive: false })
        document.body.removeEventListener('wheel', preventScroll, { passive: false })
    }

    thumbnails.forEach((thumbnail) => {
        const handler = function () { showLightbox(this.src) }
        thumbnail.addEventListener('click', handler)
        thumbnailHandlers.push({ el: thumbnail, handler })
    })

    if (closeLightboxPortfolio) {
        closeHandler = hideLightbox
        closeLightboxPortfolio.addEventListener('click', closeHandler)
    }

    windowClickHandler = function (event) { if (event.target === lightboxportfolio) hideLightbox() }
    window.addEventListener('click', windowClickHandler)

    windowTouchEndHandler = function (event) { if (event.target === lightboxportfolio) hideLightbox() }
    window.addEventListener('touchend', windowTouchEndHandler)
})

onBeforeUnmount(() => {
    thumbnailHandlers.forEach(({ el, handler }) => el.removeEventListener('click', handler))
    thumbnailHandlers = []

    const closeLightboxPortfolio = document.querySelector('.close_lightbox_portfolio')
    if (closeLightboxPortfolio && closeHandler) closeLightboxPortfolio.removeEventListener('click', closeHandler)

    if (windowClickHandler) window.removeEventListener('click', windowClickHandler)
    if (windowTouchEndHandler) window.removeEventListener('touchend', windowTouchEndHandler)

    try {
        document.body.removeEventListener('touchmove', preventScroll, { passive: false })
        document.body.removeEventListener('wheel', preventScroll, { passive: false })
    } catch (e) {}
})
</script>

<style scoped>
    #body-portfolio {
            background-image: url('/images/diamonds_background.svg');
        }

    #main-portfolio {
            display: flex;
            flex-direction: column;
            box-sizing: border-box;
            margin-top: 165px;
    }

    .container .headingportfolio {
            width: 65%;
            padding-bottom: 50px;
            align-items: center;
            text-align: center;
            margin: 0 auto;
    }

    .container .headingportfolio h3 {
            font-size: 4em;
            font-weight: bolder;
            padding-bottom: 10px;
            border-bottom: 3px solid #750000;
            font-family: PlayfairDisplay;
            color: #750000;
    }
    
    .portfolio-theme .wide-picture {
            border-radius: 10px;
            object-fit: cover;
            height: auto;
            width: 30%;
    }
    #main-portfolio a{
            text-decoration: none;
    }
    .articlelink div h2{
            margin: 0.5em 0;
    }

    .lightbox_portfolio {
            position: fixed;
            display: none;
            background-color: rgba(0, 0, 0, 0.6);
            width: 100%;
            height: 100%;
            overflow: auto;
            top: 0;
            left: 0;
    }
    .lightbox-portfolio-content {
            position: relative;
            width: 65%;
            height: 75%;
            margin: 5% auto;
            margin-top: 9.4em;
            display: block;
            text-align: center;
    }
    .lightbox-portfolio-content img {
            max-width: 100%;
            max-height: 100%;
            border: 6px solid #fff;
            object-fit: cover;
    }
    .close_lightbox_portfolio {
            position: absolute;
            top: 0px;
            right: -50px;
            background-color: rgba(0, 0, 0, 0.8);
            color: #fff;
            padding: 10px;
            cursor: pointer;
            font-size: 20px;
            border: none;
            outline: none;
            border-radius: 5px;
    }

    body.noscroll {
            overflow: hidden;
    }

    .gamebutton span {
        text-decoration: underline;
        font-size: 30px;
        color: #750000;
    }
    .gamebutton span:hover {
        color: #738c39;
    }

    #experiencebutton {
    text-decoration: none;
    font-family:Verdana, Geneva, Tahoma, sans-serif;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 50px;
    padding: 0.5em 2em;
    margin-top: 1em;
    background-color: #C0A85F;
}
#experiencebutton p {
    font-size: 30px;
    color: #750000;
}
#experiencebutton:hover {
    background-color:  #a5b575;
}
#experiencebutton img {
  height: 100px;
  width: auto;
}
</style>
