const gridContainer = document.querySelector('#grid-container');
const pixelCountSlider = document.querySelector('#grid-size-slider')
let brushColor = 'red'


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
let colorSelector = document.querySelector('.color-selector')
colorSelector.addEventListener("input", (e) => {
    brushColor = colorSelector.value
})


const grid = document.querySelector("#grid-container");

// Change pixel color
grid.addEventListener("mouseover", (e) => {
    // Only change color if click is being pressed and  
    // is not targeting the container div
    if (e.buttons === 1 && e.target.id !== "grid-container"){
        e.target.style.backgroundColor = brushColor;
    }
});


