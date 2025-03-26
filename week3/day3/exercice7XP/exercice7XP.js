const allBooks = [
    {
      title: "The Alchemist",
      author: "Paulo Coelho",
      image: "https://images-na.ssl-images-amazon.com/images/I/51Z0nLAfLmL._SX324_BO1,204,203,200_.jpg",
      alreadyRead: true
    },
    {
      title: "Atomic Habits",
      author: "James Clear",
      image: "https://images-na.ssl-images-amazon.com/images/I/513Y5o-DYtL._SX331_BO1,204,203,200_.jpg",
      alreadyRead: false
    }
  ];
  
  const section = document.querySelector(".listBooks");
  
  allBooks.forEach(book => {
    const bookDiv = document.createElement("div");
    bookDiv.classList.add("book");
  
    const text = document.createElement("p");
    text.textContent = `${book.title} written by ${book.author}`;
  
    if (book.alreadyRead) {
      text.classList.add("read");
    }
  
    const img = document.createElement("img");
    img.src = book.image;
    img.alt = book.title;
  
    bookDiv.appendChild(img);
    bookDiv.appendChild(text);
    section.appendChild(bookDiv);
  });
  