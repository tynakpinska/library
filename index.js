const form = document.querySelector("form");
const submitButton = document.getElementById("submit-button");
const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const pagesInput = document.getElementById("pages");
const yearInput = document.getElementById("year");
const descriptionInput = document.getElementById("description");
const booksList = document.querySelector(".books-list");

let myLibrary = [
  {
    title: "Sample book",
    author: "Who knows",
    pages: 234,
    year: "1992",
    description: "Great book",
  },
];

generateBooksList();

function Book(title, author, pages, year, description, id) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.year = year;
  this.description = description;
  this.id = id;
}

function addBookToLibrary() {
  const title = titleInput.value;
  const author = authorInput.value;
  const pages = pagesInput.value;
  const year = yearInput.value;
  const description = descriptionInput.value;
  const id = myLibrary.length + 1;
  const book = new Book(title, author, pages, year, description, id);
  myLibrary.push(book);
  form.reset();
  generateBooksList();
}

submitButton.addEventListener("click", e => {
  e.preventDefault();
  addBookToLibrary();
});

function generateBooksList() {
  myLibrary.forEach(book => {
    const bookNode = document.createElement("div");
    bookNode.className = "bookCard";

    const bookTitle = document.createElement("p");
    bookTitle.append(book.title);
    bookNode.append(bookTitle);

    const bookAuthor = document.createElement("p");
    bookAuthor.append(book.author);
    bookNode.append(bookAuthor);

    const bookPages = document.createElement("p");
    bookPages.append(book.pages);
    bookNode.append(bookPages);

    const bookYear = document.createElement("p");
    bookYear.append(book.year);
    bookNode.append(bookYear);

    const bookDescription = document.createElement("p");
    bookDescription.append(book.description);
    bookNode.append(bookDescription);

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    bookNode.append(removeButton);

    const statusButton = document.createElement("button");
    statusButton.textContent = "Read";
    bookNode.append(statusButton);

    booksList.append(bookNode);
  });
}
