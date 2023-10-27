// Retrieving elements
const canvas = document.querySelector("#signature-pad")
const form = document.querySelector("#signature-pad-form")
const clearButton = document.querySelector("#clear-button")

// Getting Context
const ctx = canvas.getContext('2d')
let writingMode = false 

// Clear pad function
const clearPad = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
}

const saveImage = () => {
    const imageURL = canvas.toDataURL()
    const image = document.createElement("img")
    image.src = imageURL
    image.alt = "Signature"
    image.height = canvas.height
    image.width = canvas.width
    console.log(image)
}

// Save image when clicking save button
form.addEventListener("submit", (e) => {
    e.preventDefault()
    saveImage()
    clearPad()
    console.log("Signature Submitted")
})

// Clear pad when clicking clear button
clearButton.addEventListener("click", (e) => {
    e.preventDefault()
    clearPad()
})



const getCursorPosition = (e) => {
    x= e.clientX - e.target.getBoundingClientRect().x
    y= e.clientY - e.target.getBoundingClientRect().y
    return [x, y]
}

// Function to start drawing when clicking
const handlePointerDown = (e) => {
    writingMode= true
    ctx.beginPath()
    const [x, y]= getCursorPosition(e)
    ctx.moveTo(x, y)
}

const handlePointerUp = (e) => {
    writingMode=false
}

const handlePointerMove = (e) => {
    if (writingMode) {
        const [x,y] = getCursorPosition(e)
        ctx.lineTo(x,y)
        ctx.stroke()
    }
}

// Line setup
ctx.lineWidth=3
ctx.lineJoin=ctx.lineCap="round"

// Listener for pointer movement 
canvas.addEventListener("pointerdown", handlePointerDown)
canvas.addEventListener("pointerup", handlePointerUp)
canvas.addEventListener("pointermove", handlePointerMove)