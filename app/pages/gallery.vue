<template>
    <div id="body-gallery">
        <!-- <div class="burger-menu-center">
            <div class="burger-menu" @click="toggleMenu">
                <div class="bar1"></div>
                <div class="bar2"></div>
                <div class="bar3"></div>
            </div>
        </div> -->

        <button @click="topFunction" id="topBtn" title="Go to top">nach oben <i class="fa-solid fa-arrow-up"></i></button>

        <div class="gridcontainer">
            <aside class="sidebar-gallery">
            <div class="filter-list">
                <ul id="filter-options">
                <li 
                    @click="filterGallery('allebilder', $event.target)" 
                    :class="{ activegallery: activeFilter === 'allebilder' }"
                >
                    Alle Bilder
                </li>
                <li 
                    @click="filterGallery('blumen', $event.target)" 
                    :class="{ activegallery: activeFilter === 'blumen' }"
                >
                    Blumen
                </li>
                <li 
                    @click="filterGallery('fruechte', $event.target)" 
                    :class="{ activegallery: activeFilter === 'fruechte' }"
                >
                    Früchte
                </li>
                <li 
                    @click="filterGallery('tiere', $event.target)" 
                    :class="{ activegallery: activeFilter === 'tiere' }"
                >
                    Tiere
                </li>
                <li 
                    @click="filterGallery('gruen', $event.target)" 
                    :class="{ activegallery: activeFilter === 'gruen' }"
                >
                    Grün
                </li>
                <li 
                    @click="filterGallery('gebaeude', $event.target)" 
                    :class="{ activegallery: activeFilter === 'gebaeude' }"
                >
                    Gebäude
                </li>
                </ul>
            </div>
            </aside>

            <main class="main-gallery">
            <div class="container">
                <div class="heading">
                <h3>Galerie</h3>
                </div>
                
                <div class="box">
                <div class="image-column">
                    <div class="gallery-item blumen" data-index="1" data-caption="Schneegloeckchen: 03.04.2024, Großerkmannsdorf, Deutschland" @click="currentImage" ref="galleryItems"><img src="assets/images/Fotografie/Bild1_03.04.24.JPG" alt="Schneeglöckchen im Abendlicht."></div>
                    <div class="gallery-item blumen" data-index="2" data-caption="Osterglocke: 14.03.2024, Großerkmannsdorf, Deutschland" @click="currentImage" ref="galleryItems"><img src="assets/images/Fotografie/Bild2_14.03.24.JPG" alt="Eine wenig geöffnete gelbe Osterglocke mit Wassertropfen."></div>
                    <div class="gallery-item fruechte" data-index="3" data-caption="Sanddorn: 15.09.2023, Großerkmannsdorf, Deutschland" @click="currentImage" ref="galleryItems"><img src="assets/images/Fotografie/Bild3_15.09.23.JPG" alt="Ein Sanddornbusch mit vielen orangen Beeren vor blauem Himmel."></div>
                    <div class="gallery-item gruen" data-index="4" data-caption="Zierkirsche: 29.07.2023, Großerkmannsdorf, Deutschland" @click="currentImage" ref="galleryItems"><img src="assets/images/Fotografie/Bild4_29.07.23.JPG" alt="Ein Ast einer Zierkische mit grünen Blättern und Wassertropfen."></div>
                    <div class="gallery-item blumen" data-index="5" data-caption="Knopfbusch: 12.07.2023, Großerkmannsdorf, Deutschland" @click="currentImage" ref="galleryItems"><img src="assets/images/Fotografie/Bild5_12.07.23.JPG" alt="Blütenstand eines Knopfbusches mit einigen geöffneten Blüten."></div>                        
                    <div class="gallery-item gruen" data-index="6" data-caption="Grünes Blatt mit Regentropfen: 14.03.2024, Großerkmannsdorf, Deutschland" @click="currentImage" ref="galleryItems"><img src="assets/images/Fotografie/Bild38_14.03.2024.JPG" alt="Grüne, leicht gewundene Blätter mit Wassertropfen."></div>
                    <div class="gallery-item tiere blumen" data-index="7" data-caption="Rose mit Biene: 03.06.2023, Großerkmannsdorf, Deutschland" @click="currentImage" ref="galleryItems"><img src="assets/images/Fotografie/Bild22_03.06.2023.jpg" alt="Eine zart lila Rosenblüte mit heranfliegender Biene."></div>
                    <div class="gallery-item tiere blumen" data-index="8" data-caption="Buddleja mit Biene: 16.06.2022, Großerkmannsdorf, Deutschland" @click="currentImage" ref="galleryItems"><img src="assets/images/Fotografie/Bild18_16.06.2022.JPG" alt="In Blüte stehende Äste eines Buddlejas mit daraufsitzender Biene."></div>
                    <div class="gallery-item gebaeude" data-index="9" data-caption="Gang im Militärhistorischen Museum: 20.04.2023, Seoul, Südkorea" @click="currentImage" ref="galleryItems"><img src="assets/images/Fotografie/Bild32_20.04.2023.jpg" alt="Zentraler Blick in einen Gang mit Säulen an den Seiten."></div>
                    <div class="gallery-item tiere blumen" data-index="10" data-caption="Natterkopf mit Hummel: 08.07.2023, Großerkmannsdorf, Deutschland" @click="currentImage" ref="galleryItems"><img src="assets/images/Fotografie/Bild20_08.07.2023.JPG" alt="Natterkopfpflanze mit einer Hummel in der Blüte."></div>
                    <div class="gallery-item gruen" data-index="11" data-caption="Botanischer Garten: 11.04.2023, Seoul, Südkorea" @click="currentImage" ref="galleryItems"><img src="assets/images/Fotografie/Bild24_11.04.2023.jpg" alt="Blick von oben auf tropische Blattpflanzen. Im Vordergrund ein Holzweg."></div>
                    <div class="gallery-item fruechte" data-index="12" data-caption="Sanddorn: 08.01.2022, Großerkmannsdorf, Deutschland" @click="currentImage" ref="galleryItems"><img src="assets/images/Fotografie/Bild16_08.01.2022.JPG" alt="Nahaufnahme eines nassen Fruchtstandes eines Sanddorns."></div>
                    <div class="gallery-item blumen" data-index="13" data-caption="Japanische Blütenkirsche: 22.04.2022, Großerkmannsdorf, Deutschland" @click="currentImage" ref="galleryItems"><img src="assets/images/Fotografie/Bild50_22.04.2022.JPG" alt="Ast einer Japanischen Blütenkirsche von unten fotografiert."></div>
                    <div class="gallery-item gruen" data-index="14" data-caption="Narzisse: 24.01.2022, Großerkmannsdorf, Deutschland" @click="currentImage" ref="galleryItems"><img src="assets/images/Fotografie/Bild40_24.01.2022.JPG" alt="Narzissensprossen mit Regentropfen."></div>
                    <div class="gallery-item gebaeude" data-index="15" data-caption="Aussichtsturm: 13.04.2023, Incheon, Südkorea" @click="currentImage" ref="galleryItems"><img src="assets/images/Fotografie/Bild25_13.04.2023.jpg" alt="Weg in einem Park, umsäumt von weiß blühenden Kirschbäumen,der zu einem asiatisch gestalteten Aussichtsturm führt."></div>                        
                    <div class="gallery-item blumen" data-index="16" data-caption="Seerose: 03.06.2023, Seoul, Südkorea" @click="currentImage" ref="galleryItems"><img src="assets/images/Fotografie/Bild35_03.06.2023.jpg" alt="Eine rosa Seerose auf mit Seerosenblättern bedeckten Teich."></div>
                    <div class="gallery-item blumen" data-index="17" data-caption="Rose mit Regentropfen: 24.06.2022, Großerkmannsdorf, Deutschland" @click="currentImage" ref="galleryItems"><img src="assets/images/Fotografie/Bild51_24.06.2022.JPG" alt="Cremefarbene Rosenblüte mit Regentropfen."></div>
                </div>

                <div class="image-column">
                     <div class="gallery-item blumen" data-index="18" data-caption="Knopfbusch: 11.07.2023, Großerkmannsdorf, Deutschland" @click="currentImage" ref="galleryItems"><img src="assets/images/Fotografie/Bild6_11.07.23.JPG" alt="Fast voll erblühter Knopfbuschblütenstand mit langen Blütenstempeln."></div> 
                    <div class="gallery-item fruechte gruen" data-index="19" data-caption="Wilder Wein: 08.07.2023, Großerkmannsdorf, Deutschland" @click="currentImage" ref="galleryItems"><img src="assets/images/Fotografie/Bild7_08.07.23.JPG" alt="Traube eines wilden Weines."></div>
                    <div class="gallery-item gebaeude" data-index="20" data-caption="National Assembly Communication Building: 20.05.2023, Seoul, Südkorea" @click="currentImage" ref="galleryItems"><img src="assets/images/Fotografie/Bild36_20.05.2023.jpg" alt="Modernes 4-stöckiges Gebäude, bei dem die Stockwerke immer weiter umgekehrt stufenförmig herausragen."></div>                       
                    <div class="gallery-item blumen tiere" data-index="21" data-caption="Kornblume mit Schwebfliege: 18.06.2023, Großerkmannsdorf, Deutschland" @click="currentImage" ref="galleryItems"><img src="assets/images/Fotografie/Bild14_18.06.23.JPG" alt="Kornblume mit anfliegender Schwebefliege."></div>
                    <div class="gallery-item gruen" data-index="22" data-caption="Wilder Wein: 29.07.2023, Großerkmannsdorf, Deutschland" @click="currentImage" ref="galleryItems"><img src="assets/images/Fotografie/Bild39_29.07.2023.JPG" alt="Wilder Wein mit Regentropfen."></div>
                    <div class="gallery-item blumen" data-index="23" data-caption="Riesenlauch: 21.06.2023, Großerkmannsdorf, Deutschland" @click="currentImage" ref="galleryItems"><img src="assets/images/Fotografie/Bild12_21.06.23.JPG" alt="Kugelförmiger, lila Blütenkopf des Riesenlauches in Nahaufnahme."></div>
                    <div class="gallery-item tiere" data-index="24" data-caption="Schaf: 11.02.2023, Seoul, Südkorea" @click="currentImage" ref="galleryItems"><img src="assets/images/Fotografie/Bild21_11.02.2023.jpg" alt="In die Kamera schauendes Schaf im Stall."></div>
                    <div class="gallery-item blumen" data-index="25" data-caption="Brautspiere: 22.04.2022, Großerkmannsdorf, Deutschland" @click="currentImage" ref="galleryItems"><img src="assets/images/Fotografie/Bild28_22.04.2022.JPG" alt="Nach vorn ragender Ast einer Brautspiere."></div>
                    <div class="gallery-item blumen" data-index="26" data-caption="Buddleja: 16.06.2022, Großerkmannsdorf, Deutschland" @click="currentImage" ref="galleryItems"><img src="assets/images/Fotografie/Bild31_16.06.2022.JPG" alt="Einzelnder Ast eines in Blüte stehenden Buddlejas."></div>
                    <div class="gallery-item blumen" data-index="27" data-caption="Primel: 19.12.2021, Großerkmannsdorf, Deutschland" @click="currentImage" ref="galleryItems"><img src="assets/images/Fotografie/Bild34_19.12.2021.JPG" alt="Leicht verwelkte lila Primelblüten mit Regentropfen."></div>
                    <div class="gallery-item gruen" data-index="28" data-caption="Glanzmispel: 08.01.2023, Großerkmannsdorf, Deutschland" @click="currentImage" ref="galleryItems"><img src="assets/images/Fotografie/Bild23_08.01.2023.JPG" alt="Astspitze einer Glanzmispel mit Schnee bedeckt."></div>
                    <div class="gallery-item fruechte" data-index="29" data-caption="Blaubeere: 08.07.2023, Großerkmannsdorf, Deutschland" @click="currentImage" ref="galleryItems"><img src="assets/images/Fotografie/Bild8_08.07.23.JPG" alt="Fruchtstand einer Blaubeerenpflanze mit einer einzelnen blauen Beere."></div>
                    <div class="gallery-item gruen" data-index="30" data-caption="Agave: 03.06.2023, Seoul, Südkorea" @click="currentImage" ref="galleryItems"><img src="assets/images/Fotografie/Bild43_03.06.2023.jpg" alt="Eine Agave mit Stacheln von oben fotografiert."></div>
                    <div class="gallery-item blumen" data-index="31" data-caption="Fackelingwer: 11.04.2023, Seoul, Südkorea" @click="currentImage" ref="galleryItems"><img src="assets/images/Fotografie/Bild49_11.04.2023.jpg" alt="Drei rote Fackelingwerblüten."></div>
                    <div class="gallery-item blumen" data-index="32" data-caption="Schwarzer Lauch: 18.06.2023, Großerkmannsdorf, Deutschland" @click="currentImage" ref="galleryItems"><img src="assets/images/Fotografie/Bild47_18.06.2023.JPG" alt="Runder weißer Blütenkopf eines Schwarzen Lauches in Nahaufnahme."></div>
                    <div class="gallery-item gruen" data-index="33" data-caption="Strauchveronika: 19.12.2021,Großerkmannsdorf, Deutschland" @click="currentImage" ref="galleryItems"><img src="assets/images/Fotografie/Bild26_19.12.2021.JPG" alt="Einzelner Ast mit Regentropfen einer Strauchveronika im Fokus des Bildes."></div>
                </div>

                <div class="image-column">
                    <div class="gallery-item blumen" data-index="34" data-caption="Lavendel: 24.06.2023; Großerkmannsdorf, Deutschland" @click="currentImage" ref="galleryItems"><img src="assets/images/Fotografie/Bild11_24.06.23.JPG" alt="Aus rechter unterer Ecke ragende Blütenstände eines Lavendels."></div>
                    <div class="gallery-item blumen" data-index="35" data-caption="Margeriten: 08.07.2023; Großerkmannsdorf, Deutschland" @click="currentImage" ref="galleryItems"><img src="assets/images/Fotografie/Bild9_08.07.23.JPG" alt="Wenige Blüten von weißen Margeriten."></div>
                    <div class="gallery-item gruen" data-index="36" data-caption="Stein mit Moos: 18.06.2023; Großerkmannsdorf, Deutschland" @click="currentImage" ref="galleryItems"><img src="assets/images/Fotografie/Bild13_18.06.23.JPG" alt="Stein mit moosbedeckter Abbruchkante."></div>
                    <div class="gallery-item gruen" data-index="37" data-caption="Bananenblatt: 10.05.2023; Seoul, Südkorea" @click="currentImage" ref="galleryItems"><img src="assets/images/Fotografie/Bild10_05.07.23.jpg" alt="Nahaufnahme eines Bananenblattes."></div>
                    <div class="gallery-item blumen tiere" data-index="38" data-caption="Natterkopf mit Hummel: 08.07.2023; Großerkmannsdorf, Deutschland" @click="currentImage" ref="galleryItems"><img src="assets/images/Fotografie/Bild15_08.07.23.JPG" alt="Natterkopfblüten mit Hummel in einer Blüte."></div>
                    <div class="gallery-item fruechte" data-index="39" data-caption="Brombeeren mit Käfer: 16.09.2022, Großerkmannsdorf, Deutschland" @click="currentImage" ref="galleryItems"><img src="assets/images/Fotografie/Bild17_16.09.2022.JPG" alt="Einzelne schwarze Brombeere umgeben von roten Beeren. Darauf ein brauner Käfer."></div>
                    <div class="gallery-item gruen" data-index="40" data-caption="Rosenblatt mit Regentropfen: 16.09.2022, Großerkmannsdorf, Deutschland" @click="currentImage" ref="galleryItems"><img src="assets/images/Fotografie/Bild33_16.09.2022.JPG" alt="Rosenblatt mit Regentropfen darauf."></div>
                    <div class="gallery-item tiere blumen" data-index="41" data-caption="Buddleja mit Schmetterling: 17.06.2022, Großerkmannsdorf, Deutschland" @click="currentImage" ref="galleryItems"><img src="assets/images/Fotografie/Bild19_17.06.2022.JPG" alt="Kleiner Fuchs (Schmetterling) auf in Blüte stehendem Buddleja-Ast."></div>
                    <div class="gallery-item blumen" data-index="42" data-caption="Hasenglöckchen 1: 06.05.2022, Großerkmannsdorf, Deutschland" @click="currentImage" ref="galleryItems"><img src="assets/images/Fotografie/Bild29_06.05.2022.JPG" alt="Blütenstaude von blauvioletten Hasenglöckchen."></div>
                    <div class="gallery-item blumen" data-index="43" data-caption="Hasenglöckchen 2: 06.05.2022, Großerkmannsdorf, Deutschland" @click="currentImage" ref="galleryItems"><img src="assets/images/Fotografie/Bild30_06.05.2022.JPG" alt="Blütenstand eines Hasenglöckchens mit Knospen und zwei geöffneten Blüten."></div>
                    <div class="gallery-item gruen" data-index="44" data-caption="Kolorado-Tanne: 08.01.2022, Großerkmannsdorf, Deutschland" @click="currentImage" ref="galleryItems"><img src="assets/images/Fotografie/Bild27_08.01.2022.JPG" alt="Schneebedeckte Spitze eines Astes der Kolorado-Tanne."></div>
                    <div class="gallery-item blumen" data-index="45" data-caption="Rose mit Regentropfen: 24.06.2022, Großerkmannsdorf, Deutschland" @click="currentImage" ref="galleryItems"><img src="assets/images/Fotografie/Bild52_24.06.2022.JPG" alt="Cremefarbene Rosenblüte mit Wassertropfen von der Seite."></div>
                    <div class="gallery-item gruen" data-index="46" data-caption="Buchsblättrige Strauchveronika: 19.12.2021, Großerkmannsdorf, Deutschland" @click="currentImage" ref="galleryItems"><img src="assets/images/Fotografie/Bild41_19.12.2021.JPG" alt="Einzelnde Äste einer nassen Buchsblättrigen Strauchveronika."></div>
                    <div class="gallery-item gruen" data-index="47" data-caption="Strauchveronika: 24.01.2022, Großerkmannsdorf, Deutschland" @click="currentImage" ref="galleryItems"><img src="assets/images/Fotografie/Bild44_24.01.2022.JPG" alt="Einzelne Äste einer Strauchveronika mit vielen spiegelnden Regentropfen."></div>
                    <div class="gallery-item gebaeude" data-index="48" data-caption="I'Park Mall: 11.03.2023, Seoul, Südkorea" @click="currentImage" ref="galleryItems"><img src="assets/images/Fotografie/Bild37_11.03.2023.jpg" alt="Blick auf Hochhäuser an einer Straße, die sich in der Mitte nach unten hin spiegeln."></div>
                    <div class="gallery-item blumen" data-index="49" data-caption="Rote Rose: 26.05.2023, Seoul, Südkorea" @click="currentImage" ref="galleryItems"><img src="assets/images/Fotografie/Bild46_26.05.2023.jpg" alt="Rote Rose im Vordergrund und pinkfarbene Rosen in Hintergrund, umgegen von Grün."></div>
                    <div class="gallery-item blumen" data-index="50" data-caption="Bartnelke: 18.06.2023, Großerkmannsdorf, Deutschland" @click="currentImage" ref="galleryItems"><img src="assets/images/Fotografie/Bild48_18.06.2023.JPG" alt="Einzelner Blütenkopf einer rosa Bartnelke auf der rechten Seite. Rest des Bildes grün."></div>                        
                    <div class="gallery-item fruechte" data-index="51" data-caption="Gemeiner Schneeball: 08.01.2022, Großerkmannsdorf, Deutschland" @click="currentImage" ref="galleryItems"><img src="assets/images/Fotografie/Bild53_08.01.2022.JPG" alt="Einzelne Traube von Gemeinem Schneeballfrüchten mit etwas Schnee."></div>
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
    </div>
