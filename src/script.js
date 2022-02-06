import "./style.css";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { AmbientLight, Mesh, WireframeGeometry } from "three";
import { OutlineEffect } from "three/examples/jsm/effects/OutlineEffect.js";

// Canvas
const canvas = document.querySelector("canvas.webgl");
let effect;
// Scene
const scene = new THREE.Scene();
//scene.background = new THREE.Color(0x444488);
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

// const obj = new THREE.BoxGeometry(1, 1, 1);
// const material = new THREE.MeshToonMaterial({
//   color: 0xff0000,

//   //emmisive: 0x000000,
//   //vertexColors: true,
//   //side: THREE.FrontSide,
//   //shininess: 100,
//   //specular: 0xffffff,
// });
// const obj1 = new THREE.Mesh(obj, material);
// obj1.position.set(1.3, 0, 0);
// obj1.rotation.set(Math.PI / 8, 0, 0);

// scene.add(obj1);

// const pointLight = new THREE.PointLight(0xffffff, 0.5);
// pointLight.position.x = 2;
// pointLight.position.y = -3;
// pointLight.position.z = -4;
// scene.add(pointLight);
// const pointLight2 = new THREE.PointLight(0xffffff, 0.6);
// pointLight2.position.x = -2;
// pointLight2.position.y = -3;
// pointLight2.position.z = 4;
// scene.add(pointLight2);
// const pointLight3 = new THREE.PointLight(0xffffff, 0.5);
// pointLight3.position.x = 2;
// pointLight3.position.y = 3;
// pointLight3.position.z = -4;
// scene.add(pointLight3);
// const pointLight4 = new THREE.PointLight(0xffffff, 0.5);
// pointLight4.position.x = -2;
// pointLight4.position.y = 3;
// pointLight4.position.z = 4;
// scene.add(pointLight4);

// const ambLight = new THREE.AmbientLight(0xffffff, 0.5);
// scene.add(ambLight);

scene.add(new THREE.AmbientLight(0x444444));

const light1 = new THREE.DirectionalLight(0xffffff, 0.5);
light1.position.set(1, 1, 1);
scene.add(light1);

const light2 = new THREE.DirectionalLight(0xffffff, 1.5);
light2.position.set(0, -1, 0);
scene.add(light2);

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
  75,
  sizes.width / sizes.height,
  0.1,
  10000
);
camera.position.x = 0;
camera.position.y = 0;
camera.position.z = 1300;
//camera.lookAt(0);
scene.add(camera);

// Controls
//const controls = new OrbitControls(camera, canvas);
//controls.enableDamping = true;

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
    //camera.lookAt(obj1.position);
    mesh.position.x = lerp(900, 0, scalePercent(0, 20));
    //material.color = 0xff0000;
    //camera.position.set(0, 1, 2);
    //obj1.position.z = lerp(-5, 0, scalePercent(0, 40));
    //console.log(cube.position.z)
  },
});

