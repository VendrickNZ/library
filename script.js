let myLibrary = [];
let index = 0;
const cardContainer = document.querySelector(".card-container");
const addNewBook = document.getElementById('add-book');
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const openModalBtn = document.querySelector(".btn-open");
const closeModalBtn = document.querySelector(".btn-close");
const bookReadBtn = document.getElementById('book-read');
const submitBtn = document.getElementById('submit');
const displayedBooks = document.querySelector('.displayed-books');



//functions
const openModal = function () {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
};

const closeModal = function () {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
};

function createCard() {
    const cardBody = document.createElement('div');
    const cardTitleAndAuthor = document.createElement('h4');
    const pages = document.createElement('h5');
    const read = document.createElement('button');
    cardBody.classList.add('card');
    cardTitleAndAuthor.classList.add('card');
    pages.classList.add('card');
    read.classList.add('card');
}

function Book(title, author, pages, read, instance) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.instance = instance; //something something stable min heap technology?

    this.info = function() {
        if (!read) {return `${title} by ${author}, ${pages} pages, not read yet`}
        return `${title} by ${author}, ${pages} pages, has been read`
    }
}

function addBookToLibrary(book) {
    myLibrary.push(book);
    displayNewBook(book);
}

let readBook = (read) => read ? `Has read` : `Has not read`;

function displayNewBook(book) {
    const newBookToDisplay = document.createElement('div');
    const newBookTitle = document.createElement('h2');
    const newBookAuthor = document.createElement('h2');
    const newBookPages = document.createElement('h2');
    const newBookRead = document.createElement('h2');
    const removeBtn = document.createElement('button');
    newBookTitle.textContent = book.title;
    newBookAuthor.textContent = book.author;
    newBookPages.textContent = `Number of pages: ${book.pages}`;
    newBookRead.textContent = readBook(book.read);
    removeBtn.textContent = "Remove";
    removeBtn.addEventListener('click', () => {
        newBookToDisplay.remove();
        removeBook(book.instance);
    })
    newBookToDisplay.classList.add('book-div');
    newBookTitle.classList.add('bookAttributes');
    newBookAuthor.classList.add('bookAttributes');
    newBookPages.classList.add('bookAttributes');
    newBookRead.classList.add('bookAttributes');
    removeBtn.classList.add('removeBtn');
    displayedBooks.appendChild(newBookToDisplay);
    newBookToDisplay.appendChild(newBookTitle);
    newBookToDisplay.appendChild(newBookAuthor);
    newBookToDisplay.appendChild(newBookPages);
    newBookToDisplay.appendChild(newBookRead);
    newBookToDisplay.appendChild(removeBtn);

}

function removeBook(instance) {
    for (let i = 0; i < myLibrary.length; i++) {
        console.log(instance, myLibrary[i].bookInstance);
        if (myLibrary[i].instance === instance) {
            myLibrary.pop(myLibrary[i]);
        }
    }
}

function createBook() {
    let bookTitle = document.getElementById('book-title').value;
    let bookAuthor = document.getElementById('book-author').value;
    let bookPages = document.getElementById('book-pages').value;
    let bookRead = document.getElementById('book-read').textContent;
    let bookInstance = index;
    console.log(bookTitle, bookInstance);
    index++;
    if ((typeof(bookTitle) === String) && (typeof(bookAuthor) === String) && !(isNaN(bookPages))) {
        alert("Only letters and spaces allowed for title and author, only numbers allowed for the number of pages.")
        return
    }

    bookRead == "Not read" ? addBookToLibrary(new Book(bookTitle, bookAuthor, bookPages, true, bookInstance)) :
    addBookToLibrary(new Book(bookTitle, bookAuthor, bookPages, false, bookInstance))
}



//event listeners
document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
    }
});

openModalBtn.addEventListener("click", openModal);

overlay.addEventListener("click", closeModal);

closeModalBtn.addEventListener("click", closeModal);

addNewBook.addEventListener("click", () => {
    createCard();
})

submitBtn.addEventListener('click', () => {
    createBook();
})

bookReadBtn.addEventListener('click', () => {
    bookReadBtn.textContent === "Read" ? (bookReadBtn.style.backgroundColor = '#e0163b',
    bookReadBtn.textContent = "Not read") : (bookReadBtn.style.backgroundColor = '#19c222',
    bookReadBtn.textContent = "Read");
})