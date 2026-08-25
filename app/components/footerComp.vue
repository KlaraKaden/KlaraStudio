<template>
    <footer class="footer" id="footer">
        <div class="footertext">
            <NuxtLink to="/imprint">Impressum</NuxtLink>
            <NuxtLink to="/data_protection">Datenschutz</NuxtLink>
            <!-- <a href="datenschutz.html">Datenschutz</a> -->
            <a href="kontakt.html">Kontakt</a>
        </div>
        <div class="linkimage">
            <a href="https://www.instagram.com/_alles.klara_/" target="_blank" @focus="onAnchorFocus('i', $event)" @blur="onAnchorBlur('i', $event)">
                <img class="responsive" :src="imageMap.i.default" alt="instagramlogo" @mouseover="onImgMouseOver('i', $event)" @mouseout="onImgMouseOut('i', $event)">
            </a>
            <a href="https://discord.com/channels/klarathesheep" target="_blank" @focus="onAnchorFocus('d', $event)" @blur="onAnchorBlur('d', $event)">
                <img class="responsive" :src="imageMap.d.default" alt="discordlogo" @mouseover="onImgMouseOver('d', $event)" @mouseout="onImgMouseOut('d', $event)">
            </a>
            <a href="https://pin.it/1sPuT0eoL" target="_blank" @focus="onAnchorFocus('p', $event)" @blur="onAnchorBlur('p', $event)">
                <img class="responsive" :src="imageMap.p.default" alt="pinterestlogo" @mouseover="onImgMouseOver('p', $event)" @mouseout="onImgMouseOut('p', $event)">
            </a>
        </div>
        <div class="copyright">Copyright &copy; {{ currentYear }} ALLES KLARA.
            <span id="date">Datum:</span> {{ formattedDate }}
        </div>
    </footer>
    <!-- <footer>
        <a href="">Impressum</a>
        <a href="">Datenschutz</a>
    </footer> -->
</template>

<script setup>
// Datum/Jahr im Script-Block berechnen statt document.write im Template
const now = new Date()
const currentYear = now.getFullYear()
const options = { year: 'numeric', month: 'short', day: 'numeric' }
const formattedDate = now.toLocaleDateString('de-DE', options)

// Importiere Icons damit Vite/Nuxt die URLs korrekt auflöst
import instDefault from '~/assets/images/icon_instagram.png'
import instHover from '~/assets/images/icon_instagram_hover_salmon.PNG'
import discDefault from '~/assets/images/icon_discord.png'
import discHover from '~/assets/images/icon_discord_hover_salmon.PNG'
import pinDefault from '~/assets/images/icon_pinterest.png'
import pinHover from '~/assets/images/icon_pinterest_hover_salmon.PNG'

// Bild-Handler: setze src je nach Zustand (hover/default) mit aufgelösten Import-URLs
const imageMap = {
    i: {
        default: instDefault,
        hover: instHover
    },
    d: {
        default: discDefault,
        hover: discHover
    },
    p: {
        default: pinDefault,
        hover: pinHover
    }
}

function setImage(service, state, img) {
    if (!img || !imageMap[service]) return
    img.src = state === 'hover' ? imageMap[service].hover : imageMap[service].default
}

function onAnchorFocus(service, event) {
    const img = event.currentTarget.querySelector('img')
    setImage(service, 'hover', img)
}
function onAnchorBlur(service, event) {
    const img = event.currentTarget.querySelector('img')
    setImage(service, 'default', img)
}

function onImgMouseOver(service, event) {
    setImage(service, 'hover', event.currentTarget)
}
function onImgMouseOut(service, event) {
    setImage(service, 'default', event.currentTarget)
}
</script>

<style scoped>
/* /////////////////////////////////////////////////////////////////////////////////////////////////////////// */
/* Footer anfang*/
/* /////////////////////////////////////////////////////////////////////////////////////////////////////////// */
#footer {
    background: #606e40;
    height: 200px;
    margin-top: auto; /* Push the footer to the bottom */
}
.footer {
    display: grid;
    height: 200px;
}
#footer {
    height: 200px;
}
.footertext {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 50px;
}
.footertext a {
    text-decoration: none;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 25px;
    color: #b6c78f; 
} 
.footertext a:hover {
    color: #e9967a;
    /* color: #8b7529;
    color: #C6F0FF; */
}
.linkimage {
    display: flex;
    align-items: center; 
    justify-content: center;
    gap: 50px;
}
.responsive {
    height: 50px;
}
.copyright {
    display: flex;
    font-family: 'Times New Roman', Times, serif;
    font-size: 14px;
    text-align: center;
    color: #b6c78f;
    align-items: center;
    justify-content: center;
}
#date {
    margin-left: 10px;
    margin-right: 3px;
}
/* /////////////////////////////////////////////////////////////////////////////////////////////////////////// */
/* Footer ende*/
/* /////////////////////////////////////////////////////////////////////////////////////////////////////////// */

/* footer {
    background: #eee9e5;
    color: #26291fff;
    padding: 1em 5vw;
    display: flex;
    justify-content: flex-start;
    gap: 2em;
    margin-top: auto;
}
footer a {
    color: #26291fff;
    text-decoration: none;
}
footer a:hover {
    text-decoration: underline;
} */
</style>