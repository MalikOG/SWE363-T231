
class foxRetrieve{
    constructor(jsonEvent){
        this.image=jsonEvent.image
        this.alt="Fox"
    }
}

(async ()=> {
    for (i=0; i < 3; i++){
        let res= await fetch("https://randomfox.ca/floof")
        let data= await res.json()
        populateImages(data)
    }
})()


function populateImages(data){
    fox= new foxRetrieve(data)
    let div = document.createElement("div")
    div.classList.add("watermark")

    let img = document.createElement("img")
    img.src=fox.image
    img.alt=fox.alt

    div.appendChild(img)
    document.querySelector("#images").appendChild(div)

}

