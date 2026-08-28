<script setup lang="ts">
import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  Color,
  AmbientLight,
  MeshPhysicalMaterial,
  Vector2,
  Raycaster,
  Mesh,
  Object3D,
} from 'three'
import { type Ref } from 'vue'
import { useWindowSize } from '@vueuse/core'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { DRACOLoader } from "three/addons/loaders/DRACOLoader.js";

let renderer: WebGLRenderer | null = null
let controls: OrbitControls | null = null
const experience: Ref<HTMLCanvasElement | null> = ref(null)

const { width, height } = useWindowSize()
const aspectRatio = computed(() => width.value / height.value)

const bgColor = new Color('#E1F0C2')
const scene = new Scene()
scene.background = bgColor

const camera = new PerspectiveCamera(75, aspectRatio.value, 0.1, 1000)
camera.position.set(10, 15, -15) // x (horizontal), y (vertical), z (aus Bildeschrim heraus)
scene.add(camera)

const ambientLight = new AmbientLight(0xffffff, 1)
scene.add(ambientLight)

const { baseURL } = useRuntimeConfig().app
const modelUrl = `${baseURL}models/Room_Portfolio.glb`
// const modelUrl = `models/Room_Portfolio.glb`

// const dracoLoader = new DRACOLoader()
// dracoLoader.setDecoderPath('/draco/')

const gltfLoader = new GLTFLoader()
// gltfLoader.setDRACOLoader(dracoLoader)

// Glasmaterial 
const glassMaterial = new MeshPhysicalMaterial({
  transmission: 1,
  opacity: 0.5, // 1
  color: 0xfbfbfb,
  metalness: 0,
  roughness: 0,
  ior: 3, // 1.5
  thickness: 0.01, //0.03
  // transparent: true,
  depthWrite: false,
  // color: 0x558bc8,
  // transparent: true,
  // opacity: 0.4,
  // depthWrite: false,
})

// Raycasting-Zustand
const raycaster = new Raycaster()
const pointer = new Vector2()
const raycastTargets: Object3D[] = []
const socialLinks: Record<string, string> = {
  TV: `${baseURL}portfolio#naturdoku`,
  PictureFrames: `${baseURL}kunst`,
  videoediting: `${baseURL}portfolio#videoschnitt`,
  vhs: `${baseURL}pearl#rundesObst`,
  game: `${baseURL}portfolio#game`,
  movieposter: `${baseURL}portfolio#filmplakat`,
  opening: `${baseURL}portfolio#vorspann`,
  animations: `${baseURL}animation#animationpractice`,
  cooking: `${baseURL}recipe_overview`,
  camera: `${baseURL}gallery`,
  animationcat: `${baseURL}animation#catouflage`,
  jewelry: `${baseURL}pearl#schmuck`,
}
const normalizedSocialLinks = Object.entries(socialLinks).map(([namePart, url]) => [
namePart.toLowerCase(),
url,
] as const)

function findLinkByName(name?: string | null) {
if (!name) return null
const normalizedName = name.toLowerCase()

for (const [namePart, url] of normalizedSocialLinks) {
if (normalizedName.includes(namePart)) {
return url
}
}

return null
}

function resolveLinkFromObject(start: Object3D | null | undefined) {
let current: Object3D | null | undefined = start

while (current) {
const url = findLinkByName(current.name)
if (url) return url
current = current.parent
}

return null
}

function getClickableRoot(start: Object3D | null | undefined) {
  let current: Object3D | null | undefined = start

  while (current?.parent) {
    const parentLink = findLinkByName(current.parent.name)
    if (parentLink) {
      current = current.parent
    } else {
      break
    }
  }

  return current
}

let hoveredObject: Object3D | null = null
const isModelLoaded = ref(false)

function openExternal(url: string) {
  const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
  if (newWindow) newWindow.opener = null
}

function setPointerFromMouse(event: MouseEvent) {
  if (!renderer) return
  const rect = renderer.domElement.getBoundingClientRect()
  pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1
  pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1
}

