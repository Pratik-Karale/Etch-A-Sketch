const container = document.querySelector(".container")
const clearBtn = document.querySelector("#clear-btn")
const askGridSize = () => {
    gridSize=+prompt("Enter Grid Size(max 100): ")
    return (gridSize>100)?100:(gridSize==0)?10:gridSize
}
const rainbowColors=["violet","indigo","blue","green","yellow","orange","red"]
const rainbowOption=document.querySelector("#rainbow-pen-option")
let currentColorIndex=0



function makeSketchGrid(numOfBoxes) {
    container.innerHTML = ""
    boxSize = +(window.getComputedStyle(container)["width"].slice(0, -2)) / numOfBoxes
    for (let i = 0; i < numOfBoxes ** 2; i++) {
        boxElem = document.createElement("div")
        boxElem.classList.add("box")
        boxElem.style.width = boxSize + "px"
        boxElem.style.height = boxSize + "px"
        boxElem.addEventListener("mouseover", draw)
        container.appendChild(boxElem)
    }
}

function draw(e) {
    if(isRainbow()){
        e.target.style.backgroundColor = rainbowColors[currentColorIndex]
        if(currentColorIndex>6) currentColorIndex=-1;
        currentColorIndex++
        return
    }
    console.log
    e.target.style.backgroundColor = document.querySelector("#color-input").value
}

clearBtn.addEventListener("click", clearContainer)
function clearContainer() {
    makeSketchGrid(askGridSize())
}

function isRainbow(){
    return +rainbowOption.getAttribute("data-selected")
}

rainbowOption.addEventListener("click",toggleRainbow)

function toggleRainbow(){
    if (rainbowOption.style.background.includes("linear-gradient")){
        rainbowOption.style.background="transparent"
    }else{
        rainbowOption.style.background="linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)"
    }
    rainbowOption.setAttribute("data-selected",+!isRainbow())
}

makeSketchGrid(askGridSize())