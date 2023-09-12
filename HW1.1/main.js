import * as THREE from 'three';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(45,window.innerWidth/window.innerHeight,1,500);
camera.position.set(0,0,100);
camera.lookAt(0,0,5);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth,window.innerHeight);
document.body.appendChild(renderer.domElement);

//face 1
const points = [];
points.push(new THREE.Vector3(-10,0,0));
points.push(new THREE.Vector3(0,15,0));
points.push(new THREE.Vector3(10,0,0));
points.push(new THREE.Vector3(-10,0,0));

const face1 = new THREE.BufferGeometry().setFromPoints(points);
const material1 = new THREE.LineBasicMaterial({color: 0xffffff});
const line = new THREE.Line(face1,material1);

//face 2
/*const points2 =[];
points2.push(new THREE.Vector3(-10,0,0));
points2.push(new THREE.Vector3(0,-3,0));
points2.push(new THREE.Vector3(-2,-10,0));
points2.push(new THREE.Vector3(-10,0,0));

const face2 = new THREE.BufferGeometry().setFromPoints(points2);
const material2 = new THREE.MeshBasicMaterial({color: 0x4682B4});
const mesh2 = new THREE.Line(face2,material2);

//face 3
const points3 = [];
points3.push(new THREE.Vector3(0,-3,0));
points3.push(new THREE.Vector3(5,4,0));
points3.push(new THREE.Vector3(-2,-10,0));
points3.push(new THREE.Vector3(0,-3,0));


const face3 = new THREE.BufferGeometry().setFromPoints(points3);
const material3 = new THREE.MeshBasicMaterial({color: 0x87CEFA});
const mesh3 = new THREE.Line(face3,material3);*/

scene.add(line);
//scene.add(mesh2);
//scene.add(mesh3);
renderer.render(scene,camera);
