const planets = [
  { name: "Mercury", color: "gray", moons: 0 },
  { name: "Venus", color: "orange", moons: 0 },
  { name: "Earth", color: "blue", moons: 1 },
  { name: "Mars", color: "red", moons: 2 },
  { name: "Jupiter", color: "brown", moons: 5 }, // réduit pour affichage
  { name: "Saturn", color: "goldenrod", moons: 4 }, // idem
  { name: "Uranus", color: "lightblue", moons: 2 },
  { name: "Neptune", color: "darkblue", moons: 1 }
];

const section = document.querySelector(".listPlanets");

planets.forEach((planet, planetIndex) => {
  const planetDiv = document.createElement("div");
  planetDiv.classList.add("planet");
  planetDiv.style.backgroundColor = planet.color;

  // Affiche le nom de la planète en dessous
  const label = document.createElement("p");
  label.textContent = planet.name;
  label.style.color = "white";
  label.style.fontSize = "12px";
  label.style.marginTop = "110px";
  label.style.textAlign = "center";
  planetDiv.appendChild(label);

  // Ajouter les lunes (visuellement correct)
  for (let i = 0; i < planet.moons; i++) {
    const moon = document.createElement("div");
    moon.classList.add("moon");

    // Positionner les lunes en cercle autour de la planète
    const angle = (i / planet.moons) * Math.PI * 2;
    const orbitRadius = 60; // rayon fixe
    moon.style.top = `${50 + Math.sin(angle) * orbitRadius}px`;
    moon.style.left = `${50 + Math.cos(angle) * orbitRadius}px`;

    planetDiv.appendChild(moon);
  }

  section.appendChild(planetDiv);
});
