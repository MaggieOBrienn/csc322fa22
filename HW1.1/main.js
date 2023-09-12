import * as THREE from 'three';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(45,window.innerWidth/window.innerHeight,1,500);
camera.position.set(0,0,100);
camera.lookAt(0,0,5);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth,window.innerHeight);
document.body.appendChild(renderer.domElement);

const points = [];
points.push(new THREE.Vector3(-10,0,0));
points.push(new THREE.Vector3(0,15,0));
points.push(new THREE.Vector3(10,0,0));
points.push(new THREE.Vector3(-10,0,0));

const face1 = new THREE.BufferGeometry().setFromPoints(points);
const material1 = new THREE.LineBasicMaterial({color: 0xffffff});
const line = new THREE.Line(face1,material1);

scene.add(line);
renderer.render(scene,camera);
