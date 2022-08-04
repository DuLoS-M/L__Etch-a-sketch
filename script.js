const gridContainer = document.querySelector('#grid-container');

let numberOfPixels = 100
let squareDimentions = 900 / numberOfPixels

// Create grid
for (let i = 0; i < numberOfPixels**2; i++) {
    const gridPixel = document.createElement('div');

    
    gridPixel.classList.toggle('pixel');
    gridPixel.textContent = ' ';
    gridPixel.style.width = `${squareDimentions}px`;
    gridPixel.style.height = `${squareDimentions}px`;
    gridPixel.setAttribute('draggable', false)
    gridContainer.appendChild(gridPixel);
    
}



const grid = document.querySelector("#grid-container");

// Change pixel color
grid.addEventListener("mouseover", (e) => {
    // Only change color if click is being pressed and  
    // is not targeting the container div
    if (e.buttons === 1 && e.target.id !== "grid-container"){
        e.target.style.backgroundColor = 'red';
    }
});


