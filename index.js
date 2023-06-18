const submitButton = document.getElementById("submit-button");
const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");

let myLibrary = [];

function Book(title, author) {
    this.title = title;
    this.author = author;
}

function addBookToLibrary() {
    const title = titleInput.value;
    const author = authorInput.value;
    const book = new Book(title, author);
    myLibrary.push(book);
    console.log(myLibrary)
}

submitButton.addEventListener("click", e => {
  e.preventDefault();
  addBookToLibrary();
});

console.log("test");
