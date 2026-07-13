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

// const dracoLoader = new DRACOLoader()
// dracoLoader.setDecoderPath('/draco/')

const gltfLoader = new GLTFLoader()
// gltfLoader.setDRACOLoader(dracoLoader)

// Glasmaterial (wie in deinem main.js-Ansatz)
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
const raycastTargets: Mesh[] = []
const socialLinks: Record<string, string> = {
  TV: 'https://github.com/andrewwoan/sooahkimsfolio',
  PictureFrame: 'https://youtu.be/AB6sulUMRGE',
}
let hoveredObject: Mesh | null = null

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
  const hits = raycaster.intersectObjects(raycastTargets, false)

  const firstHit = hits[0]
  const nextHovered = (firstHit?.object as Mesh | undefined) ?? null

  if (hoveredObject && hoveredObject !== nextHovered) {
    const previousInitialScale = hoveredObject.userData.initialScale
    if (previousInitialScale) {
      hoveredObject.scale.copy(previousInitialScale)
    }
  }

  hoveredObject = nextHovered ?? null

  if (hoveredObject) {
    const initialScale = hoveredObject.userData.initialScale
    if (initialScale) {
      hoveredObject.scale.set(initialScale.x * 1.15, initialScale.y * 1.15, initialScale.z * 1.15)
      document.body.style.cursor = 'pointer'
      return
    }
  }

  document.body.style.cursor = 'default'
}

function handleRaycastClick() {
  raycaster.setFromCamera(pointer, camera)
  const hits = raycaster.intersectObjects(raycastTargets, false)

  const firstHit = hits[0]
  if (!firstHit) return

  const obj = firstHit.object as Mesh

  for (const [namePart, url] of Object.entries(socialLinks)) {
    if (obj.name.includes(namePart)) {
      openExternal(url)
      return
    }
  }
}

const modelUrl = new URL('models/Room_Portfolio.glb', import.meta.env.BASE_URL).toString()
gltfLoader.load(modelUrl, (glb) => {
  glb.scene.traverse((child) => {
    const mesh = child as Mesh
    if (!mesh.isMesh) return

    // Fenster-Objekt mit Glasmaterial versehen:
    // Passe die Namensprüfung an den exakten Mesh-Namen in deinem Modell an.
    if (
      // mesh.name.includes('Window') ||
      // mesh.name.includes('Fenster') ||
      mesh.name.includes('Glass')
    ) {
      mesh.material = glassMaterial
    }

    // Klickbare / hoverbare Objekte definieren
    const isSocialObject = Object.keys(socialLinks).some((key) =>
      mesh.name.includes(key)
    )

    if (isSocialObject) {
      mesh.userData.initialScale = mesh.scale.clone()
      raycastTargets.push(mesh)
    }
  })

  scene.add(glb.scene)

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
  <div id="experience">
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
</style>



<!-- <script setup lang="ts">
import {Scene, PerspectiveCamera, Mesh, SphereGeometry, MeshBasicMaterial, WebGLRenderer} from 'three';
import type { Ref } from 'vue';
import { useWindowSize } from '@vueuse/core';

// import * as THREE from 'three';
// THREE.Scene = Scene;
let renderer: WebGLRenderer;
const experience: Ref<HTMLCanvasElement | null> = ref(null);

const { width, height } = useWindowSize();
const aspectRatio = computed(() => width.value / height.value);

const scene = new Scene();

// const width = 800;
// const height = 600;

// const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const camera = new PerspectiveCamera(75, aspectRatio.value, 0.1, 1000);
camera.position.set(0, 0, 2);

scene.add(camera);

const sphere = new Mesh(
    new SphereGeometry(1, 32, 32),
    new MeshBasicMaterial({color: 0x008080})
);
scene.add(sphere);
function updateCamera() {
    camera.aspect = aspectRatio.value;
    camera.updateProjectionMatrix();
}

function updateRenderer() {
    if (!renderer) return;
    renderer.setSize(width.value, height.value)
    renderer.render(scene, camera)
}

function setRenderer() {
    if(experience.value) {
        renderer = new WebGLRenderer({ canvas: experience.value });
        updateRenderer();
    }
}

watch(aspectRatio, () => {
    updateCamera();
    updateRenderer();
});

onMounted (() => {
    setRenderer();
    loop();
});

const loop = () => {
    sphere.position.x += 0.01;
    renderer.render(scene, camera);
    requestAnimationFrame(loop);
};

loop();
</script>

<template>
  <div>
    <canvas ref="experience" />
  </div>
</template> -->