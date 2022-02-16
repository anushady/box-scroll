import "./style.css";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { AmbientLight, Mesh, WireframeGeometry } from "three";
import { OutlineEffect } from "three/examples/jsm/effects/OutlineEffect.js";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass.js";
import { OutlinePass } from "three/examples/jsm/postprocessing/OutlinePass.js";
import { FXAAShader } from "three/examples/jsm/shaders/FXAAShader.js";
// GSAP MENU

var tl = gsap.timeline({
  paused: "true",
});
tl.to(".menu", {
  duration: 1,
  x: "0%",
  //ease: EXPO.easeInOut,
});
tl.fromTo(
  ".li",
  {
    y: "-100%",
    opacity: 0,
  },
  {
    duration: 0.3,
    opacity: 1,
    y: "0%",
    stagger: 0.15,
  }
);
tl.fromTo(
  ".social-li",
  {
    y: "-50%",
    opacity: 0,
  },
  {
    duration: 0.3,
    opacity: 1,
    stagger: 0.15,
    //ease: EXPO.easeOut,
  },
  "-=0.5"
);

var sc = document.querySelector(".button");
var xc = document.querySelector(".menu");

sc.addEventListener("click", toggle);

xc.addEventListener("click", togglec);

function toggle() {
  tl.play();
}
function togglec() {
  tl.reverse();
}

// gsap

let tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".sect1",
  },
});

tl2.from("#sect1h1", { x: -200, opacity: 0.6, duration: 1 });
tl2.from("#sect1h2", { x: 200, opacity: 0, duration: 1 }, "-=0.4");
tl2.from("#a11", { x: 200, opacity: 0, duration: 1 }, "-=0.4");
tl2.from("#a12", { x: 200, opacity: 0, duration: 1 }, "-=0.4");
tl2.from("#a13", { x: 200, opacity: 0, duration: 1 }, "-=0.4");
tl2.from("#a14", { x: 200, opacity: 0, duration: 1 }, "-=0.4");
tl2.from("#a15", { x: 200, opacity: 0, duration: 1 }, "-=0.4");
tl2.from("#a16", { x: 200, opacity: 0, duration: 1 }, "-=0.4");

let tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".sect2",
  },
});

tl3.from("#sect2h1", { x: -200, opacity: 0.6, duration: 1 });
tl3.from("#sect2h2", { x: 200, opacity: 0, duration: 1 }, "-=0.4");
tl3.from("#b11", { x: 200, opacity: 0, duration: 1 }, "-=0.4");
tl3.from("#b12", { x: 200, opacity: 0, duration: 1 }, "-=0.4");
tl3.from("#b13", { x: 200, opacity: 0, duration: 1 }, "-=0.4");
tl3.from("#b14", { x: 200, opacity: 0, duration: 1 }, "-=0.4");
tl3.from("#b15", { x: 200, opacity: 0, duration: 1 }, "-=0.4");
tl3.from("#b16", { x: 200, opacity: 0, duration: 1 }, "-=0.4");

let tl4 = gsap.timeline({
  scrollTrigger: {
    trigger: ".sect3",
  },
});

tl4.from("#sect3h1", { x: -200, opacity: 0.6, duration: 1 });
tl4.from("#sect3h2", { x: 200, opacity: 0, duration: 1 }, "-=0.4");
tl4.from("#c11", { x: 200, opacity: 0, duration: 1 }, "-=0.4");
tl4.from("#c12", { x: 200, opacity: 0, duration: 1 }, "-=0.4");
tl4.from("#c13", { x: 200, opacity: 0, duration: 1 }, "-=0.4");
tl4.from("#c14", { x: 200, opacity: 0, duration: 1 }, "-=0.4");
tl4.from("#c15", { x: 200, opacity: 0, duration: 1 }, "-=0.4");
tl4.from("#c16", { x: 200, opacity: 0, duration: 1 }, "-=0.4");

let tl5 = gsap.timeline({
  scrollTrigger: {
    trigger: ".sect4",
  },
});

tl5.from("#sect4h1", { x: -200, opacity: 0.6, duration: 1 });
tl5.from("#sect4h2", { x: 200, opacity: 0, duration: 1 }, "-=0.4");
tl5.from("#sect4h2", { x: 200, opacity: 0, duration: 1 }, "-=0.4");
tl5.from("#d11", { x: 200, opacity: 0, duration: 1 }, "-=0.4");
tl5.from("#d12", { x: 200, opacity: 0, duration: 1 }, "-=0.4");
tl5.from("#d13", { x: 200, opacity: 0, duration: 1 }, "-=0.4");
tl5.from("#d14", { x: 200, opacity: 0, duration: 1 }, "-=0.4");
tl5.from("#d15", { x: 200, opacity: 0, duration: 1 }, "-=0.4");
tl5.from("#d16", { x: 200, opacity: 0, duration: 1 }, "-=0.4");

