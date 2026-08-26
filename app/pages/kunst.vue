<template>
    <div id="body-kunst">
        <main>
            <a href="javascript:history.back()" class="back-button"><span><i class="fa-solid fa-arrow-left"></i></span></a>
            <h1 class="portfolio-heading">Eigene Kunst</h1>
            <p class="informationtext">Sowohl in meinem Studium als auch in meiner Freizeit entsteht Kunst, die ich gerne teile.
            </p>
            
            <div class="container">
                
                <div class="box">
                <div class="image-column">
                    <div class="gallery-item" data-index="1" data-caption="" @click="currentImage" ref="galleryItems"><img src="/images/art/Bild1_Selbststudium.jpg" alt="Schneeglöckchen im Abendlicht."></div>
                    <div class="gallery-item" data-index="4" data-caption="Vorlage für einen Holzdruck" @click="currentImage" ref="galleryItems"><img src="/images/art/Bild2_Holzschnitt.jpg" alt="Eine wenig geöffnete gelbe Osterglocke mit Wassertropfen."></div>
                    <div class="gallery-item" data-index="7" data-caption="" @click="currentImage" ref="galleryItems"><img src="/images/art/Bild3_Lilienteich.jpg" alt="Ein Sanddornbusch mit vielen orangen Beeren vor blauem Himmel."></div>
                    <div class="gallery-item" data-index="10" data-caption="Szene aus Studio Ghibli Film 'Spirited Away'" @click="currentImage" ref="galleryItems"><img src="/images/art/Bild10_Selbststudium.jpg" alt="Ein Ast einer Zierkische mit grünen Blättern und Wassertropfen."></div>
                    <div class="gallery-item" data-index="13" data-caption="Szene aus Studio Ghibli Film 'Stimme des Herzens'" @click="currentImage" ref="galleryItems"><img src="/images/art/Bild11_Selbststudium.jpg" alt="Blütenstand eines Knopfbusches mit einigen geöffneten Blüten."></div>                        
                    <div class="gallery-item" data-index="16" data-caption="Szene aus Studio Ghibli Film 'Erinnerungen an Marnie'" @click="currentImage" ref="galleryItems"><img src="/images/art/Bild12_Selbststudium.jpg" alt="Grüne, leicht gewundene Blätter mit Wassertropfen."></div>
                    <div class="gallery-item" data-index="19" data-caption="" @click="currentImage" ref="galleryItems"><img src="/images/art/Bild19_Farbstudium_Quantität(2).jpg" alt="Eine zart lila Rosenblüte mit heranfliegender Biene."></div>
                    <div class="gallery-item" data-index="22" data-caption="Farbstudium Farbe an sich" @click="currentImage" ref="galleryItems"><img src="/images/art/Bild20_Farbstudium_FarbeAnSich.jpg" alt="In Blüte stehende Äste eines Buddlejas mit daraufsitzender Biene."></div>
                    <div class="gallery-item" data-index="25" data-caption="Naturstudium Bionik" @click="currentImage" ref="galleryItems"><img src="/images/art/Bild21_Naturstudium_Bionik.jpg" alt="Zentraler Blick in einen Gang mit Säulen an den Seiten."></div>
                    <div class="gallery-item" data-index="28" data-caption="" @click="currentImage" ref="galleryItems"><img src="/images/art/Bild28_Selbststudium.jpg" alt="Natterkopfpflanze mit einer Hummel in der Blüte."></div>
                    <div class="gallery-item" data-index="31" data-caption="Farbstudium Quantität" @click="currentImage" ref="galleryItems"><img src="/images/art/Bild29_Farbstudium_Quantität(1).jpg" alt="Blick von oben auf tropische Blattpflanzen. Im Vordergrund ein Holzweg."></div>
                    <div class="gallery-item" data-index="34" data-caption="Szene aus Studio Ghibli Film 'Mein Nachbar Totoro'" @click="currentImage" ref="galleryItems"><img src="/images/art/Bild30_Selbststudium.jpg" alt="Nahaufnahme eines nassen Fruchtstandes eines Sanddorns."></div>
                    <div class="gallery-item" data-index="37" data-caption="" @click="currentImage" ref="galleryItems"><img src="/images/art/Bild37_Selbststudium.png" alt="Ast einer Japanischen Blütenkirsche von unten fotografiert."></div>
                </div>

                <div class="image-column">
                    <div class="gallery-item" data-index="2" data-caption="Collage Freude" @click="currentImage" ref="galleryItems"><img src="/images/art/Bild4_Collage_Freude.jpg" alt="Fast voll erblühter Knopfbuschblütenstand mit langen Blütenstempeln."></div> 
                    <div class="gallery-item" data-index="5" data-caption="Collage Trauer" @click="currentImage" ref="galleryItems"><img src="/images/art/Bild5_Collage_Trauer.jpg" alt="Traube eines wilden Weines."></div>
                    <div class="gallery-item" data-index="8" data-caption="" @click="currentImage" ref="galleryItems"><img src="/images/art/Bild6_Selbststudium.jpg" alt="Modernes 4-stöckiges Gebäude, bei dem die Stockwerke immer weiter umgekehrt stufenförmig herausragen."></div>                       
                    <div class="gallery-item" data-index="11" data-caption="" @click="currentImage" ref="galleryItems"><img src="/images/art/Bild13_Selbststudium.jpg" alt="Kornblume mit anfliegender Schwebefliege."></div>
                    <div class="gallery-item" data-index="14" data-caption="" @click="currentImage" ref="galleryItems"><img src="/images/art/Bild14_Selbststudium.jpg" alt="Wilder Wein mit Regentropfen."></div>
                    <div class="gallery-item" data-index="17" data-caption="" @click="currentImage" ref="galleryItems"><img src="/images/art/Bild15_Selbststudium.jpg" alt="Kugelförmiger, lila Blütenkopf des Riesenlauches in Nahaufnahme."></div>
                    <div class="gallery-item" data-index="20" data-caption="Naturstuium Enten" @click="currentImage" ref="galleryItems"><img src="/images/art/Bild22_Naturstudium(1).jpg" alt="In die Kamera schauendes Schaf im Stall."></div>
                    <div class="gallery-item" data-index="23" data-caption="Naturstuium Enten" @click="currentImage" ref="galleryItems"><img src="/images/art/Bild23_Naturstudium(2).jpg" alt="Nach vorn ragender Ast einer Brautspiere."></div>
                    <div class="gallery-item" data-index="26" data-caption="Naturstuium Enten" @click="currentImage" ref="galleryItems"><img src="/images/art/Bild24_Naturstudium(3).jpg" alt="Einzelnder Ast eines in Blüte stehenden Buddlejas."></div>
                    <div class="gallery-item" data-index="29" data-caption="Szene aus Studio Ghibli Film 'Kikis kleiner Lieferservice'" @click="currentImage" ref="galleryItems"><img src="/images/art/Bild31_Selbststudium.jpg" alt="Leicht verwelkte lila Primelblüten mit Regentropfen."></div>
                    <div class="gallery-item" data-index="31" data-caption="" @click="currentImage" ref="galleryItems"><img src="/images/art/Bild32_Selbststudium.jpg" alt="Astspitze einer Glanzmispel mit Schnee bedeckt."></div>
                    <div class="gallery-item" data-index="35" data-caption="" @click="currentImage" ref="galleryItems"><img src="/images/art/Bild33_Selbststudium.jpg" alt="Fruchtstand einer Blaubeerenpflanze mit einer einzelnen blauen Beere."></div>
                    <div class="gallery-item" data-index="38" data-caption="Farbstudium Kontrasänderung Farbe an sich" @click="currentImage" ref="galleryItems"><img src="/images/art/Bild38_Farbstudium_Kontraständerung_FarbeAnSich.png" alt="Eine Agave mit Stacheln von oben fotografiert."></div>
                </div>

                <div class="image-column">
                    <div class="gallery-item" data-index="3" data-caption="" @click="currentImage" ref="galleryItems"><img src="/images/art/Bild7_Selbststudium.jpg" alt="Aus rechter unterer Ecke ragende Blütenstände eines Lavendels."></div>
                    <div class="gallery-item" data-index="6" data-caption="Szene aus Studio Ghibli Film 'Ponyo'" @click="currentImage" ref="galleryItems"><img src="/images/art/Bild8_Selbststudium.jpg" alt="Wenige Blüten von weißen Margeriten."></div>
                    <div class="gallery-item" data-index="9" data-caption="" @click="currentImage" ref="galleryItems"><img src="/images/art/Bild9_Selbststudium.jpg" alt="Stein mit moosbedeckter Abbruchkante."></div>
                    <div class="gallery-item" data-index="12" data-caption="Erdaufgang" @click="currentImage" ref="galleryItems"><img src="/images/art/Bild16_Selbststudium.jpg" alt="Nahaufnahme eines Bananenblattes."></div>
                    <div class="gallery-item" data-index="15" data-caption="Collage" @click="currentImage" ref="galleryItems"><img src="/images/art/Bild17_Collage.jpg" alt="Natterkopfblüten mit Hummel in einer Blüte."></div>
                    <div class="gallery-item" data-index="18" data-caption="Kunstprojekt: Augenblick in Gips" @click="currentImage" ref="galleryItems"><img src="/images/art/Bild18_Kunstprojekt.jpg" alt="Einzelne schwarze Brombeere umgeben von roten Beeren. Darauf ein brauner Käfer."></div>
                    <div class="gallery-item" data-index="21" data-caption="Naturstudium Enten" @click="currentImage" ref="galleryItems"><img src="/images/art/Bild25_Naturstudium(4).jpg" alt="Rosenblatt mit Regentropfen darauf."></div>
                    <div class="gallery-item" data-index="24" data-caption="Naturstudium Enten" @click="currentImage" ref="galleryItems"><img src="/images/art/Bild26_Naturstudium(5).jpg" alt="Kleiner Fuchs (Schmetterling) auf in Blüte stehendem Buddleja-Ast."></div>
                    <div class="gallery-item" data-index="27" data-caption="Naturstudium Breitwinkel" @click="currentImage" ref="galleryItems"><img src="/images/art/Bild27_Naturstudium(6)_Breitwinkel.jpg" alt="Blütenstaude von blauvioletten Hasenglöckchen."></div>
                    <div class="gallery-item" data-index="30" data-caption="Farbstudium Qualität" @click="currentImage" ref="galleryItems"><img src="/images/art/Bild34_Farbstudium_Qualität.png" alt="Blütenstand eines Hasenglöckchens mit Knospen und zwei geöffneten Blüten."></div>
                    <div class="gallery-item" data-index="33" data-caption="Farbstudium Warm/Kalt" @click="currentImage" ref="galleryItems"><img src="/images/art/Bild35_Farbstudium_WarmKalt.png" alt="Schneebedeckte Spitze eines Astes der Kolorado-Tanne."></div>
                    <div class="gallery-item" data-index="36" data-caption="" @click="currentImage" ref="galleryItems"><img src="/images/art/Bild36_Selbststudium.png" alt="Cremefarbene Rosenblüte mit Wassertropfen von der Seite."></div>
                    <div class="gallery-item" data-index="39" data-caption="Farbstudium Kontrasänderung Original" @click="currentImage" ref="galleryItems"><img src="/images/art/Bild39_Farbstudium_Kontraständerung.png" alt="Einzelnde Äste einer nassen Buchsblättrigen Strauchveronika."></div>
                </div>
                </div>
            </div>
        </main>

        <!-- Lightbox -->
            <div v-if="showLightbox" class="lightbox" @click="closeLightboxOnBackground">
            <div class="lightbox-content">
                <img :src="currentLightboxImage" alt="">
                <div class="lightbox-caption">{{ currentLightboxCaption }}</div>
                <div class="fa fa-angle-left lightbox-prev" @click="previousImage"></div>
                <div class="fa fa-angle-right lightbox-next" @click="nextImage"></div>
                <div class="fa fa-xmark lightbox-close" @click="closeLightbox"></div>
            </div>
            </div>
    </div>
