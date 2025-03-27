// retrieve the h1 and console.log it.
const h1 = document.querySelector("h1");
console.log("H1:", h1.textContent);

//remove the last paragraph
const article = document.querySelector("article");
const lastP = article.querySelector("p:last-of-type");
article.removeChild(lastP);

//change the background color of the h2 to red, when it’s clicked on
const h2 = document.querySelector("h2");
h2.addEventListener("click", function () {
  h2.style.backgroundColor = "red";
});

//hide the h3 when it’s clicked on (use the display:none property).

const h3 = document.querySelector("h3");
h3.addEventListener("click", function () {
  h3.style.display = "none";
});

//Add a <button> to the HTML file, that when clicked on, should make the text of all the paragraphs, bold.
const boldButton = document.getElementById("boldBtn");
boldButton.addEventListener("click", function () {
  const allParagraphs = document.querySelectorAll("p");
  allParagraphs.forEach(p => {
    p.style.fontWeight = "bold";
  });
});

// BONUS 1 :set the font size to a random pixel size between 0 to 100.(Check out this documentation)
h1.addEventListener("mouseover", function () {
  const randomSize = Math.floor(Math.random() * 101); // entre 0 et 100
  h1.style.fontSize = `${randomSize}px`;
});

// BONUS 2 : When you hover on the 2nd paragraph, it should fade out (Check out “fade css animation” on Google)
const secondParagraph = document.querySelectorAll("p")[1];
secondParagraph.addEventListener("mouseover", function () {
  secondParagraph.classList.add("fade-out");
});
