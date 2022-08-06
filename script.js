const gridContainer = document.querySelector('#grid-container');
const pixelCountSlider = document.querySelector('#grid-size-slider')
let colorSelector = document.querySelector('.color-selector')
let brushColor = colorSelector.value
let brushSetting = 'color-picker'


// Create grid

function createGrid(numOfRows) {
    let pixelDimms = 900 / numOfRows

    for (let i = 0; i < numOfRows**2; i++) {
        const gridPixel = document.createElement('div');

        gridPixel.classList.toggle('pixel');
        gridPixel.textContent = ' ';
        gridPixel.style.width = `${pixelDimms}px`;
        gridPixel.style.height = `${pixelDimms}px`;
        gridPixel.setAttribute('draggable', false)
        gridContainer.appendChild(gridPixel);
    }
}

// Set initial 10x10 grid
createGrid(10)

// Adjust number of pixels with the slider
pixelCountSlider.addEventListener('click', () => {

    const currentPixels = document.querySelectorAll('.pixel')
    let numberOfRows = pixelCountSlider.value
    // If the container already has pixels, remove them
    if (currentPixels.length !== 0 && currentPixels.length !== numberOfRows**2) {
        currentPixels.forEach(element => {
            gridContainer.removeChild(element)
        });

        createGrid(numberOfRows)
    }
})


// Set brush color with color selector
colorSelector.addEventListener("input", (e) => {
    brushColor = colorSelector.value
    brushSetting = 'color-picker'
})

// Remove color with 'eraser button'
let eraserButton = document.querySelector(".eraser-button")
eraserButton.addEventListener("click", (e) => {
    brushSetting = 'eraser'
})

function getRandomColor() {
    // Generate random hex code
    return '#' + Math.floor(Math.random()*16777215).toString(16);
}

// Randomize color with rainbow button
let rainbowButton = document.querySelector(".rainbow-button")
rainbowButton.addEventListener('click', (e) => {
    brushSetting = 'rainbow'
})




const grid = document.querySelector("#grid-container");

// Change pixel color
grid.addEventListener("mouseover", (e) => {



    // Only change color if click is being pressed and  
    // is not targeting the container div
    if (e.buttons === 1 && e.target.id !== "grid-container"){
        
        if (brushSetting === 'color-picker') {
            if (e.target.style.backgroundColor !== brushColor) {
                e.target.style.backgroundColor = brushColor
            } 
        }

        if(brushSetting === 'eraser') {
            e.target.style.backgroundColor = ''
        }

        if(brushSetting === 'rainbow') {
            e.target.style.backgroundColor = getRandomColor()
        }
        
    }
});


