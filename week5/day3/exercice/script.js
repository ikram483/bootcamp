let currentPage = 1;
let currentCharacterIndex = 0;
let characters = [];

const container = document.getElementById('character-container');
const nextButton = document.getElementById('next-button');
const loader = document.getElementById('loader');

async function fetchCharacters(page) {
  const response = await fetch(`https://swapi.dev/api/people/?page=${page}`);
  const data = await response.json();
  return data.results;
}

async function showNextCharacter() {
  loader.classList.remove('hidden'); 
  container.innerHTML = ""; 

  if (currentCharacterIndex >= characters.length) {
    currentPage++;
    characters = await fetchCharacters(currentPage);
    currentCharacterIndex = 0;

    if (characters.length === 0) {
      nextButton.disabled = true;
      nextButton.textContent = "No more characters";
      loader.classList.add('hidden');
      return;
    }
  }

  const character = characters[currentCharacterIndex];
  currentCharacterIndex++;

  await new Promise(resolve => setTimeout(resolve, 500));

  loader.classList.add('hidden'); 

  container.innerHTML = `
    <h2>${character.name}</h2>
    <p><strong>Height:</strong> ${character.height} cm</p>
    <p><strong>Mass:</strong> ${character.mass} kg</p>
    <p><strong>Gender:</strong> ${character.gender}</p>
    <p><strong>Birth Year:</strong> ${character.birth_year}</p>
  `;
}

(async () => {
  characters = await fetchCharacters(currentPage);
  showNextCharacter();
})();

nextButton.addEventListener('click', showNextCharacter);
