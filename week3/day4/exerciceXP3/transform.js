// Store all bold elements inside the paragraph
let boldItems = [];

// Find and store all <strong> tags inside the paragraph
function getBoldWords() {
  boldItems = document.querySelectorAll("#sentence strong");
}

// When mouse is over the paragraph, change text to blue
function turnBlue() {
  boldItems.forEach(word => {
    word.style.color = "blue";
  });
}

// When mouse leaves, turn text back to black
function turnBlack() {
  boldItems.forEach(word => {
    word.style.color = "black";
  });
}

// Call this once to load the bold elements
getBoldWords();

// Get the paragraph and set mouse events
const sentence = document.getElementById("sentence");

sentence.addEventListener("mouseover", turnBlue);
sentence.addEventListener("mouseout", turnBlack);
