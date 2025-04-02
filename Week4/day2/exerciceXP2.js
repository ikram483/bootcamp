const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th", "st", "nd", "rd"];

// Boucle pour afficher chaque couleur avec son rang
colors.forEach((color, index) => {
  const pos = index + 1;
  const suffix = (pos === 1) ? ordinal[1] :
                 (pos === 2) ? ordinal[2] :
                 (pos === 3) ? ordinal[3] :
                 ordinal[0];

  console.log(`${pos}${suffix} choice is ${color}.`);
});
