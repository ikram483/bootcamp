// Retrieve the div and console.log it

const container = document.getElementById("container");
console.log(container);

// change “Pete” to “Richard”
const firstUl = document.querySelectorAll(".list")[0];
firstUl.children[1].textContent = "Richard";

// delete 2e <li> du 2e <ul>
const secondUl = document.querySelectorAll(".list")[1];
secondUl.children[1].remove(); // Supprime "Sarah"
//Change the name of the first <li> of each <ul> to your name. (Hint : use a loop)

const allUls = document.querySelectorAll(".list");
allUls.forEach(ul => {
  ul.children[0].textContent = "Ikram";
});

//Add a class called student_list to both of the <ul>'s.

allUls.forEach(ul => {
  ul.classList.add("student_list");
});

// Add the classes university and attendance to the first <ul>.

firstUl.classList.add("university", "attendance");

// Add a “light blue” background color and some padding to the <div>.(with CSS)

// Do not display the <li> that contains the text node “Dan”. (the last <li> of the first <ul>)
Array.from(secondUl.children).forEach(li => {
  if (li.textContent === "Dan") {
    li.style.display = "none";
  }
});

//Add a border to the <li> that contains the text node “Richard”. (the second <li> of the <ul>)
Array.from(firstUl.children).forEach(li => {
  if (li.textContent === "Richard") {
    li.classList.add("highlight");
  }
});

//  Change the font size of the whole body.(with CSS)

// Bonus: If the background color of the div is “light blue”, alert “Hello x and y” (x and y are the users in the div).

const bgColor = getComputedStyle(container).backgroundColor;
if (bgColor === "rgb(173, 216, 230)") {
  const users = container.textContent.replace("Users:", "").trim();
  alert(`Bonjour ${firstUl.children[0].textContent} et ${firstUl.children[1].textContent}`);
}