</template>

<script setup>
    useHead({ title: 'ALLES KLARA. - Kunst' })

//     import { ref, computed, onMounted, onUnmounted } from 'vue'

// const showLightbox = ref(false)
// const currentLightboxIndex = ref(0)
// const galleryItems = ref([])

// // Alle Galerieelemente aus dem DOM holen
// const updateGalleryItems = () => {
//   const items = document.getElementsByClassName('gallery-item')
//   galleryItems.value = Array.from(items)
// }

// // Aktuelles Bild der Lightbox
// const currentLightboxImage = computed(() => {
//   if (galleryItems.value[currentLightboxIndex.value]) {
//     return galleryItems.value[currentLightboxIndex.value]
//       .children[0]
//       .src
//   }

//   return ''
// })

// // Bildunterschrift
// const currentLightboxCaption = computed(() => {
//   if (galleryItems.value[currentLightboxIndex.value]) {
//     return galleryItems.value[currentLightboxIndex.value]
//       .getAttribute('data-caption')
//   }

//   return ''
// })

// // Bild anklicken
// const currentImage = (event) => {
//   updateGalleryItems()

//   const clickedElement = event.currentTarget

//   const imageIndex = galleryItems.value.indexOf(clickedElement)

//   if (imageIndex !== -1) {
//     currentLightboxIndex.value = imageIndex
//     showLightBox(imageIndex + 1)
//   }
// }

