//  change the value of the id attribute from navBar to socialNetworkNavigation,

const navDiv = document.getElementById("navBar");
navDiv.setAttribute("id", "socialNetworkNavigation");

//add a new <li> to the <ul>
const newLi = document.createElement("li");
const newLink = document.createElement("a");
newLink.href = "#";
newLink.textContent = "Logout";
newLi.appendChild(newLink);
const ul = document.querySelector("#socialNetworkNavigation ul");
ul.appendChild(newLi);

const firstLi = ul.firstElementChild;
const lastLi = ul.lastElementChild;


console.log("Premier lien :", firstLi.textContent);  // "Profile"
console.log("Dernier lien :", lastLi.textContent);   // "Logout"
