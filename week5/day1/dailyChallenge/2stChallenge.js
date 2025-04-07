const morse = `{
    "0": "-----", "1": ".----", "2": "..---", "3": "...--", "4": "....-",
    "5": ".....", "6": "-....", "7": "--...", "8": "---..", "9": "----.",
    "a": ".-", "b": "-...", "c": "-.-.", "d": "-..", "e": ".", "f": "..-.",
    "g": "--.", "h": "....", "i": "..", "j": ".---", "k": "-.-", "l": ".-..",
    "m": "--", "n": "-.", "o": "---", "p": ".--.", "q": "--.-", "r": ".-.",
    "s": "...", "t": "-", "u": "..-", "v": "...-", "w": ".--", "x": "-..-",
    "y": "-.--", "z": "--..", ".": ".-.-.-", ",": "--..--", "?": "..--..",
    "!": "-.-.--", "-": "-....-", "/": "-..-.", "@": ".--.-.", "(": "-.--.",
    ")": "-.--.-"
  }`;
  
  function toJs() {
    return new Promise((resolve, reject) => {
      const morseObj = JSON.parse(morse);
      if (Object.keys(morseObj).length === 0) {
        reject("Morse object is empty");
      } else {
        resolve(morseObj);
      }
    });
  }
  
  function toMorse(morseJS, userInput) {
    return new Promise((resolve, reject) => {
      const result = [];
  
      for (let char of userInput.toLowerCase()) {
        if (morseJS[char]) {
          result.push(morseJS[char]);
        } else {
          reject(`Character "${char}" not found in Morse dictionary.`);
          return;
        }
      }
  
      resolve(result);
    });
  }
  
  function joinWords(morseTranslation) {
    console.log("Morse Translation:\n" + morseTranslation.join("\n"));
  }
  
  // ---------------------
  // READLINE for user input
  const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question("Enter a word or sentence to convert to Morse: ", input => {
    toJs()
      .then(morseObj => toMorse(morseObj, input))
      .then(result => joinWords(result))
      .catch(error => console.log("Error:", error))
      .finally(() => readline.close());
  });
  