</template>

<script setup>

import useScrollTop from '../../composables/useScrollTop'

const { topFunction } = useScrollTop({ buttonSelector: '#topBtn', footerSelector: '#footer', showAfter: 100 })

useHead({ title: 'ALLES KLARA. - Fotogalerie' })


import { ref, computed, onMounted, nextTick, onUnmounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const activeFilter = ref('allebilder')
const showLightbox = ref(false)
const currentLightboxIndex = ref(0)
const galleryItems = ref([])
const visibleItems = ref([])

const galleryItemRefs = ref([])

// Funktion zum Normalisieren von Filternamen (Umlaute behandeln)
const normalizeFilterName = (name) => {
  return name
    .toLowerCase()
    .replace(/ä/g, 'ae')
    .replace(/ö/g, 'oe')
    .replace(/ü/g, 'ue')
    .replace(/\s+/g, '')
}

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

// Filter-Funktionen
const filterGallery = (category, element) => {
  activeFilter.value = category
  
  const items = document.getElementsByClassName('gallery-item')
  
  if (category === 'allebilder') {
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
  
  updateVisibleItems()
  
  // Update URL parameter
  router.push({ 
    query: { 
      ...route.query, 
      filter: category === 'allebilder' ? undefined : category 
    } 
  })
}

const highlightFilter = (filter) => {
  const normalizedFilter = normalizeFilterName(filter)
  
  // Filter-Mapping für verschiedene Schreibweisen
  const filterMap = {
    'allebilder': 'allebilder',
    'blumen': 'blumen',
    'fruechte': 'fruechte',
    'fruekte': 'fruechte',
    'tiere': 'tiere',
    'gruen': 'gruen',
    'grün': 'gruen',
    'gebaeude': 'gebaeude',
    'gebäude': 'gebaeude'
  }
  
  const mappedFilter = filterMap[normalizedFilter] || filterMap[filter] || 'allebilder'
  
  // Direkt filterGallery aufrufen
  nextTick(() => {
    filterGallery(mappedFilter, null)
  })
}

// Lightbox-Funktionen
const currentImage = function(event) {
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

// Watch für URL-Änderungen (z.B. von Navigation)
watch(() => route.query.filter, (newFilter) => {
  if (newFilter) {
    highlightFilter(newFilter)
  } else {
    filterGallery('allebilder', null)
  }
})

// Expose Funktion für Header-Navigation
defineExpose({
  applyFilterFromNavigation
})
</script>

<style scoped> 
    #body-gallery {
        background-image: url('/images/geo_background.svg');
        position: relative;
    }
    .sidebar-gallery {
        grid-area: sidebar;
        margin-left: 50px;
        margin-top: 165px;
        margin-bottom: 10px;
    }
    .main-gallery {
        grid-area: main;
        border-left: 1px solid #1f1d60;
        margin-top: 165px;
    }
    .filter-list {
        position: sticky;
        top: 100px;
    }
    .filter-list ul {
        color: #1f1d60;
        list-style: none;
        margin: 0;
        padding: 0px;
        min-width: 12em;
    }
    .filter-list ul li {
        cursor: pointer;
        list-style: none;
        margin: 20px auto;
        padding: 5px 0px 5px 5px;
        font-size: 1.5em;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        width: 96%;
    }
    .filter-list li:hover {
        color: #804600;
    }

    .filter-list li.activegallery {
        background-color: #c3defa;
        color: #0e1754;
        border-radius: 10px;
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



    @media (max-width: 1374px) {
      .sidebar-gallery {
        /* display: none; */
        width: 100%;
        margin: 0;
        margin-top: 2em;
        border: none;
        text-align: center;
        position: static;
    }
    .main-gallery {
        width: 100%;
    }
    .sidebar-gallery.active {
        /* display: block; */
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .filter-list ul { 
        margin-left: 0;
    }
    .filter-list ul li {
        padding: 5px 0px 5px 0px;
        width: 96%;
    }
    .filter-list { 
        width: 100%;
    }
    #filter-options { 
        width: 100%;
    }
    }

    @media (max-width: 973px) {
    .container .box {
        flex-direction: column;
    }
    .container .box .image-column {
        width: 100%;
    }
}

    @media (max-width: 549px) {
        .container .headingportfolio {
        width: 80%;
    }
    .container .headingportfolio h3 {
        font-size: 15vw;
    }
    }
</style>