<script setup lang="ts">

import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { DRACOLoader } from "three/addons/loaders/DRACOLoader.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";


const canvas = document.querySelector("#experience-canvas") as HTMLCanvasElement | null;
const sizes = {
  height: window.innerHeight,
  width: window.innerWidth
}

const textureLoader = new THREE.TextureLoader();
const dracoLoader = new DRACOLoader();
dracoLoader.setDecoderPath('/draco/');

const loader = new GLTFLoader();
loader.setDRACOLoader(dracoLoader);

const textureMap = {
    Floor: textureLoader.load('/textures/Floor_baked4.jpg'),
}

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, sizes.width / sizes.height, 0.1, 1000 );
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer({ canvas: canvas ?? undefined, antialias: true });
renderer.setSize( sizes.width, sizes.height );
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));


const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );


const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;
controls.update();

window.addEventListener('resize', () => {
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

const render = () => {
    controls.update();
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render( scene, camera );

    window.requestAnimationFrame( render );
};

render();

</script>



<template>
  <div id="experience">
    <canvas class="experience-canvas" id="experience-canvas"></canvas>
  </div>
</template>


