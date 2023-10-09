images=[
    {
        src:"../imgs/Dead_Astronomer.jpeg",
        alt:"Astronomer that is dead",
    },
    {
        src:"../imgs/Beethoven.jpeg",
        alt:"Image of Beethoven"
    }
]



for (i=0; i<images.length; i++){
    let div = document.createElement("div")
    div.classList.add("watermark")
    let img = document.createElement("img")
    img.src=images[i].src
    img.alt=images[i].alt
    div.appendChild(img)
    document.querySelector("#images").appendChild(div)
}

