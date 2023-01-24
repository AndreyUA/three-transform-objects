import * as THREE from "three";
import "./style.css";

const scene = new THREE.Scene();

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshMatcapMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material);

// Change position just for fun
mesh.position.x = 0.7;
mesh.position.y = -0.6;
mesh.position.z = 1;

console.log(
  "vector3 length (between the center of scene and position): ",
  mesh.position.length()
);

scene.add(mesh);

const size = {
  width: 800,
  height: 600,
};

const camera = new THREE.PerspectiveCamera(75, size.width / size.height);
camera.position.z = 3;
scene.add(camera);

console.log(
  "distance between cube and camera: ",
  mesh.position.distanceTo(camera.position)
);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("canvas.webgl"),
});
renderer.setSize(size.width, size.height);
renderer.render(scene, camera);
