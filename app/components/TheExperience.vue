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

    const linkUrl = resolveLinkFromObject(mesh)
    const clickableRoot = getClickableRoot(mesh)
const isSocialObject = Boolean(linkUrl)

if (isSocialObject && linkUrl && clickableRoot) {
      clickableRoot.userData.initialScale = clickableRoot.scale.clone()
      clickableRoot.userData.linkUrl = linkUrl
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
</script>


<template>
  <NuxtLink :to="{ path: '/' }" id="homebutton"><i class='fas fa-home' style="font-size: 30px"></i></NuxtLink>
  <div id="experience">
    <div v-if="!isModelLoaded" id="loading-screen">
      <div class="loading-text">Loading <div class="loader"></div></div>
    </div>

    <canvas ref="experience" id="experience-canvas"></canvas>
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
</style>