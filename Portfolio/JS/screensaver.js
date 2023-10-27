import * as THREE from 'three'

// Create new scene
const scene = new THREE.Scene()
const sceneContainer= document.querySelector(".scene-container-off")
// Create camera perspective
const camera = new THREE.PerspectiveCamera()
camera.position.z = 50

// Rendering
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight)
sceneContainer.appendChild(renderer.domElement)

// Create soft white light
const light = new THREE.AmbientLight("rgb(255,255,255)")
light.intensity = 1
scene.add(light)

//Create sphere
let sphere
const geometry = new THREE.SphereGeometry(15, 36, 16)
const material = new THREE.MeshBasicMaterial( { color: 0xffffff } )
sphere = new THREE.Mesh(geometry, material)
scene.add(sphere)

function draw(){
    sphere.rotation.x+=0.01
    sphere.rotation.y+=0.01
    renderer.render(scene, camera);
    requestAnimationFrame(draw)
}

// 1 minute time
let inactiveTimeout=60000

// Start/Restart timer
const inactivityTimer = () => {
    clearTimeout(inactiveTimeout)
    inactiveTimeout = setTimeout(screenSaverOn, 5000)

}

// When called, displays threejs scene
const screenSaverOn = () => {
    sceneContainer.classList.remove("scene-container-off")
    sceneContainer.classList.add("scene-container-on")

}

// When called, hides threejs scene
const screenSaverOff = () => {
    inactivityTimer()
    sceneContainer.classList.remove("scene-container-on")
    sceneContainer.classList.add("scene-container-off")
}

// Listeners to check for activity
document.addEventListener('mousemove', screenSaverOff)
document.addEventListener('keydown', screenSaverOff)

draw()

inactivityTimer()