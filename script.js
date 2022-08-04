const gridContainer = document.querySelector('#grid-container');
const pixelCountSlider = document.querySelector('#grid-size-slider')


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

// Set default 10x10 grid
createGrid(10)

// Adjust number of pixels with the slider
pixelCountSlider.addEventListener('click', () => {

    const currentPixels = document.querySelectorAll('.pixel')
    // If the container already has pixels, remove them
    if (currentPixels.length !== 0) {
        currentPixels.forEach(element => {
            gridContainer.removeChild(element)
        });
    }

    let numberOfRows = pixelCountSlider.value
    createGrid(numberOfRows)

})



const grid = document.querySelector("#grid-container");

// Change pixel color
grid.addEventListener("mouseover", (e) => {
    // Only change color if click is being pressed and  
    // is not targeting the container div
    if (e.buttons === 1 && e.target.id !== "grid-container"){
        e.target.style.backgroundColor = 'red';
    }
});