// // Lightbox öffnen
// const showLightBox = (n) => {
//   if (galleryItems.value.length === 0) return

//   if (n > galleryItems.value.length) {
//     currentLightboxIndex.value = 0
//   } else if (n < 1) {
//     currentLightboxIndex.value = galleryItems.value.length - 1
//   } else {
//     currentLightboxIndex.value = n - 1
//   }

//   showLightbox.value = true

//   document.body.style.overflow = 'hidden'

//   document.body.addEventListener('touchmove', preventScroll, {
//     passive: false
//   })

//   document.body.addEventListener('wheel', preventScroll, {
//     passive: false
//   })
// }

// // Lightbox schließen
// const hideLightBox = () => {
//   showLightbox.value = false

//   document.body.style.overflow = 'auto'

//   document.body.removeEventListener('touchmove', preventScroll)
//   document.body.removeEventListener('wheel', preventScroll)
// }

// const closeLightbox = () => {
//   hideLightBox()
// }

// // Scrollen verhindern
// const preventScroll = (event) => {
//   event.preventDefault()
// }

// // Klick auf Hintergrund schließt Lightbox
// const closeLightboxOnBackground = (event) => {
//   if (
//     event.target.classList.contains('lightbox') ||
//     event.target.classList.contains('lightbox-close')
//   ) {
//     hideLightBox()
//   }
// }