//add an animation that rotates the obj1 between 40-60 percent of scroll
animationScripts.push({
  start: 20,
  end: 100,
  func: function () {
    material.color.set(0xffffff);
    //camera.lookAt(obj1.position);
    //camera.position.set(0, 1, 2);
    mesh.rotation.y = lerp(0, 4 * Math.PI, scalePercent(20, 100));
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
renderer.outputEncoding = THREE.sRGBEncoding;

/**
 * Animate
 *
 *
 *
 *
 *
 *
 *
 */

const triangles = 300000;

const geometry = new THREE.BufferGeometry();

const positions = [];
const normals = [];
const colors = [];

const color = new THREE.Color();

const n = 800,
  n2 = n / 2; // triangles spread in the cube
const d = 12,
  d2 = d / 2; // individual triangle size

const pA = new THREE.Vector3();
const pB = new THREE.Vector3();
const pC = new THREE.Vector3();

const cb = new THREE.Vector3();
const ab = new THREE.Vector3();

for (let i = 0; i < triangles; i++) {
  // positions

  const x = Math.random() * n - n2;
  const y = Math.random() * n - n2;
  const z = Math.random() * n - n2;

  const ax = x + Math.random() * d - d2;
  const ay = y + Math.random() * d - d2;
  const az = z + Math.random() * d - d2;

  const bx = x + Math.random() * d - d2;
  const by = y + Math.random() * d - d2;
  const bz = z + Math.random() * d - d2;

  const cx = x + Math.random() * d - d2;
  const cy = y + Math.random() * d - d2;
  const cz = z + Math.random() * d - d2;

  positions.push(ax, ay, az);
  positions.push(bx, by, bz);
  positions.push(cx, cy, cz);

  // flat face normals

  pA.set(ax, ay, az);
  pB.set(bx, by, bz);
  pC.set(cx, cy, cz);

  cb.subVectors(pC, pB);
  ab.subVectors(pA, pB);
  cb.cross(ab);

  cb.normalize();

  const nx = cb.x;
  const ny = cb.y;
  const nz = cb.z;

  normals.push(nx * 32767, ny * 32767, nz * 32767);
  normals.push(nx * 32767, ny * 32767, nz * 32767);
  normals.push(nx * 32767, ny * 32767, nz * 32767);

  // colors

  const vx = x / n + 0.5;
  const vy = y / n + 0.5;
  const vz = z / n + 0.5;

  color.setRGB(vx, vy, vz);

  colors.push(color.r * 255, color.g * 255, color.b * 255);
  colors.push(color.r * 255, color.g * 255, color.b * 255);
  colors.push(color.r * 255, color.g * 255, color.b * 255);
}

const positionAttribute = new THREE.Float32BufferAttribute(positions, 3);
const normalAttribute = new THREE.Int16BufferAttribute(normals, 3);
const colorAttribute = new THREE.Uint8BufferAttribute(colors, 3);

normalAttribute.normalized = true; // this will map the buffer values to 0.0f - +1.0f in the shader
colorAttribute.normalized = true;

geometry.setAttribute("position", positionAttribute);
geometry.setAttribute("normal", normalAttribute);
geometry.setAttribute("color", colorAttribute);

geometry.computeBoundingSphere();

const material = new THREE.MeshPhongMaterial({
  color: 0x000000,
  specular: 0xffffff,
  shininess: 250,
  side: THREE.DoubleSide,
  vertexColors: false,
});

const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// const cubeWidth = 400;
// const numberOfSphersPerSide = 5;
// const sphereRadius = (cubeWidth / numberOfSphersPerSide) * 1.7 * 0.5;
// const stepSize = 1.0 / numberOfSphersPerSide;
// const format = renderer.capabilities.isWebGL2
//   ? THREE.RedFormat
//   : THREE.LuminanceFormat;

// const geometry = new THREE.BoxGeometry(
//   sphereRadius,
//   sphereRadius,
//   sphereRadius
// );
// var colors;
// for (
//   let alpha = 0, alphaIndex = 0;
//   alpha <= 1.0;
//   alpha += stepSize, alphaIndex++
// ) {
//   colors = new Uint8Array(alphaIndex + 2);
// }
// const gradientMap = new THREE.DataTexture(colors, colors.length, 1, format);
// gradientMap.needsUpdate = true;

// const material = new THREE.MeshToonMaterial({
//   color: "blue",
//   gradientMap: gradientMap,
// });

// var mesh = new THREE.Mesh(geometry, material);

// mesh.position.x = 400 - 200;
// mesh.position.y = 400 - 200;
// mesh.position.z = 400 - 200;
// scene.add(mesh);

// for (
//   let alpha = 0, alphaIndex = 0;
//   alpha <= 1.0;
//   alpha += stepSize, alphaIndex++
// ) {
//   const colors = new Uint8Array(alphaIndex + 2);

//   for (let c = 0; c <= colors.length; c++) {
//     colors[c] = (c / colors.length) * 256;
//   }

//   const gradientMap = new THREE.DataTexture(colors, colors.length, 1, format);
//   gradientMap.needsUpdate = true;
//   var mesh;
//   for (let beta = 0; beta <= 1.0; beta += stepSize) {
//     for (let gamma = 0; gamma <= 1.0; gamma += stepSize) {
//       // basic monochromatic energy preservation
//       const diffuseColor = new THREE.Color()
//         .setHSL(alpha, 0.5, gamma * 0.5 + 0.1)
//         .multiplyScalar(1 - beta * 0.2);

//       const material = new THREE.MeshToonMaterial({
//         color: diffuseColor,
//         gradientMap: gradientMap,
//       });

//       var mesh = new THREE.Mesh(geometry, material);

//       mesh.position.x = alpha * 400 - 200;
//       mesh.position.y = beta * 400 - 200;
//       mesh.position.z = gamma * 400 - 200;
//       scene.add(mesh);
//     }
//   }
// }

effect = new OutlineEffect(renderer);

// const updateOnScroll = (event) => {
//   mesh.rotation.y = window.scrollY * 0.01;

//   //obj12.position.z = window.scrollY *.001
// };
// window.addEventListener("scroll", updateOnScroll);

const clock = new THREE.Clock();

const tick = () => {
  const elapsedTime = clock.getElapsedTime();

  playScrollAnimations();
  // Update obj1ects
  //if (obj1) obj1.rotation.y = 0.5 * elapsedTime;

  // Update Orbital Controls
  //controls.update();

  // Render
  effect.render(scene, camera);

  // Call tick again on the next frame
  window.requestAnimationFrame(tick);
};
window.scrollTo({ top: 0, behavior: "smooth" });

tick();