function setPointerFromTouch(event: TouchEvent) {
  if (!renderer) return

  const touch = event.touches.item(0)
  if (!touch) return

  const rect = renderer.domElement.getBoundingClientRect()
  pointer.x = ((touch.clientX - rect.left) / rect.width) * 2 - 1
  pointer.y = -((touch.clientY - rect.top) / rect.height) * 2 + 1
}

function updateHoverState() {
  raycaster.setFromCamera(pointer, camera)
  const hits = raycaster.intersectObjects(raycastTargets, true)

  const firstHit = hits[0]
  const nextHovered = getClickableRoot(firstHit?.object as Object3D | undefined)

  if (hoveredObject && hoveredObject !== nextHovered) {
    const previousInitialScale = hoveredObject.userData.initialScale as
      | { x: number; y: number; z: number }
      | undefined

    if (previousInitialScale) {
      hoveredObject.scale.copy(previousInitialScale)
    }
  }

  hoveredObject = nextHovered ?? null

  if (hoveredObject) {
    const initialScale = hoveredObject.userData.initialScale as
      | { x: number; y: number; z: number }
      | undefined

    if (initialScale) {
      hoveredObject.scale.set(
        initialScale.x * 1.15,
        initialScale.y * 1.15,
        initialScale.z * 1.15
      )
      document.body.style.cursor = 'pointer'
      return
    }
  }

  document.body.style.cursor = 'default'
}

function handleRaycastClick() {
  raycaster.setFromCamera(pointer, camera)
  const hits = raycaster.intersectObjects(raycastTargets, true)

  const firstHit = hits[0]
  if (!firstHit) return

  const obj = getClickableRoot(firstHit.object as Object3D | undefined)

  if (!obj) return

  // Prüfen, ob das Objekt ein Modal öffnen soll
  const modalName = findModalByName(obj.name)

  if (modalName) {
    openModal(modalName)
    return
  }

  const url = obj?.userData.linkUrl as string | undefined

if (url) {
  openExternal(url)
}

}

gltfLoader.load(modelUrl, (glb) => {
  glb.scene.traverse((child) => {
    const mesh = child as Mesh
    if (!mesh.isMesh) return

    // Fenster-Objekt mit Glasmaterial versehen:
    if (
      mesh.name.includes('Glass')
    ) {
      mesh.material = glassMaterial
    }

//     const linkUrl = resolveLinkFromObject(mesh)
//     const clickableRoot = getClickableRoot(mesh)
// const isSocialObject = Boolean(linkUrl)

// if (isSocialObject && linkUrl && clickableRoot) {
//       clickableRoot.userData.initialScale = clickableRoot.scale.clone()
//       clickableRoot.userData.linkUrl = linkUrl
//       raycastTargets.push(clickableRoot)
//     }

    const linkUrl = resolveLinkFromObject(mesh)
const clickableRoot = getClickableRoot(mesh)

const modalName = findModalByName(clickableRoot?.name)

if (clickableRoot && (linkUrl || modalName)) {
  clickableRoot.userData.initialScale = clickableRoot.scale.clone()

  if (linkUrl) {
    clickableRoot.userData.linkUrl = linkUrl
  }

  raycastTargets.push(clickableRoot)
}
  })

  scene.add(glb.scene)

  isModelLoaded.value = true

  controls?.target.set(0, 3.5, 0)
  controls?.update()
})

function updateCamera() {
  camera.aspect = aspectRatio.value
  camera.updateProjectionMatrix()
}

function updateRenderer() {
  if (!renderer) return
  renderer.setSize(width.value, height.value)
  renderer.render(scene, camera)
}

function setRenderer() {
  if (!experience.value) return

  renderer = new WebGLRenderer({ canvas: experience.value, antialias: true, alpha: true })
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

  controls = new OrbitControls(camera, renderer.domElement)
  controls.enableDamping = true

  renderer.domElement.addEventListener('mousemove', setPointerFromMouse)
  renderer.domElement.addEventListener('touchmove', setPointerFromTouch, { passive: true })
  renderer.domElement.addEventListener('click', handleRaycastClick)
  renderer.domElement.addEventListener('touchstart', setPointerFromTouch, { passive: true })
  renderer.domElement.addEventListener('touchend', handleRaycastClick)

  updateRenderer()
}