// // Bild wechseln
// const sliderImage = (n) => {
//   showLightBox(currentLightboxIndex.value + 1 + n)
// }

// const previousImage = () => {
//   sliderImage(-1)
// }

// const nextImage = () => {
//   sliderImage(1)
// }

// // Tastatursteuerung
// onMounted(() => {
//   updateGalleryItems()

//   const handleKeydown = (event) => {
//     if (!showLightbox.value) return

//     if (event.key === 'ArrowLeft') {
//       previousImage()
//     } else if (event.key === 'ArrowRight') {
//       nextImage()
//     } else if (event.key === 'Escape') {
//       closeLightbox()
//     }
//   }

//   document.addEventListener('keydown', handleKeydown)

//   onUnmounted(() => {
//     document.removeEventListener('keydown', handleKeydown)

//     document.body.style.overflow = 'auto'

//     document.body.removeEventListener('touchmove', preventScroll)
//     document.body.removeEventListener('wheel', preventScroll)
//   })
// })


// Explicit relative import so Vite can resolve the file in all setups
import useScrollTop from '../../composables/useScrollTop'

// Use shared composable for top-button behaviour and expose topFunction to the template
const { topFunction } = useScrollTop({ buttonSelector: '#topBtn', footerSelector: '#footer', showAfter: 100 })
// import { onMounted, onBeforeUnmount, ref, watch } from 'vue'
// import { useHead, useRoute } from '#imports'


// // Access route query to receive filter from header links
// const route = useRoute()

// // Resolve images via import.meta.glob so Vite serves them correctly.
// // Use a relative glob from this file (app/pages -> ../assets/images).
// // Note: `as: 'url'` is deprecated; use `query: '?url'` and `import: 'default'.`
// const images = import.meta.glob('../assets/images/**', { query: '?url', import: 'default' })

// // We'll pre-resolve the URLs so the template can synchronously read them.
// const resolvedImages = ref({})

// onMounted(async () => {
//     // Log the raw keys so we can debug resolution problems
//     const keys = Object.keys(images)
//     console.debug('[gallery] import.meta.glob keys:', keys)

//     // Resolve all image loaders to URLs and populate resolvedImages.
//     // Use Promise.allSettled so one failing loader doesn't stop others.
//     await Promise.allSettled(
//         Object.entries(images).map(async ([key, loader]) => {
//             try {
//                 const url = await loader()
//                 resolvedImages.value[key] = url
//             } catch (err) {
//                 console.warn('[gallery] image loader failed for', key, err)
//             }
//         })
//     )

//     // After resolution, log a small summary to help debugging
//     console.debug('[gallery] resolved images count:', Object.keys(resolvedImages.value).length)
// })

// function img(path) {
//     // Try several possible key variants to match what import.meta.glob may have produced.
//     const rel = path.replace(/^\/?/, '')
//     const candidates = [
//         '/' + rel,            // '/assets/...'
//         rel,                  // 'assets/...'
//         './' + rel,           // './assets/...'
//         '../' + rel,          // '../assets/...'
//         '/app/' + rel,        // '/app/assets/...'
//         'app/' + rel          // 'app/assets/...'
//     ]

//     for (const c of candidates) {
//         if (resolvedImages.value[c]) return resolvedImages.value[c]
//     }

//     // Try endsWith as a last resort
//     const foundKey = Object.keys(resolvedImages.value).find(k => k.endsWith(rel))
//     if (foundKey) return resolvedImages.value[foundKey]

//     // Not resolved yet — return the original path so the browser requests it (useful for debugging).
//     // Avoid spamming warnings on first render.
//     return path
// }

// // Make DOM-based filter and helpers available to the template.
// // These functions are safe to call on server-side (they'll no-op there).
// let visibleItems = []

// function updateVisibleItems() {
//     if (typeof window === 'undefined') return
//     visibleItems = Array.from(document.getElementsByClassName('gallery-item')).filter(item => item.style.display !== 'none')
// }