let tl6 = gsap.timeline({
  scrollTrigger: {
    trigger: ".sect5",
  },
});

tl6.from("#sect5h1", { x: -200, opacity: 0.6, duration: 1 });
tl6.from("#sect5h2", { x: 200, opacity: 0, duration: 1 }, "-=0.4");
tl6.from("#e11", { x: 200, opacity: 0, duration: 1 }, "-=0.4");
tl6.from("#e12", { x: 200, opacity: 0, duration: 1 }, "-=0.4");
tl6.from("#e13", { x: 200, opacity: 0, duration: 1 }, "-=0.4");
tl6.from("#e14", { x: 200, opacity: 0, duration: 1 }, "-=0.4");
tl6.from("#e15", { x: 200, opacity: 0, duration: 1 }, "-=0.4");
tl6.from("#e16", { x: 200, opacity: 0, duration: 1 }, "-=0.4");

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();
//scene.background = new THREE.Color(0x444488);
var loader = new GLTFLoader();
var obj1;
loader.load(
  // resource URL
  "h.glb",
  // called when the resourc ce is loaded
  function (gltf) {
    obj1 = gltf.scene;
    scene.add(obj1);

    obj1.scale.set(450, 450, 450);
    obj1.rotation.set(0, 0, 0);
    obj1.position.set(0, 0, -300);
  }
);
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

scene.add(new THREE.AmbientLight(0x000000));

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
  composer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  effectFXAA.uniforms["resolution"].value.set(
    1 / sizes.width,
    1 / sizes.height
  );
});

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(
  40,
  sizes.width / sizes.height,
  0.1,
  10000
);
camera.position.x = 0;
camera.position.y = 0;
camera.position.z = 2300;
//camera.lookAt(0);
scene.add(camera);

// Controls
//const controls = new OrbitControls(camera, canvas);
//controls.enableDamping = true;

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
renderer.shadowMap.enabled = true;
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

const triangles = 2000;

const geometry = new THREE.BufferGeometry();

const positions = [];
const normals = [];
const colors = [];

const color = new THREE.Color();

const n = 800,
  n2 = n / 2; // triangles spread in the cube
const d = 120,
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
mesh.position.set(0, 0, -300);

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
  end: 5,
  func: function () {
    //camera.lookAt(obj1.position);
    mesh.position.x = lerp(1000, 0, scalePercent(0, 5));
    if (obj1) obj1.position.x = lerp(1000, 0, scalePercent(0, 5));

    material.color.set(0xdddddd);

    mesh.rotation.y = lerp(0, 3 * Math.PI, scalePercent(0, 5));
    if (obj1) obj1.rotation.y = lerp(0, 3 * Math.PI, scalePercent(0, 5));
    //camera.position.set(0, 1, 2);
    //mesh.rotation.y = lerp(0, 4 * Math.PI, scalePercent(20, 100));
    //obj1.position.z = lerp(-5, 0, scalePercent(0, 40));
    //console.log(cube.position.z)
  },
});
animationScripts.push({
  start: 5,
  end: 24,
  func: function () {
    //camera.lookAt(obj1.position);
    //mesh.position.x = lerp(900, 0, scalePercent(0, 20));
    material.color.set(0x12e190);
    //camera.position.set(0, 1, 2);
    mesh.rotation.y = lerp(0, 2 * Math.PI, scalePercent(5, 24));
    if (obj1) obj1.rotation.y = lerp(0, 2 * Math.PI, scalePercent(5, 24));
    //obj1.position.z = lerp(-5, 0, scalePercent(0, 40));
    //console.log(cube.position.z)
  },
});
animationScripts.push({
  start: 24,
  end: 42,
  func: function () {
    //camera.lookAt(obj1.position);
    //mesh.position.x = lerp(900, 0, scalePercent(0, 20));
    material.color.set(0x2ec0ec);
    //camera.position.set(0, 1, 2);
    mesh.rotation.y = lerp(0, 2 * Math.PI, scalePercent(24, 42));
    if (obj1) obj1.rotation.y = lerp(0, 2 * Math.PI, scalePercent(24, 42));
    //obj1.position.z = lerp(-5, 0, scalePercent(0, 40));
    //console.log(cube.position.z)
  },
});
animationScripts.push({
  start: 42,
  end: 56,
  func: function () {
    //camera.lookAt(obj1.position);
    //mesh.position.x = lerp(900, 0, scalePercent(42, 20));
    material.color.set(0xe352e7);
    //camera.position.set(0, 1, 2);
    mesh.rotation.y = lerp(0, 2 * Math.PI, scalePercent(42, 56));
    if (obj1) obj1.rotation.y = lerp(0, 2 * Math.PI, scalePercent(42, 56));
    //obj1.position.z = lerp(-5, 0, scalePercent(0, 40));
    //console.log(cube.position.z)
  },
});
animationScripts.push({
  start: 56,
  end: 72,
  func: function () {
    //camera.lookAt(obj1.position);
    //mesh.position.x = lerp(900, 0, scalePercent(0, 20));
    material.color.set(0xf18b06);
    //camera.position.set(0, 1, 2);
    mesh.rotation.y = lerp(0, 2 * Math.PI, scalePercent(56, 72));
    if (obj1) obj1.rotation.y = lerp(0, 2 * Math.PI, scalePercent(56, 72));
    //obj1.position.z = lerp(-5, 0, scalePercent(0, 40));
    //console.log(cube.position.z)
  },
});

