// Création d'un objet family
const family = {
    dad: "Hassane",
    mom: "Fatima",
    son: "oussama",
    daughter: "ikram"
  };
  
  // Afficher les clés (noms des rôles)
  console.log("Clés de l'objet :");
  for (let key in family) {
    console.log(key);
  }
  
  // Afficher les valeurs (noms des membres)
  console.log("Valeurs de l'objet :");
  for (let key in family) {
    console.log(family[key]);
  }
  