// function filterGallery(category, eventOrElement) {
//     if (typeof window === 'undefined') return

//     const items = document.getElementsByClassName('gallery-item')
//     const filterOptionsContainer = document.getElementById('filter-options')
//     const filterOptions = filterOptionsContainer ? filterOptionsContainer.getElementsByTagName('li') : []

//     for (let i = 0; i < filterOptions.length; i++) {
//         filterOptions[i].classList.remove('activegallery')
//     }

//     // Normalize element: caller may pass the Event, the target, or the LI element.
//     let element = eventOrElement
//     if (element && element.target) element = element.target
//     if (element && element.tagName !== 'LI' && element.closest) element = element.closest('li')
//     if (element) element.classList.add('activegallery')

//     if (category === 'allebilder') {
//         for (let i = 0; i < items.length; i++) {
//             items[i].style.display = 'block'
//         }
//     } else {
//         for (let i = 0; i < items.length; i++) {
//             if (items[i].classList.contains(category)) {
//                 items[i].style.display = 'block'
//             } else {
//                 items[i].style.display = 'none'
//             }
//         }
//     }

//     updateVisibleItems()

//     // updateNavBar is optional/legacy; only call if provided globally
//     if (typeof updateNavBar === 'function') updateNavBar(category)
//     // If caller didn't provide a sidebar element (e.g. header navigation used),
//     // ensure the sidebar visually highlights the selected filter.
//     if (!eventOrElement) {
//         highlightFilter(category)
//     }
// }

// function highlightFilter(filter) {
//     if (typeof window === 'undefined') return
//     const filterOptions = document.querySelectorAll('#filter-options li')
//     filterOptions.forEach(option => {
//         option.classList.remove('activegallery')
//         let filtername = option.textContent.toLowerCase()
//         filtername = filtername.replace(/ä/g, 'ae').replace(/ü/g, 'ue').replace(/ö/g, 'oe')
//         filtername = filtername.replace(/\s+/g, '')
//         if (filtername === filter) {
//             option.classList.add('activegallery')
//         }
//     })
// }

// // Note: legacy DOM-based filterGallery implementation is defined later in this file
// // (kept to preserve the original behaviour including Umlaut handling). Remove
// // this modernized duplicate to avoid redeclaration errors.

// function toggleMenu() {
//     const burgerMenu = document.querySelector('.burger-menu')
//     const sidebar = document.querySelector('.sidebar-gallery')
//     burgerMenu.classList.toggle('change')
//     sidebar.classList.toggle('active')
// }

// let mybutton = null
// let footer = null

// function scrollFunction() {
//     if (!mybutton || !footer) return
//     const footerRect = footer.getBoundingClientRect()
//     const windowHeight = window.innerHeight
//     if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
//         mybutton.style.display = 'block'
//     } else {
//         mybutton.style.display = 'none'
//     }
//     if (footerRect.top <= windowHeight) {
//         mybutton.style.position = 'absolute'
//         mybutton.style.bottom = '220px'
//     } else {
//         mybutton.style.position = 'fixed'
//         mybutton.style.bottom = '20px'
//     }
// }

// function topFunction() {
//     window.scrollTo({ top: 0, behavior: 'smooth' })
// }

// onMounted(() => {
//     mybutton = document.getElementById('topBtn')
//     footer = document.getElementById('footer')
//     window.addEventListener('scroll', scrollFunction)
//     // If the page was opened with a filter in the query (e.g. /gallery?filter=blumen)
//     const q = route?.query?.filter ? (Array.isArray(route.query.filter) ? route.query.filter[0] : route.query.filter) : null
//     if (q) {
//         // Call the same function the sidebar uses so DOM + classes are updated
//         filterGallery(q)
//     }
// })

// // React to query changes (e.g. user uses header links while staying in the app)
// watch(() => route.query.filter, (newVal) => {
//     const q = newVal ? (Array.isArray(newVal) ? newVal[0] : newVal) : null
//     if (q) filterGallery(q)
// })

// onBeforeUnmount(() => {
//     window.removeEventListener('scroll', scrollFunction)
// })

// // Run the legacy DOM-only gallery/lightbox code only in the browser (avoid SSR errors)
// if (typeof window !== 'undefined') {



// document.addEventListener("DOMContentLoaded", function() {
//     // Ensure visibleItems is populated and attach click handlers for the lightbox.
//     updateVisibleItems();
//     const galleryItems = document.getElementsByClassName("gallery-item");
//     for (let i = 0; i < galleryItems.length; i++) {
//         galleryItems[i].addEventListener("click", currentImage);
//     }

