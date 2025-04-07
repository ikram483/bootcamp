function makeAllCaps(words) {
    return new Promise((resolve, reject) => {
      if (words.every(word => typeof word === "string")) {
        const uppercased = words.map(word => word.toUpperCase());
        resolve(uppercased);
      } else {
        reject("Error: Not all items are strings.");
      }
    });
  }
  
  function sortWords(words) {
    return new Promise((resolve, reject) => {
      if (words.length > 4) {
        resolve(words.sort());
      } else {
        reject("Error: The array has 4 or fewer items.");
      }
    });
  }
  
  makeAllCaps([1, "pear", "banana"])
    .then(arr => sortWords(arr))
    .then(result => console.log("Result:", result))
    .catch(error => console.log("Error:", error));
  
  makeAllCaps(["apple", "pear", "banana"])
    .then(arr => sortWords(arr))
    .then(result => console.log("Result:", result))
    .catch(error => console.log("Error:", error));
  
  makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
    .then(arr => sortWords(arr))
    .then(result => console.log("Result:", result))
    .catch(error => console.log("Error:", error));
  