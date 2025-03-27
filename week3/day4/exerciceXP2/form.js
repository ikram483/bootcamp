// 1. Retrieve the form and console.log it.
const form = document.getElementById("myForm");
console.log("Form:", form);

// Retrieve the inputs by their name attribute and console.log them.

const fnameInput = document.getElementById("fname");
const lnameInput = document.getElementById("lname");
console.log("Input by ID:", fnameInput, lnameInput);

// Retrieve the inputs by their name attribute and console.log them.

const fnameByName = document.getElementsByName("firstname")[0];
const lnameByName = document.getElementsByName("lastname")[0];
console.log("Input by name:", fnameByName, lnameByName);

// Add event listener for  soumission form
form.addEventListener("submit", function (event) {
  event.preventDefault(); 

  const firstName = fnameInput.value.trim();
  const lastName = lnameInput.value.trim();

  // make sure that they are not empty,

  if (firstName === "" || lastName === "") {
    alert("Please fill out both fields.");
    return;
  }

  const ul = document.querySelector(".usersAnswer");

//  create an li per input value,

  const li1 = document.createElement("li");
  li1.textContent = firstName;

  const li2 = document.createElement("li");
  li2.textContent = lastName;

  // add in  <ul>
  ul.appendChild(li1);
  ul.appendChild(li2);

  form.reset();
});