//     const urlParams = new URLSearchParams(window.location.search);
//     const filter = urlParams.get('filter');
//     if (filter) {
//         // Apply filter and visually highlight the selected option
//         filterGallery(filter, null);
//         highlightFilter(filter);
//     }
// });
// const lightBoxContainer = document.createElement("div");
// const lightBoxContent = document.createElement("div");
// const lightBoxImg = document.createElement("img");
// const lightBoxCaption = document.createElement("div");
// const lightBoxPrev = document.createElement("div");
// const lightBoxNext = document.createElement("div");
// const lightBoxClose = document.createElement("div");

// lightBoxContainer.classList.add('lightbox');
// lightBoxContent.classList.add('lightbox-content');
// lightBoxPrev.classList.add("fa","fa-angle-left","lightbox-prev");
// lightBoxNext.classList.add("fa","fa-angle-right","lightbox-next");
// lightBoxClose.classList.add("fa","fa-xmark","lightbox-close");
// lightBoxCaption.classList.add("lightbox-caption");

// lightBoxContainer.appendChild(lightBoxContent);
// lightBoxContent.appendChild(lightBoxImg);
// lightBoxContent.appendChild(lightBoxCaption);
// lightBoxContent.appendChild(lightBoxPrev);
// lightBoxContent.appendChild(lightBoxNext);
// lightBoxContent.appendChild(lightBoxClose);
// document.body.appendChild(lightBoxContainer);
// let index = 1;

// function showLightBox(n) {
//     if (n > visibleItems.length) {
//         index = 1;
//     } else if(n < 1){
//         index = visibleItems.length;
//     }

//     let imageLocation = visibleItems[index-1].children[0].getAttribute("src");
//     let captionText = visibleItems[index-1].getAttribute("data-caption");
//     lightBoxImg.setAttribute("src", imageLocation);
//     lightBoxCaption.textContent = captionText;

//     lightBoxContainer.style.display = "block";
//     document.body.style.overflow = "hidden";

//     // Deactivate touch scrolling
//     document.body.addEventListener('touchmove', preventScroll, { passive: false });
//     document.body.addEventListener('wheel', preventScroll, { passive: false });
// }

// function hideLightBox() {
//     lightBoxContainer.style.display = "none";
//     document.body.style.overflow = "auto"; // Enable scrolling

//     // Reactivate touch scrolling
//     document.body.removeEventListener('touchmove', preventScroll, { passive: false });
//     document.body.removeEventListener('wheel', preventScroll, { passive: false });
// }

// function preventScroll(event) {
//     event.preventDefault();
// }

// function currentImage(){
//     // lightBoxContainer.style.display="block";

//     let imageIndex = visibleItems.indexOf(this) + 1;
//     showLightBox(index = imageIndex);
// }

// // updateVisibleItems is defined in the module scope above so it's available to template.

// function sliderImage(n){
//     showLightBox(index += n);
// }

// function prevImage(){
//     sliderImage(-1);
// }

// function nextImage(){
//     sliderImage(1);
// }

// lightBoxPrev.addEventListener("click", prevImage);
// lightBoxNext.addEventListener("click", nextImage);

// function closeLightBox(){
//     if(this === event.target){
//         lightBoxContainer.style.display = "none";
//     }
// }

// lightBoxContainer.addEventListener("click", closeLightBox);


// lightBoxContainer.addEventListener("click", function(event) {
//     if (event.target === lightBoxContainer || event.target === lightBoxClose) {
//         hideLightBox();
//     }
// });

// }









