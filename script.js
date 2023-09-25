"use strict";

const mylibrary = [];
const container = document.getElementById("container");
const addBookBtn = document.getElementById("add-book-btn");

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  const title = prompt("Title?");
  const author = prompt("Author?");
  const pages = prompt("Pages?");
  const isRead = prompt("Have you read this book?");
  const newBook = new Book(title, author, pages, isRead);

  mylibrary.push(newBook);
  renderBooks();
}

function renderBooks() {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }

  mylibrary.forEach((book) => {
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

    const isRead = document.createElement("button");
    isRead.classList.add("read");
    isRead.textContent = book.read;
    bookCard.appendChild(isRead);
  });
}

addBookBtn.addEventListener("click", addBookToLibrary);
