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
            <!-- <a class="articlelink" href="pearl.html"> -->
                <article class="portfolio-theme">
                    <div>
                        <h2>Projekt Pearl <i class="fa fa-angle-right"></i></h2>
                    </div>
                </article>
            <!-- </a> -->
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

// Import assets so Vite/Nuxt resolves them correctly at build/runtime
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
            /* background-image: url("data:image/svg+xml,<svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='72' height='43.875' patternTransform='scale(1) rotate(0)'><rect x='0' y='0' width='100%' height='100%' fill='hsla(0, 0%, 100%, 0)'/><path d='m14.296 7.185 7.236 7.234L36.002-.048l14.47 14.47 7.236-7.233L36-14.518Zm-7.275 7.251 7.258 7.26 7.259-7.26-7.258-7.259zm-28.798 14.76 7.237 7.237L-.023 21.916 14.452 36.39l7.26-7.258L0 7.42Zm50.746 7.193-7.258-7.258-7.26 7.258 7.26 7.26zm57.568.046 7.24-7.238L72 7.42 50.282 29.137l7.259 7.259L72.02 21.918Zm-28.993-.042-7.26-7.258-7.258 7.258 7.26 7.26zm.233 14.742L36 29.358 14.223 51.135l7.258 7.258L36 43.875l14.518 14.517ZM50.453 14.45l7.259 7.26 7.258-7.26-7.258-7.257z'  stroke-width='1' stroke='hsla(122, 24%, 72%, 1)' fill='none'/></pattern></defs><rect width='800%' height='800%' transform='translate(0,-0.75)' fill='url(%23a)'/></svg>"); */
            background-image: url('/images/diamonds_background.svg');
        }

    #main-portfolio {
            display: flex;
            flex-direction: column;
            box-sizing: border-box;
            margin-top: 165px;
    }
    /* .container {
        margin-top: 70px;
    } */

    .container .headingportfolio {
            width: 65%;
            padding-bottom: 50px;
            align-items: center;
            text-align: center;
            margin: 0 auto; /* center the 65% wide heading container */
    }

    .container .headingportfolio h3 {
            font-size: 4em;
            font-weight: bolder;
            padding-bottom: 10px;
            border-bottom: 3px solid #750000;
            font-family: PlayfairDisplay;
            color: #750000;
    }
    /* .portfolio-theme {
            background-color: #EB933B;
            padding: 2em;
            display: flex;
            justify-content: space-between;
            border-radius: 10px;
            margin: 3em;
            margin-bottom: 2em;
    }
    .portfolio-theme h2 {
            font-family: Verdana, Geneva, Tahoma, sans-serif;
            font-size: 4.5rem;
            color: #750000;
            margin-top: 0.2em;
            margin-bottom: 0.5em;
    }
    a .portfolio-theme div h2:hover {
            color: #738c39;
    }

    .portfolio-theme div p {
            margin-top: 30px;
            margin-left: 3em;
            padding: 3px 6px;
            width: 50vw;
            font-size: 25px;
            color: #750000;
            font-family: Verdana, Geneva, Tahoma, sans-serif;
    }
    .portfolio-theme img {
            border-radius: 10px;
            object-fit: cover;
            height: auto;
            cursor: pointer;
            width: 22%;
    }
    .portfolio-theme video {
            border-radius: 10px;
            width: 33%;
            height: auto;
            align-self: center;
    } */
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

    /* .portfolio-heading {
            font-size: 5vw;
            font-weight: bolder;
            padding-bottom: 10px;
            font-family: Salsa;
            color: #750000;
            text-align: left;
            font-style: normal;
            margin: 1em 0;
            margin-left: 0.7em;
            margin-bottom: 0.5em;
            padding: 0;
    }

    .informationtext {
            font-family: Verdana, Geneva, Tahoma, sans-serif;
            font-size: 1.5em;
            margin: 0.5em 4em;
            color: #3f0a0a;
    } */
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
    /* font-size: 50px; */
    /* background-color: #a5b575; */
    /* color: #5e8d3b; */
    /* padding: 20px;
    width: 100%;
    border-radius: 10px;   */
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
  /* margin-top: 1em;
  margin-bottom: 2em; */
}
</style>