import { ref, computed, onMounted, nextTick, onUnmounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

// Reactive data
const activeFilter = ref('allebilder')
const showLightbox = ref(false)
const currentLightboxIndex = ref(0)
const galleryItems = ref([])
const visibleItems = ref([])

// Refs für DOM-Elemente
const galleryItemRefs = ref([])

// Funktion zum Normalisieren von Filternamen (Umlaute behandeln)
// const normalizeFilterName = (name) => {
//   return name
//     .toLowerCase()
//     .replace(/ä/g, 'ae')
//     .replace(/ö/g, 'oe')
//     .replace(/ü/g, 'ue')
//     .replace(/\s+/g, '')
// }

// Bilder aus DOM lesen
const updateGalleryItems = () => {
  const items = document.getElementsByClassName('gallery-item')
  galleryItems.value = Array.from(items)
}

// Sichtbare Items aktualisieren basierend auf Filter
const updateVisibleItems = () => {
  // Ensure we have the latest DOM references before computing visible items
  updateGalleryItems()

  if (activeFilter.value === 'allebilder') {
    visibleItems.value = Array.from(galleryItems.value)
  } else {
    visibleItems.value = Array.from(galleryItems.value).filter(item => 
      item.classList.contains(activeFilter.value)
    )
  }
}

// Lightbox computed properties
const currentLightboxImage = computed(() => {
  if (visibleItems.value[currentLightboxIndex.value]) {
    return visibleItems.value[currentLightboxIndex.value].children[0].getAttribute('src')
  }
  return ''
})

const currentLightboxCaption = computed(() => {
  if (visibleItems.value[currentLightboxIndex.value]) {
    return visibleItems.value[currentLightboxIndex.value].getAttribute('data-caption')
  }
  return ''
})

// Filter-Funktionen
// const filterGallery = (category, element) => {
//   activeFilter.value = category
  
//   // Alle Items verstecken/zeigen
//   const items = document.getElementsByClassName('gallery-item')
  
//   if (category === 'allebilder') {
//     for (let i = 0; i < items.length; i++) {
//       items[i].style.display = 'block'
//     }
//   } else {
//     for (let i = 0; i < items.length; i++) {
//       if (items[i].classList.contains(category)) {
//         items[i].style.display = 'block'
//       } else {
//         items[i].style.display = 'none'
//       }
//     }
//   }
  
//   updateVisibleItems()
  
//   // Update URL parameter
//   router.push({ 
//     query: { 
//       ...route.query, 
//       filter: category === 'allebilder' ? undefined : category 
//     } 
//   })
// }

// const highlightFilter = (filter) => {
//   const normalizedFilter = normalizeFilterName(filter)
  
//   // Filter-Mapping für verschiedene Schreibweisen
//   const filterMap = {
//     'allebilder': 'allebilder',
//     'blumen': 'blumen',
//     'fruechte': 'fruechte',
//     'fruekte': 'fruechte',
//     'tiere': 'tiere',
//     'gruen': 'gruen',
//     'grün': 'gruen',
//     'gebaeude': 'gebaeude',
//     'gebäude': 'gebaeude'
//   }
  
//   const mappedFilter = filterMap[normalizedFilter] || filterMap[filter] || 'allebilder'
  
//   // Direkt filterGallery aufrufen
//   nextTick(() => {
//     filterGallery(mappedFilter, null)
//   })
// }

// Lightbox-Funktionen
const currentImage = function(event) {
  // Refresh visible items (in case filter changed)
  updateVisibleItems()

  // Determine the clicked gallery-item element robustly
  let clickedElement = event.currentTarget || event.target
  if (clickedElement && clickedElement.classList && !clickedElement.classList.contains('gallery-item')) {
    clickedElement = clickedElement.closest('.gallery-item')
  }

  console.debug('[gallery] currentImage called - clicked element:', clickedElement)

  // Prefer using the data-index attribute to locate the item among visibleItems.
  let imageIndex = -1
  const idxAttr = clickedElement ? clickedElement.getAttribute && clickedElement.getAttribute('data-index') : null
  if (idxAttr) {
    imageIndex = visibleItems.value.findIndex(item => item.getAttribute && item.getAttribute('data-index') === idxAttr)
  }

  // Fallback to direct reference compare if data-index wasn't present/matched
  if (imageIndex === -1 && clickedElement) {
    imageIndex = visibleItems.value.indexOf(clickedElement)
  }

  console.debug('[gallery] resolved imageIndex=', imageIndex, 'visibleItems length=', visibleItems.value.length)

  if (imageIndex !== -1) {
    currentLightboxIndex.value = imageIndex
    showLightBox(imageIndex + 1)
  }
}

const showLightBox = (n) => {
  if (n > visibleItems.value.length) {
    currentLightboxIndex.value = 0
  } else if (n < 1) {
    currentLightboxIndex.value = visibleItems.value.length - 1
  } else {
    currentLightboxIndex.value = n - 1
  }
  console.debug('[gallery] showLightBox called n=', n, 'resolved index=', currentLightboxIndex.value, 'visibleItems=', visibleItems.value.length)
  showLightbox.value = true
  document.body.style.overflow = "hidden"
  
  // Deactivate touch scrolling
  document.body.addEventListener('touchmove', preventScroll, { passive: false })
  document.body.addEventListener('wheel', preventScroll, { passive: false })
}

const hideLightBox = () => {
  showLightbox.value = false
  document.body.style.overflow = "auto"
  
  // Reactivate touch scrolling
  document.body.removeEventListener('touchmove', preventScroll, { passive: false })
  document.body.removeEventListener('wheel', preventScroll, { passive: false })
}

const preventScroll = (event) => {
  event.preventDefault()
}

const closeLightbox = () => {
  hideLightBox()
}

const closeLightboxOnBackground = (event) => {
  if (event.target.classList.contains('lightbox') || 
      event.target.classList.contains('lightbox-close')) {
    hideLightBox()
  }
}

const sliderImage = (n) => {
  showLightBox(currentLightboxIndex.value + 1 + n)
}

const previousImage = () => {
  sliderImage(-1)
}

const nextImage = () => {
  sliderImage(1)
}

// Funktion für Navigation von Header
const applyFilterFromNavigation = (filter) => {
  highlightFilter(filter)
}

// Lifecycle hooks
onMounted(() => {
  // DOM-Elemente lesen
  updateGalleryItems()
  updateVisibleItems()
  
  // Handle URL parameters beim Laden der Seite
  const filter = route.query.filter
  if (filter) {
    highlightFilter(filter)
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
// watch(() => route.query.filter, (newFilter) => {
//   if (newFilter) {
//     highlightFilter(newFilter)
//   } else {
//     filterGallery('allebilder', null)
//   }
// })

// Expose Funktion für Header-Navigation
defineExpose({
  applyFilterFromNavigation
})



</script>

<style scoped>
    #body-kunst {
        /* background-image: url("data:image/svg+xml,<svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='72' height='43.875' patternTransform='scale(1) rotate(0)'><rect x='0' y='0' width='100%' height='100%' fill='hsla(0, 0%, 100%, 0)'/><path d='m14.296 7.185 7.236 7.234L36.002-.048l14.47 14.47 7.236-7.233L36-14.518Zm-7.275 7.251 7.258 7.26 7.259-7.26-7.258-7.259zm-28.798 14.76 7.237 7.237L-.023 21.916 14.452 36.39l7.26-7.258L0 7.42Zm50.746 7.193-7.258-7.258-7.26 7.258 7.26 7.26zm57.568.046 7.24-7.238L72 7.42 50.282 29.137l7.259 7.259L72.02 21.918Zm-28.993-.042-7.26-7.258-7.258 7.258 7.26 7.26zm.233 14.742L36 29.358 14.223 51.135l7.258 7.258L36 43.875l14.518 14.517ZM50.453 14.45l7.259 7.26 7.258-7.26-7.258-7.257z'  stroke-width='1' stroke='hsla(122, 24%, 72%, 1)' fill='none'/></pattern></defs><rect width='800%' height='800%' transform='translate(0,-0.75)' fill='url(%23a)'/></svg>"); */
        background-image: url('/images/diamonds_background.svg');
        position: relative;
    }

    .container {
        margin: 20px 4em;

    }

    .container .box {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .container .box .image-column {
        display: flex;
        flex-direction: column;
        width: 32.5%;
    }

    .container .box .image-column img {
        width: 100%;
        /* margin-bottom: 15px; */
        border-radius: 5px;
        transition: transform 0.3s ease;
    }
    .container .box .image-column img:hover {
        /* opacity: 0.85; */
        transform: translateY(-5px);
        box-shadow: 0 6px 10px 4px rgba(0, 0, 0, 0.2);
    }
    .gallery-item {
        cursor: pointer;
        margin-bottom: 15px;
    }
    .gallery-item:hover {
        opacity: 0.85;
        /* transform: translateY(-5px);
        box-shadow: 0 6px 10px 4px rgba(0, 0, 0, 0.2); */
    }


    .lightbox {
    position: fixed;
    /* visible when rendered by Vue (v-if) */
    display: block;
    background-color: rgba(0, 0, 0, 0.6);
    width: 100%;
    height: 100%;
    overflow: auto;
    top: 0;
    left: 0;
  }
    .lightbox-content {
        position: relative;
        width: 65%;
        height: 65%;
        margin: 5% auto;
        margin-top: 9.4em;
        display: block;
        text-align: center;
    }
    .lightbox-content img {
        max-width: 100%;
        max-height: 100%;
        border: 6px solid #fff;
        object-fit: cover;
    }
    .lightbox-caption {
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        text-align: center;
        color: #fff;
        padding: 10px 0;
        font-size: 16px;
    }
    .lightbox-prev,
    .lightbox-next {
        position: absolute;
        background-color: rgba(0, 0, 0, 0.8);
        color: #ebebeb;
        padding: 10px;
        top: 45%;
        cursor: pointer;
    }
    .lightbox-prev {
        left: -50px;
    }
    .lightbox-next {
        right: -50px;
    } 
    div.fa.fa-angle-right.lightbox-next::before {
        font-size: 40px;
    }
    div.fa.fa-angle-left.lightbox-prev::before {
        font-size: 40px;
    }
    .lightbox-close {
        position: absolute;
        top: 0px;
        right: -50px;
        background-color: rgba(0, 0, 0, 0.8);
        color: #fff;
        padding: 10px;
        cursor: pointer;
        font-size: 40px;
        border: none;
        outline: none;
    }
</style>