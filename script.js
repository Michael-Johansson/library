"use strict";

const mylibrary = [];
const container = document.getElementById("container");
const addBookBtn = document.getElementById("add-book-btn");
const submitBookbtn = document.getElementById("submit-btn");
const dialog = document.getElementById("dialog");
const bookForm = document.getElementById("book-form");

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const isRead = () => {
    const checkBox = document.getElementById("read");
    return checkBox.checked == true ? true : false;
  };

  const newBook = new Book(title, author, pages, isRead());
  mylibrary.push(newBook);
  renderBooks();
}

function renderBooks() {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }

  mylibrary.forEach((book, index) => {
    const bookCard = document.createElement("div");
    bookCard.classList.add("card");
    container.appendChild(bookCard);

    const bookInfo = document.createElement("div");
    bookInfo.classList.add("book-info");
    bookCard.appendChild(bookInfo);

    const bookTitle = document.createElement("h3");
    bookTitle.classList.add("title");
    bookTitle.textContent = book.title;
    bookInfo.appendChild(bookTitle);

    const bookAuthor = document.createElement("p");
    bookAuthor.classList.add("author");
    bookAuthor.textContent = book.author;
    bookInfo.appendChild(bookAuthor);

    const bookPages = document.createElement("p");
    bookPages.classList.add("pages");
    bookPages.textContent = `${book.pages} pages`;
    bookInfo.appendChild(bookPages);

    const buttonGroup = document.createElement("div");
    buttonGroup.classList.add("book-buttons");
    bookCard.appendChild(buttonGroup);

    const isRead = document.createElement("button");
    isRead.classList.add("read");

    if (book.read == true) {
      isRead.textContent = "Read";
      isRead.style.backgroundColor = "#58e969";
    } else if (book.read == false) {
      book.read == "off";
      isRead.textContent = "Not read";
      isRead.style.backgroundColor = "#ff6464";
    }
    buttonGroup.appendChild(isRead);

    isRead.addEventListener("click", () => {
      if (book.read == false) {
        book.read = true;
      } else if (book.read == true) {
        book.read = false;
      }

      renderBooks();
    });

    const deleteBook = document.createElement("button");
    deleteBook.textContent = "Delete";
    deleteBook.classList.add("delete-book");
    buttonGroup.appendChild(deleteBook);

    deleteBook.addEventListener("click", () => {
      removeBook(index);
      renderBooks();
    });
  });
}

function removeBook(index) {
  return mylibrary.splice(index, 1);
}

addBookBtn.addEventListener("click", () => {
  dialog.show();
});

submitBookbtn.addEventListener("click", () => {
  addBookToLibrary();
  dialog.close();
});
