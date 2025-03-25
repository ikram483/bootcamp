const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
      firstFloor: 3,
      secondFloor: 4,
      thirdFloor: 9,
      fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent: {
      sarah: [3, 990],
      dan: [4, 1000],
      david: [1, 500],
    },
  };
  
  // 1. Nombre d'étages
  console.log("Nombre d'étages :", building.numberOfFloors);
  
  // 2. Appartements aux étages 1 et 3
  console.log(
    "Appartements au 1er et 3ème étage :",
    building.numberOfAptByFloor.firstFloor + building.numberOfAptByFloor.thirdFloor
  );
  
  // 3. Nom du 2ème locataire + nombre de pièces
  const secondTenant = building.nameOfTenants[1];
  const rooms = building.numberOfRoomsAndRent[secondTenant.toLowerCase()][0];
  console.log(`Le 2ème locataire est ${secondTenant}, il a ${rooms} pièces.`);
  
  // 4. Vérification et augmentation du loyer
  const sarahRent = building.numberOfRoomsAndRent.sarah[1];
  const davidRent = building.numberOfRoomsAndRent.david[1];
  const danRent = building.numberOfRoomsAndRent.dan[1];
  
  if (sarahRent + davidRent > danRent) {
    building.numberOfRoomsAndRent.dan[1] = 1200;
    console.log("Le loyer de Dan a été augmenté à 1200€.");
  } else {
    console.log("Le loyer de Dan reste inchangé.");
  }
  
  console.log("Récapitulatif des loyers :", building.numberOfRoomsAndRent);


  