
class foxRetrieve{
    constructor(jsonEvent){
        this.image=jsonEvent.image
        this.alt="Fox"
    }
}

(async ()=> {
    const dataList = []
    for (i=0; i < 5; i++){
        const res= await fetch("https://randomfox.ca/floof")
        const data= await res.json()
        dataList.push(data)
    }
    populateImages(dataList)
})()


const createImage = (data) =>{
    fox= new foxRetrieve(data)
    let div = document.createElement("div")
    div.classList.add("fox-div")
    let img = document.createElement("img")
    img.classList.add("fox-image")
    img.src=fox.image
    img.alt=fox.alt
    return [img, div]
} 

const populateImages = (dataList) => {
    dataList.map((data) => {
        [img, div] = createImage(data)
        div.appendChild(img)
        document.querySelector("#images").appendChild(div)
    })}