//add an animation that rotates the obj1 between 40-60 percent of scroll
animationScripts.push({
  start: 72,
  end: 90,
  func: function () {
    material.color.set(0xf1e206);
    //camera.lookAt(obj1.position);
    //camera.position.set(0, 1, 2);
    mesh.rotation.y = lerp(0, 2 * Math.PI, scalePercent(72, 90));
    if (obj1) obj1.rotation.y = lerp(0, 2 * Math.PI, scalePercent(72, 90));
    //console.log(obj1.rotation.z)
  },
});
animationScripts.push({
  start: 90,
  end: 100.1,
  func: function () {
    material.color.set(0xeeeeee);
    //camera.lookAt(obj1.position);
    //camera.position.set(0, 1, 2);
    mesh.rotation.y = lerp(0, 2 * Math.PI, scalePercent(90, 100.1));
    if (obj1) obj1.rotation.y = lerp(0, 2 * Math.PI, scalePercent(90, 100.1));
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

var composer = new EffectComposer(renderer);

const renderPass = new RenderPass(scene, camera);
composer.addPass(renderPass);

var effect = new OutlineEffect(renderer);
var outlinePass = new OutlinePass(
  new THREE.Vector2(sizes.width, sizes.height),
  scene,
  camera
);
composer.addPass(outlinePass);
effect.edgeStrength = Number(10000);
outlinePass.edgeGlow = Number(1000);
// outlinePass.edgeThickness = Number(1000);
// outlinePass.pulsePeriod = Number(0);
//effect.visibleEdgeColor.set("#ff0000");
// outlinePass.hiddenEdgeColor.set("#000000");

var effectFXAA = new ShaderPass(FXAAShader);
effectFXAA.uniforms["resolution"].value.set(1 / sizes.width, 1 / sizes.height);
composer.addPass(effectFXAA);

// const updateOnScroll = (event) => {
//   mesh.rotation.y = window.scrollY * 0.01;

//   //obj12.position.z = window.scrollY *.001
// };
// window.addEventListener("scroll", updateOnScroll);

document.addEventListener("mousemove", onDocumentMouseMove);

let mouseX = 0;
let mouseY = 0;

let targetX = 0;
let targetY = 0;

const windowX = window.innerWidth / 2;
const windowY = window.innerHeight / 2;

function onDocumentMouseMove(event) {
  mouseX = event.clientX - windowX;
  mouseY = event.clientY - windowY;
}
const clock = new THREE.Clock();

const tick = () => {
  const elapsedTime = clock.getElapsedTime();

  playScrollAnimations();
  // Update obj1ects
  //if (obj1) obj1.rotation.y = 0.5 * elapsedTime;

  // Update Orbital Controls
  //controls.update();

  // Render

  //composer.render();
  // Call tick again on the next frame
  window.requestAnimationFrame(tick);

  //Update objects
  targetX = mouseX * 0.0001;
  targetY = mouseY * 0.0001;

  // Update objects
  obj1.rotation.y += Math.PI * (targetX - obj1.rotation.y);
  obj1.rotation.x += targetY - obj1.rotation.x;
  // obj1.rotation.y += -Math.PI / 4 + 5 * (targetX - obj1.rotation.y);
  // obj1.rotation.x += 0.5 * (targetX - obj1.rotation.x);
  mesh.rotation.y += Math.PI * (targetX - mesh.rotation.y);
  mesh.rotation.x += targetY - mesh.rotation.x;

  effect.render(scene, camera);
};
window.scrollTo({ top: 0, behavior: "smooth" });

tick();
