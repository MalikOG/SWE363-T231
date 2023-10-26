import * as THREE from 'three'

// Create new scene
const scene = new THREE.Scene()

// Create camera perspective
const camera = new THREE.PerspectiveCamera()
camera.position.z = 10

// Rendering
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

// Create soft white light
const light = new THREE.AmbientLight("rgb(255,255,255)")
light.intensity = 1
scene.add(light)

//Create sphere
let sphere
const geometry = new THREE.SphereGeometry(15, 36, 16)
const material = new THREE.MeshBasicMaterial( { color: 0xffff00 } )
sphere = new THREE.Mesh(geometry, material)
scene.add(sphere)

function draw(){
    renderer.render(scene, camera);
    requestAnimationFrame(draw)
}

draw()