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
// var obj1;
// loader.load(
//   // resource URL
//   "box.glb",
//   // called when the resourc ce is loaded
//   function (gltf) {
//     obj1 = gltf.scene;
//     scene.add(obj1);
//     obj1.scale.set(1, 1, 1);
//     obj1.rotation.set(0, 0, 0);
//     obj1.position.set(0, 0, 0);
//   }
// );
// Lights

const obj = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshStandardMaterial(0xffffff);
const obj1 = new THREE.Mesh(obj, material);
obj1.position.set(3, 0, 0);

scene.add(obj1);

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

//play ground

function lerp(x, y, a) {
  return (1 - a) * x + a * y;
}
// Used to fit the lerps to start and end at specific scrolling percentages
function scalePercent(start, end) {
  return (scrollPercent - start) / (end - start);
}
var animationScripts = [];

//add an animation that moves the obj1 through first 40 percent of scroll
animationScripts.push({
  start: 0,
  end: 20,
  func: function () {
    camera.lookAt(obj1.position);
    camera.position.set(0, 0, 4);
    //camera.lookAt(obj1.position);
    //obj1.position.set(2, 0, 0);
    //obj1.position.x = lerp(0, 0, scalePercent(0, 20));
    obj1.rotation.y = lerp(0, Math.PI, scalePercent(0, 20));
    console.log(obj1.position.z);
  },
});

//add an animation that rotates the obj1 between 40-60 percent of scroll
animationScripts.push({
  start: 20,
  end: 100,
  func: function () {
    camera.lookAt(obj1.position);
    camera.position.set(0, 0, 4);

    obj1.rotation.y = lerp(0, 4 * Math.PI, scalePercent(20, 100));
    //console.log(obj1.rotation.z)
  },
});

function playScrollAnimations() {
  animationScripts.forEach(function (a) {
    if (scrollPercent >= a.start && scrollPercent < a.end) {
      a.func();
    }
  });
}

var scrollPercent = 0;
document.body.onscroll = function () {
  //calculate the current scroll progress as a percentage
  scrollPercent =
    ((document.documentElement.scrollTop || document.body.scrollTop) /
      ((document.documentElement.scrollHeight || document.body.scrollHeight) -
        document.documentElement.clientHeight)) *
    100;
  document.getElementById("scrollProgress").innerText =
    "Scroll Progress : " + scrollPercent.toFixed(2);
};
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
// const updateOnScroll = (event) => {
//   obj1.rotation.y = window.scrollY * 0.00755;

//   //obj12.position.z = window.scrollY *.001
// };
// window.addEventListener("scroll", updateOnScroll);
/**
 * Animate
 */

const clock = new THREE.Clock();

const tick = () => {
  const elapsedTime = clock.getElapsedTime();

  playScrollAnimations();
  // Update obj1ects
  //if (obj1) obj1.rotation.y = 0.5 * elapsedTime;

  // Update Orbital Controls
  // controls.update()

  // Render
  renderer.render(scene, camera);

  // Call tick again on the next frame
  window.requestAnimationFrame(tick);
};
window.scrollTo({ top: 0, behavior: "smooth" });

tick();
