function myMove() {
    const box = document.getElementById("animate");
    let position = 0;
  
    const interval = setInterval(() => {
      if (position >= 350) { 
        clearInterval(interval); 
      } else {
        position++; 
        box.style.left = position + "px";
      }
    }, 1); 
  }
  