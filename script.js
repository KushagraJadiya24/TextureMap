import * as THREE from "https://unpkg.com/three@0.158.0/build/three.module.js";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 3;

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth - 150, window.innerHeight);
document.getElementById("canvas-container").appendChild(renderer.domElement);

const textureLoader = new THREE.TextureLoader();
const defaultTexture = textureLoader.load(
  "textures/texture1.jpg",
  () => {
    defaultTexture.colorSpace = THREE.SRGBColorSpace;
  }
);

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshStandardMaterial({ map: defaultTexture });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(5, 5, 5);
scene.add(directionalLight);

function animate() {
  requestAnimationFrame(animate);
  cube.rotation.y += 0.02;
  cube.rotation.x += 0.01;
  renderer.render(scene, camera);
}
animate();

const textureList = ["texture1.jpg", "texture2.jpg", "texture3.jpg", "texture4.jpg"];
const textureContainer = document.getElementById("textures");

textureList.forEach((textureName) => {
  const textureItem = document.createElement("div");
  textureItem.className = "texture-item";
  textureItem.draggable = true;
  textureItem.innerHTML = `
    <img src="textures/${textureName}" alt="${textureName}" />
    <p>${textureName}</p>
  `;

  textureItem.addEventListener("dragstart", (e) => {
    e.dataTransfer.setData("text/plain", textureName);
  });

  textureContainer.appendChild(textureItem);
});

renderer.domElement.addEventListener("dragover", (e) => {
  e.preventDefault();
});

renderer.domElement.addEventListener("drop", (e) => {
  e.preventDefault();
  const textureName = e.dataTransfer.getData("text/plain");
  if (textureName) {
    const newTexture = textureLoader.load(`textures/${textureName}`, () => {
      newTexture.colorSpace = THREE.SRGBColorSpace;
      cube.material.map = newTexture;
      cube.material.needsUpdate = true;
    });
  }
});
