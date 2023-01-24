import * as THREE from "three";
import "./style.css";

const scene = new THREE.Scene();

/*
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshMatcapMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// Change position just for fun
// mesh.position.x = 0.7;
// mesh.position.y = -0.6;
// mesh.position.z = 1;
mesh.position.set(0.7, -0.6, 1);

// mesh.position.normalize() --> this will normalize position to vector length 1

// Scaling
// mesh.scale.x = 2;
// mesh.scale.y = 0.5;
// mesh.scale.z = 0.5;
mesh.scale.set(2, 0.5, 0.5);

// Rotation
mesh.rotation.reorder("YXZ");
mesh.rotation.x = Math.PI * 0.25;
mesh.rotation.y = Math.PI * 0.25;

console.log(
  "vector3 length (between the center of scene and position): ",
  mesh.position.length()
);
*/

const group = new THREE.Group();
scene.add(group);

const cube1 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0xff0000 })
);
const cube2 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshMatcapMaterial({ color: 0xff0000 })
);
cube2.position.set(-2, 0, 0);
const cube3 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0x00ff00 })
);
cube3.position.set(2, 0, 0);
group.add(cube1, cube2, cube3);

group.position.y = 1;
group.scale.y = 0.5;
group.rotation.x = Math.PI * 0.3;

// Axes helper
const axesHelper = new THREE.AxesHelper(3);
scene.add(axesHelper);

const size = {
  width: 800,
  height: 600,
};

const camera = new THREE.PerspectiveCamera(75, size.width / size.height);
camera.position.z = 3;
scene.add(camera);

// camera.lookAt(mesh.position);

// console.log(
//   "distance between cube and camera: ",
//   mesh.position.distanceTo(camera.position)
// );

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("canvas.webgl"),
});
renderer.setSize(size.width, size.height);
renderer.render(scene, camera);
