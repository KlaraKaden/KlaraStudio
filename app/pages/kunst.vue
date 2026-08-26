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

import useScrollTop from '../../composables/useScrollTop'

const { topFunction } = useScrollTop({ buttonSelector: '#topBtn', footerSelector: '#footer', showAfter: 100 })

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


// Bilder aus DOM lesen
const updateGalleryItems = () => {
  const items = document.getElementsByClassName('gallery-item')
  galleryItems.value = Array.from(items)
}

// Sichtbare Items aktualisieren basierend auf Filter
const updateVisibleItems = () => {
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

// Lightbox-Funktionen
const currentImage = function(event) {
  // Refresh visible items (in case filter changed)
  updateVisibleItems()

  let clickedElement = event.currentTarget || event.target
  if (clickedElement && clickedElement.classList && !clickedElement.classList.contains('gallery-item')) {
    clickedElement = clickedElement.closest('.gallery-item')
  }

  console.debug('[gallery] currentImage called - clicked element:', clickedElement)

  let imageIndex = -1
  const idxAttr = clickedElement ? clickedElement.getAttribute && clickedElement.getAttribute('data-index') : null
  if (idxAttr) {
    imageIndex = visibleItems.value.findIndex(item => item.getAttribute && item.getAttribute('data-index') === idxAttr)
  }

  // Fallback
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

// Expose Funktion für Header-Navigation
defineExpose({
  applyFilterFromNavigation
})



</script>

<style scoped>
    #body-kunst {
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
        border-radius: 5px;
        transition: transform 0.3s ease;
    }
    .container .box .image-column img:hover {
        transform: translateY(-5px);
        box-shadow: 0 6px 10px 4px rgba(0, 0, 0, 0.2);
    }
    .gallery-item {
        cursor: pointer;
        margin-bottom: 15px;
    }
    .gallery-item:hover {
        opacity: 0.85;
    }


    .lightbox {
    position: fixed;
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