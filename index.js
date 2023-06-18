const submitButton = document.getElementById("submit-button");
const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const pagesInput = document.getElementById("pages");
const yearInput = document.getElementById("year");
const descriptionInput = document.getElementById("description");

let myLibrary = [];

function Book(title, author, pages, year, description) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.year = year;
  this.description = description;
}

function addBookToLibrary() {
  const title = titleInput.value;
  const author = authorInput.value;
  const pages = pagesInput.value;
  const year = yearInput.value;
  const description = descriptionInput.value;
  const book = new Book(title, author, pages, year, description);
  myLibrary.push(book);
  titleInput.value = "";
  authorInput.value = "";
  pagesInput.value = "";
  yearInput.value = "";
  descriptionInput.value = "";
  console.log(myLibrary);
}

submitButton.addEventListener("click", e => {
  e.preventDefault();
  addBookToLibrary();
});

console.log("test");
