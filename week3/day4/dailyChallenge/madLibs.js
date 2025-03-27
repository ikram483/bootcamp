// Get elements from the DOM
const form = document.getElementById("libform");
const storyDisplay = document.getElementById("story");
const shuffleButton = document.getElementById("shuffle-button");

let storyInputs = {};
let displayedStories = [];

const storyTemplates = [
  ({ noun, adjective, person, verb, place }) =>
    `${person} went to the ${place} and saw a ${adjective} ${noun} that started to ${verb}!`,

  ({ noun, adjective, person, verb, place }) =>
    `In the ${place}, ${person} found a ${noun}. It was so ${adjective}, they couldn't stop ${verb}ing!`,

  ({ noun, adjective, person, verb, place }) =>
    `${person} ${verb}ed the ${adjective} ${noun} all over the ${place}. Everyone laughed!`
];

// Generate a new story by picking a random template
function generateRandomStory() {
  const template = storyTemplates[Math.floor(Math.random() * storyTemplates.length)];
  return template(storyInputs);
}

// On form submit
form.addEventListener("submit", function (event) {
  event.preventDefault();

  // Get input values
  const noun = document.getElementById("noun").value.trim();
  const adjective = document.getElementById("adjective").value.trim();
  const person = document.getElementById("person").value.trim();
  const verb = document.getElementById("verb").value.trim();
  const place = document.getElementById("place").value.trim();

  // Check if all fields are filled
  if (!noun || !adjective || !person || !verb || !place) {
    alert("Please fill in all the fields.");
    return;
  }

  // Save the inputs
  storyInputs = { noun, adjective, person, verb, place };

  // Display the first story
  const firstStory = generateRandomStory();
  storyDisplay.textContent = firstStory;

  // Initialize the list of displayed stories
  displayedStories = [firstStory];
});

// On shuffle button click, show a different story
shuffleButton.addEventListener("click", function () {
  if (Object.keys(storyInputs).length === 0) {
    alert("Please fill the form first.");
    return;
  }

  let newStory = "";
  let attempt = 0;

  // Try to avoid repeating previously displayed stories
  do {
    newStory = generateRandomStory();
    attempt++;
  } while (displayedStories.includes(newStory) && attempt < 5);

  storyDisplay.textContent = newStory;
  displayedStories.push(newStory);
});
