const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

// Afficher les choix
colors.forEach((color, index) => {
  console.log(`${index + 1}# choice is ${color}.`);
});

// Vérifier si "Violet" est présent dans le tableau
if (colors.includes("Violet")) {
  console.log("Yeah");
} else {
  console.log("No...");
}
