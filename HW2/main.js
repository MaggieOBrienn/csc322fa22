import * as THREE from 'three';
import {OrbitControls} from 'three/addons/controls/OrbitControls.js';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(100,window.innerWidth/window.innerHeight,1,500);
camera.position.set(0,30,100);
camera.lookAt(0,35,0);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth,window.innerHeight);
document.body.appendChild(renderer.domElement);


const controls = new OrbitControls(camera, renderer.domElement);
camera.position.set(0,35,75);
controls.update();

//base 1
const face1 = new THREE.BufferGeometry();
const vert1 = new Float32Array([
  -2.75, 0.0, -2.75,
  2.75, 0.0, -2.75,
  1.7, 50.0, -1.7,
  -1.7, 50.0, -1.7,
]);
const indices1 =[
  0,2,1,
  2,0,3,
]
face1.setIndex(indices1);
face1.setAttribute('position', new THREE.BufferAttribute(vert1,3));
const material1 = new THREE.MeshBasicMaterial({color: "rgb(0,80,239)"}); //color= blue
const plane1 = new THREE.Mesh(face1,material1);

//base 2
const face2 = new THREE.BufferGeometry();
const vert2 = new Float32Array([
  -2.75, 0.0, -2.75,
  -2.75, 0.0, 2.75,
  -1.7, 50.0, 1.7,
  -1.7, 50.0, -1.7,
]);
const indices2 =[
  1,2,0,
  2,3,0,
]
face2.setIndex(indices2);
face2.setAttribute('position', new THREE.BufferAttribute(vert2,3));
const material2 = new THREE.MeshBasicMaterial({color: "rgb(170,0,255)"}); //color= purple
const plane2 = new THREE.Mesh(face2,material2);

//base 3
const face3 = new THREE.BufferGeometry();
const vert3 = new Float32Array([
  2.75, 0.0, -2.75,
  2.75, 0.0, 2.75,
  1.7, 50.0, 1.7,
  1.7, 50.0, -1.7,
]);
const indices3 =[
  2,1,0,
  2,0,3,
]
face3.setIndex(indices3);
face3.setAttribute('position', new THREE.BufferAttribute(vert3,3));
const material3 = new THREE.MeshBasicMaterial({color: "rgb(250,104,0)"}); //color= orange
const plane3 = new THREE.Mesh(face3,material3);

//base 4
const face4 = new THREE.BufferGeometry();
const vert4 = new Float32Array([
  -2.75, 0.0, 2.75,
  2.75, 0.0, 2.75,
  1.7, 50.0, 1.7,
  -1.7, 50.0, 1.7,
]);
const indices4 = [
  0,1,2,
  2,3,0,
]
face4.setIndex(indices4);
face4.setAttribute('position', new THREE.BufferAttribute(vert4,3));
const material4 = new THREE.MeshBasicMaterial({color: 0x7CFC00}); //colors= green
const plane4 = new THREE.Mesh(face4,material4);

//pyramid 
const pyrInd = new Float32Array([
  -1.7, 50.0, -1.7, //<^
  -1.7, 50.0, 1.7, //<v
  0.0, 55.0, 0.0,  //cent
  1.7, 50.0, -1.7, //>^
  1.7, 50.0, 1.7,  //>v
]);

//side1
const face5 = new THREE.BufferGeometry();
const indices5 = [
  2,0,1,
]
face5.setIndex(indices5);
face5.setAttribute('position', new THREE.BufferAttribute(pyrInd,3));
const material5 = new THREE.MeshBasicMaterial({color: 0xFF69B4}); //colors= pink
const plane5 = new THREE.Mesh(face5,material5);

//side2
const face6 = new THREE.BufferGeometry();
const indices6 = [
  2,3,0,
]
face6.setIndex(indices6);
face6.setAttribute('position', new THREE.BufferAttribute(pyrInd,3));
const material6 = new THREE.MeshBasicMaterial({color: 'red'}); //color= red
const plane6 = new THREE.Mesh(face6,material6);

//side3
const face7 = new THREE.BufferGeometry();
const indices7 = [
  2,4,3,
]
face7.setIndex(indices7);
face7.setAttribute('position', new THREE.BufferAttribute(pyrInd,3));
const material7 = new THREE.MeshBasicMaterial({color: 'white'}); //color= white
const plane7 = new THREE.Mesh(face7,material7);

//side4
const face8 = new THREE.BufferGeometry();
const indices8 = [
  2,1,4,
]
face8.setIndex(indices8);
face8.setAttribute('position', new THREE.BufferAttribute(pyrInd,3));
const material8 = new THREE.MeshBasicMaterial({color: 0xC0C0C0}) //color=silver
const plane8 = new THREE.Mesh(face8,material8);

//move object
controls.enableDamping = true;
controls.listenToKeyEvents(document.body);
controls.mouseButtons ={
  LEFT: THREE.MOUSE.ROTATE,
}


scene.add(plane1);
scene.add(plane2);
scene.add(plane3);
scene.add(plane4);
scene.add(plane5);
scene.add(plane6);
scene.add(plane7);
scene.add(plane8);


function animate(){
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene,camera);
}

animate();
