const API_KEY = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";
const form = document.getElementById("gifForm");
const input = document.getElementById("categoryInput");
const gifContainer = document.getElementById("gifContainer");
const deleteAllBtn = document.getElementById("deleteAllBtn");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const category = input.value.trim();

  if (category === "") return;

  const url = `https://api.giphy.com/v1/gifs/random?tag=${category}&rating=g&api_key=${API_KEY}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();
    const gifUrl = data.data.images.fixed_height.url;

    // Create gif wrapper
    const wrapper = document.createElement("div");
    wrapper.className = "gif-wrapper";

    const img = document.createElement("img");
    img.src = gifUrl;
    img.alt = category;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "DELETE";
    deleteBtn.addEventListener("click", () => {
      wrapper.remove();
    });

    wrapper.appendChild(img);
    wrapper.appendChild(deleteBtn);
    gifContainer.appendChild(wrapper);
  } catch (error) {
    console.error("Fetching error:", error);
    alert("Something went wrong. Please try again.");
  }

  input.value = ""; // Reset input field
});

deleteAllBtn.addEventListener("click", () => {
  gifContainer.innerHTML = "";
});
