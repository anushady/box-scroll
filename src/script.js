import "./style.css";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { AmbientLight } from "three";

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

// var loader = new GLTFLoader();
// var obj;
// loader.load(
//   // resource URL
//   "box.glb",
//   // called when the resourc ce is loaded
//   function (gltf) {
//     obj = gltf.scene;
//     scene.add(obj);
//     obj.scale.set(1, 1, 1);
//     obj.rotation.set(0, 0, 0);
//     obj.position.set(0, 0, 0);
//   }
// );
// Lights

const cube = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshStandardMaterial(0xffffff);
const obj = new THREE.Mesh(cube, material);
scene.add(obj);

const pointLight = new THREE.PointLight(0xffffff, 0.3);
pointLight.position.x = 2;
pointLight.position.y = -3;
pointLight.position.z = -4;
scene.add(pointLight);
const pointLight2 = new THREE.PointLight(0xffffff, 0.3);
pointLight2.position.x = -2;
pointLight2.position.y = -3;
pointLight2.position.z = 4;
scene.add(pointLight2);
const pointLight3 = new THREE.PointLight(0xffffff, 0.3);
pointLight3.position.x = 2;
pointLight3.position.y = 3;
pointLight3.position.z = -4;
scene.add(pointLight3);
const pointLight4 = new THREE.PointLight(0xffffff, 0.3);
pointLight4.position.x = -2;
pointLight4.position.y = 3;
pointLight4.position.z = 4;
scene.add(pointLight4);

const ambLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambLight);
/**
 * Sizes
 */
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

window.addEventListener("resize", () => {
  // Update sizes
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  // Update camera
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

  // Update renderer
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(
  45,
  sizes.width / sizes.height,
  0.1,
  100
);
camera.position.x = 0;
camera.position.y = 0;
camera.position.z = 4;
scene.add(camera);

// Controls
// const controls = new OrbitControls(camera, canvas)
// controls.enableDamping = true

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  antialias: true,
  alpha: true,
});
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
const updateOnScroll = (event) => {
  obj.rotation.y = window.scrollY * 0.00251;

  //obj2.position.z = window.scrollY *.001
};
window.addEventListener("scroll", updateOnScroll);
/**
 * Animate
 */

const clock = new THREE.Clock();

const tick = () => {
  const elapsedTime = clock.getElapsedTime();

  // Update objects
  //if (obj) obj.rotation.y = 0.5 * elapsedTime;

  // Update Orbital Controls
  // controls.update()

  // Render
  renderer.render(scene, camera);

  // Call tick again on the next frame
  window.requestAnimationFrame(tick);
};

tick();
