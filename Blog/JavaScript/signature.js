

const canvas = document.querySelector('canvas')
const form = document.querySelector('#signature-pad')
const clearButton = document.querySelector('#clear-button')
const submitButton=document.querySelector('#submit-button')
const ctx=canvas.getContext('2d')
ctx.lineWidth = 3;
ctx.lineJoin = ctx.lineCap = 'round';

let writingMode=false

// const confirmSubmition = () => {
//     window.location.href = "suggestion_confirmation.html"
// }

const saveImage = () => {
    const imgURL=canvas.toDataURL()
    const image=document.createElement('img')
    image.src=imgURL
    image.height=canvas.height
    image.width=canvas.width
    image.style.display="block"
    form.appendChild(image)
    console.log(image)
}

const emptyFields = () => {
    var inputFields = document.querySelectorAll('input, textarea');
    for (input of inputFields) {
        input.value = '' // Set the value to an empty string
    }
}

// Add listener to form
submitButton.addEventListener('click', (e) => {
    e.preventDefault()
    saveImage()
    clearPad()
    emptyFields()
    var confirmationMessage = "Form submitted successfully!"
    alert(confirmationMessage)
})



// Clearning Pad 
const clearPad = ()  => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
}

// Clear pad after clicking clear button
clearButton.addEventListener('click', (e) =>{
    e.preventDefault()
    clearPad()
})

const getCursorPosition = (e) => {
    x= e.clientX - e.target.getBoundingClientRect().x
    y= e.clientY - e.target.getBoundingClientRect().y
    return [x, y]
}

// Adding listeners
const handlePointerDown = (e) => {
    writingMode=true
    ctx.beginPath()
    const [x, y]=getCursorPosition(e)
    ctx.moveTo(x, y)
}

const handlePointerUp = (e) => {
    writingMode=false
}

const handlePointerMove = (e) => {
    if (!writingMode) return
    const [x, y]=getCursorPosition(e)
    ctx.lineTo(x, y)
    ctx.stroke()
}

// Add event listeners on canvas
canvas.addEventListener('pointerdown', handlePointerDown, )
canvas.addEventListener('pointerup', handlePointerUp)
canvas.addEventListener('pointermove', handlePointerMove)