watch(aspectRatio, () => {
  updateCamera()
  updateRenderer()
})

let rafId = 0
const loop = () => {
  controls?.update()
  updateHoverState()
  updateRenderer()
  rafId = requestAnimationFrame(loop)
}

onMounted(() => {
  setRenderer()
  loop()
})

onUnmounted(() => {
  cancelAnimationFrame(rafId)
  if (renderer) {
    renderer.domElement.removeEventListener('mousemove', setPointerFromMouse)
    renderer.domElement.removeEventListener('touchmove', setPointerFromTouch)
    renderer.domElement.removeEventListener('click', handleRaycastClick)
    renderer.domElement.removeEventListener('touchstart', setPointerFromTouch)
    renderer.domElement.removeEventListener('touchend', handleRaycastClick)
    renderer.dispose()
  }
})


const activeModal = ref<string | null>(null)

function openModal(modalName: string) {
  activeModal.value = modalName
}

function closeModal() {
  activeModal.value = null
}

const modalObjects: Record<string, string> = {
  TV: 'tv',
  camera: 'camera',
  game: 'game',
  PictureFrames: 'pictureframes',
  videoediting: 'videoediting',
  vhs: 'vhs',
  movieposter: 'movieposter',
  opening: 'opening',
  animations: 'animations',
  cooking: 'cooking',
  animationcat: 'animationcat',
  jewelry: 'jewelry',
}

function findModalByName(name?: string | null) {
  if (!name) return null

  const normalizedName = name.toLowerCase()

  for (const [namePart, modalName] of Object.entries(modalObjects)) {
    if (normalizedName.includes(namePart.toLowerCase())) {
      return modalName
    }
  }

  return null
}
</script>


