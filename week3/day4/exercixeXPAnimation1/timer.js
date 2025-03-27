// PART I: alert after 2 seconds
setTimeout(() => {
    alert("Hello World");
  }, 2000);
  
  // PART II: add one <p>Hello World</p> after 2 seconds
  setTimeout(() => {
    const p = document.createElement("p");
    p.textContent = "Hello World";
    document.getElementById("container").appendChild(p);
  }, 2000);
  
  // PART III: add <p>Hello World</p> every 2 seconds, stop after 5 OR on button click
  const container = document.getElementById("container");
  const clearBtn = document.getElementById("clear");
  
  let paragraphCount = 0; // compteur
  const intervalId = setInterval(() => {
    if (paragraphCount >= 5) {
      clearInterval(intervalId);
      return;
    }
  
    const p = document.createElement("p");
    p.textContent = "Hello World";
    container.appendChild(p);
    paragraphCount++;
  }, 2000);
  
  // BONUS: stop if user clicks the button
  clearBtn.addEventListener("click", () => {
    clearInterval(intervalId);
  });
  