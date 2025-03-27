const palette = document.querySelectorAll('.color');
const grid = document.getElementById('grid');
const clearBtn = document.getElementById('clear-btn'); // Ajout de la sélection du bouton clear

let currentColor = 'red';
let isDrawing = false;

// Create the grid
for (let i = 0; i < 400; i++) {
  const square = document.createElement('div');
  square.classList.add('square');

  square.addEventListener('mousedown', () => {
    isDrawing = true;
    square.style.backgroundColor = currentColor;
  });

  square.addEventListener('mouseover', () => {
    if (isDrawing) {
      square.style.backgroundColor = currentColor;
    }
  });

  square.addEventListener('mouseup', () => {
    isDrawing = false;
  });

  grid.appendChild(square);
}

document.body.addEventListener('mouseup', () => isDrawing = false);

// Handle color selection
palette.forEach(color => {
  color.addEventListener('click', () => {
    palette.forEach(c => c.classList.remove('selected'));
    color.classList.add('selected');
    currentColor = color.style.backgroundColor;
  });
});

// Set default selected color
palette[0].classList.add('selected');

// Clear button functionality
clearBtn.addEventListener('click', () => {
  const squares = document.querySelectorAll('.square');
  squares.forEach(square => {
    square.style.backgroundColor = 'white';
  });
});