<template>
  <NuxtLink :to="{ path: '/' }" id="homebutton"><i class='fas fa-home' style="font-size: 30px"></i></NuxtLink>
  <div id="experience">
    <div v-if="!isModelLoaded" id="loading-screen">
      <div class="loading-text">Loading <div class="loader"></div></div>
    </div>

    <canvas ref="experience" id="experience-canvas"></canvas>

    <!-- Modal: TV -->
    <div
      v-if="activeModal === 'tv'"
      class="modal-overlay"
      @click.self="closeModal"
    >
      <div class="modal">
        <button class="modal-close" @click="closeModal">
          ×
        </button>

        <h2>Naturdokumentation</h2>
        <p>
          Bekomme Einblicke in die winzige Welt der Natur und erlebe sie aus vielen neuen Perspektiven.
        </p>
        <img src="assets/images/poster/Farbtakt_Poster.png" alt="">
        <NuxtLink :to="{ path: '/portfolio', hash: '#naturdoku' }" class="portfoliobutton" target="_blank"><i class="fa-solid fa-circle-chevron-right"></i></NuxtLink>
      </div>
    </div>


    <!-- Modal: Kamera -->
    <div
      v-if="activeModal === 'camera'"
      class="modal-overlay"
      @click.self="closeModal"
    >
      <div class="modal">
        <button class="modal-close" @click="closeModal">
          ×
        </button>

        <h2>Fotografie</h2>
        <p>
          Hier kannst du dir meine fotografischen Arbeiten anschauen.
        </p>

        <div class="image-grid">
          <div class="image-coloumn">
            <img src="assets/images/Fotografie/Bild4_29.07.23.JPG" alt="">
            <img src="assets/images/Fotografie/Bild33_16.09.2022.JPG" alt="">
          </div>
          <div class="image-coloumn">
            <img src="assets/images/Fotografie/Bild19_17.06.2022.JPG" alt="">
            <img src="assets/images/Fotografie/Bild46_26.05.2023.jpg" alt="">
          </div>
          <div class="image-coloumn">
            <img src="assets/images/Fotografie/Bild25_13.04.2023.jpg" alt="">
            <img src="assets/images/Fotografie/Bild52_24.06.2022.JPG" alt="">
          </div>
        </div>

        <NuxtLink :to="{ path: '/gallery' }" class="portfoliobutton" target="_blank"><i class="fa-solid fa-circle-chevron-right"></i></NuxtLink>
      </div>
    </div>


    <!-- Modal: Game -->
    <div
      v-if="activeModal === 'game'"
      class="modal-overlay"
      @click.self="closeModal"
    >
      <div class="modal">
        <button class="modal-close" @click="closeModal">
          ×
        </button>

        <h2>Game Development</h2>

        <p>
          Ein von mir und Kommilitonen entwickeltes Spiel, welches wir im Studium entwickelt haben.
        </p>

        <img src="assets/images/Game_Cover.png" alt="">

        <NuxtLink :to="{ path: '/portfolio', hash: '#game' }" class="portfoliobutton" target="_blank"><i class="fa-solid fa-circle-chevron-right"></i></NuxtLink>
      </div>
    </div>

    <!-- Modal: Cooking -->
    <div
      v-if="activeModal === 'cooking'"
      class="modal-overlay"
      @click.self="closeModal"
    >
      <div class="modal">
        <button class="modal-close" @click="closeModal">
          ×
        </button>

        <h2>Rezepte</h2>

        <p>
          Ich koche und backe gerne in meiner Freizeit. Hier findest du einige meiner Rezepte, die ich gerne teile.
        </p>

        <div class="small-image-grid">
          <img src="/images/recipes/Japchae.jpeg" alt="">
          <img src="/images/recipes/Kartoffelsalat.jpeg" alt="">
          <img src="/images/recipes/Wurstgulasch_1.jpeg" alt="">
        </div>        

        <NuxtLink :to="{ path: '/recipe_overview' }" class="portfoliobutton" target="_blank"><i class="fa-solid fa-circle-chevron-right"></i></NuxtLink>
      </div>
    </div>

    <!-- Modal: pearl Schmuck -->
    <div
      v-if="activeModal === 'jewelry'"
      class="modal-overlay"
      @click.self="closeModal"
    >
      <div class="modal">
        <button class="modal-close" @click="closeModal">
          ×
        </button>

        <h2>Pearl Schmuck</h2>

        <p>
          Werbevideo für die imaginäre Schmuckmarke Pearl. Eins der ersten Projekte im Studium.
        </p>

        <img src="assets/images/poster/Pearl-Schmuck_Poster.png" alt="">    

        <NuxtLink :to="{ path: '/pearl', hash: '#schmuck' }" class="portfoliobutton" target="_blank"><i class="fa-solid fa-circle-chevron-right"></i></NuxtLink>
      </div>
    </div>

    <!-- Modal: pearl Obst -->
    <div
      v-if="activeModal === 'vhs'"
      class="modal-overlay"
      @click.self="closeModal"
    >
      <div class="modal">
        <button class="modal-close" @click="closeModal">
          ×
        </button>

        <h2>Pearl Rundes Obst</h2>

        <p>
          Werbevideo für die imaginäre Obstmarke Pearl, die nur rundes Obst verkauft. Das Setting spielt in den 50er/60er Jahren.
        </p>

        <img src="assets/images/poster/Pearl-rundes_Obst_Poster.png" alt="">    

        <NuxtLink :to="{ path: '/pearl', hash: '#rundesObst' }" class="portfoliobutton" target="_blank"><i class="fa-solid fa-circle-chevron-right"></i></NuxtLink>
      </div>
    </div>

    <!-- Modal: opening/DVD -->
    <div
      v-if="activeModal === 'opening'"
      class="modal-overlay"
      @click.self="closeModal"
    >
      <div class="modal">
        <button class="modal-close" @click="closeModal">
          ×
        </button>

        <h2>Vorspann</h2>

        <p>
          Ein Vorspann für einen imaginären Film, um die Kriterien dafür kennenzulernen.
        </p>

        <img src="assets/images/poster/Vorspann_Poster.jpeg" alt="">    

        <NuxtLink :to="{ path: '/portfolio', hash: '#vorspann' }" class="portfoliobutton" target="_blank"><i class="fa-solid fa-circle-chevron-right"></i></NuxtLink>
      </div>
    </div>

    <!-- Modal: Kunst -->
    <div
      v-if="activeModal === 'pictureframes'"
      class="modal-overlay"
      @click.self="closeModal"
    >
      <div class="modal">
        <button class="modal-close" @click="closeModal">
          ×
        </button>

        <h2>Kunst</h2>

        <p>
          In meiner Freizeit betätige ich mich gerne kreativ. Hier findest du einige meiner Werke. Auch paar, die während meines Studiums entstanden sind
        </p>

        <div class="image-grid">
          <div class="image-coloumn">
            <img src="/images/art/Bild2_Holzschnitt.jpg" alt="">
            <img src="/images/art/Bild8_Selbststudium.jpg" alt="">
          </div>
          <div class="image-coloumn">
            <img src="/images/art/Bild15_Selbststudium.jpg" alt="">
            <img src="/images/art/Bild23_Naturstudium(2).jpg" alt="">
          </div>
          <div class="image-coloumn">
            <img src="/images/art/Bild31_Selbststudium.jpg" alt="">
            <img src="/images/art/Bild37_Selbststudium.png" alt="">
          </div>
        </div>

        <NuxtLink :to="{ path: '/kunst' }" class="portfoliobutton" target="_blank"><i class="fa-solid fa-circle-chevron-right"></i></NuxtLink>
      </div>
    </div>

    <!-- Modal: Katzenanimation -->
    <div
      v-if="activeModal === 'animationcat'"
      class="modal-overlay"
      @click.self="closeModal"
    >
      <div class="modal">
        <button class="modal-close" @click="closeModal">
          ×
        </button>

        <h2>Katzenanimation Catouflage</h2>

        <p>
          Ein Projekt aus dem Studium ist auch dieser kleine Animationsfilm. 
        </p>

        <img src="assets/images/poster/Catouflage_Poster2.png" alt="Katzenanimation Catouflage">

        <NuxtLink :to="{ path: '/animation', hash: '#catouflage' }" class="portfoliobutton" target="_blank"><i class="fa-solid fa-circle-chevron-right"></i></NuxtLink>
      </div>
    </div>

    <!-- Modal: Animationsübungen -->
    <div
      v-if="activeModal === 'animations'"
      class="modal-overlay"
      @click.self="closeModal"
    >
      <div class="modal">
        <button class="modal-close" @click="closeModal">
          ×
        </button>

        <h2>Animationsübungen</h2>

        <p>
          Um Animationstechniken näher kennen zulernen, habe ich einige kleine Übungen erarbeitet 
        </p>

        <div class="small-image-grid">
        <img src="/assets/images/poster/bouncingBall_Poster.png" alt="Katzenanimation Catouflage">
        <img src="/assets/images/poster/Morphaufgabe_poster.png" alt="Katzenanimation Catouflage">
        <img src="/assets/images/poster/walking_Poster.png" alt="Katzenanimation Catouflage">
        </div>

        <NuxtLink :to="{ path: '/animation', hash: '#animationpractice' }" class="portfoliobutton" target="_blank"><i class="fa-solid fa-circle-chevron-right"></i></NuxtLink>
      </div>
    </div>

    <!-- Modal: Videoschnitt -->
    <div
      v-if="activeModal === 'videoediting'"
      class="modal-overlay"
      @click.self="closeModal"
    >
      <div class="modal">
        <button class="modal-close" @click="closeModal">
          ×
        </button>

        <h2>Videoschnitt</h2>

        <p>
          Eins der ersten Projekte im Studium war einen Film zu drehen, der bestimmte Kameraeinstellungen beinhaltete und diesen dann zu schneiden. Hier ist das Ergebnis.
        </p>

        <img src="/assets/images/poster/Videoschnitt_Poster.png" alt="Katzenanimation Catouflage">

        <NuxtLink :to="{ path: '/portfolio', hash: '#videoschnitt' }" class="portfoliobutton" target="_blank"><i class="fa-solid fa-circle-chevron-right"></i></NuxtLink>
      </div>
    </div>

     <!-- Modal: Filmposter -->
    <div
      v-if="activeModal === 'movieposter'"
      class="modal-overlay"
      @click.self="closeModal"
    >
      <div class="modal">
        <button class="modal-close" @click="closeModal">
          ×
        </button>

        <h2>Filmposter</h2>
        <p>
          Ebenso war eine Aufgabe im Studium, ein Filmposter zu gestalten. Ich habe mich für eine Adaption des Filmposters von "Bohemian Rhapsody" entschieden.
        </p>
        <img src="/assets/images/Filmplakat.png" alt="" class="portrait">
        <NuxtLink :to="{ path: '/portfolio', hash: '#filmplakat' }" class="portfoliobutton" target="_blank"><i class="fa-solid fa-circle-chevron-right"></i></NuxtLink>
      </div>
    </div>

  </div>
