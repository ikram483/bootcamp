(function(username) {
    const navbar = document.getElementById("navbar");
  
    const userDiv = document.createElement("div");
    userDiv.classList.add("user-info");
  
    const img = document.createElement("img");
    img.src = "https://i.pravatar.cc/40"; 
    img.alt = "Profile Picture";
  
    const nameSpan = document.createElement("span");
    nameSpan.textContent = `Welcome, ${username}!`;
  
    userDiv.appendChild(img);
    userDiv.appendChild(nameSpan);
    navbar.appendChild(userDiv);
  
  })("John");
  