</template>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

#experience {
    position: fixed;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    overflow: hidden;
}

#experience-canvas {
    width: 100%;
    height: 100%;
}

#loading-screen {
  position: absolute;
  inset: 0;
  z-index: 2000;
  display: grid;
  place-items: center;
  background: #e1f0c2;
}

.loading-text {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 50px;
  color: #5e8d3b;
}

#homebutton {
    position: fixed;
    bottom: 40px;
    left: 40px;
    z-index: 1000;
    text-decoration: none;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 25px;
    background-color: #a5b575;
    color: #5e8d3b;
    padding: 10px 20px;
    border-radius: 5px;
}
#homebutton:hover {
    background-color: #bac793;
}

.loader {
  width: 40px;
  aspect-ratio: 2;
  --_g: no-repeat radial-gradient(circle closest-side,#5e8d3b 90%,#5f8d3b00);
  background: 
    var(--_g) 0%   50%,
    var(--_g) 50%  50%,
    var(--_g) 100% 50%;
  background-size: calc(100%/3) 50%;
  animation: l3 1s infinite linear;
  display: inline-block;
}
@keyframes l3 {
    20%{background-position:0%   0%, 50%  50%,100%  50%}
    40%{background-position:0% 100%, 50%   0%,100%  50%}
    60%{background-position:0%  50%, 50% 100%,100%   0%}
    80%{background-position:0%  50%, 50%  50%,100% 100%}
}



.modal-overlay {
  position: fixed;
  inset: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  background: rgba(0, 0, 0, 0.4);

  z-index: 1000;
}

.modal {
  position: relative;

  width: min(600px, 90vw);
  padding: 2rem;

  background: rgb(233, 249, 217);
  border-radius: 1rem;
  border: 5px solid #8cb969;

  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  gap: 1rem;

  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: #36401f;
}

.modal-close {
  position: absolute;
  top: 0.75rem;
  right: 1rem;

  border: none;
  background: none;

  font-size: 2rem;
  cursor: pointer;
}
.modal-close:hover {
  color: #c43030;
}

.modal h2 {
  margin: 0;
  font-size: 1.5rem;
}
.modal img {
  border-radius: 1rem;
  width: 100%;
  height: auto;
  /* border: 2px solid #8cb969; */
}
.modal img.portrait {
  /* width: auto;
  max-height: 60vh;
  max-width: 100%; */
  /* width: 50%; */
  max-height: 50vh;
  width: auto;
  align-self: center;
}

.portfoliobutton {
  /* background-color: #a5b575; */
  padding: 10px 10px;
  border-radius: 10px;
  /* width: 40px; */
  width: 10%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  align-self: center;
}
.portfoliobutton i {
  color: #5e8d3b;
  font-size: 30px;
}
.portfoliobutton:hover {
  background-color: #bac793;
}
.image-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 10px;
}
.image-grid img {
  width: 100%;
  height: auto;
  border-radius: 10px;
}

.image-grid {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.image-grid .image-column {
    display: flex;
    flex-direction: column;
    width: 32.5%;
}

.image-grid .image-column img {
    width: 100%;
    border-radius: 10px;
    height: auto;
    /* transition: transform 0.3s ease; */
}

.small-image-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 10px;
}
.small-image-grid img {
  width: 100%;
  height: auto;
  border-radius: 10px;
}
</style>