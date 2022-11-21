let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = function() {
        if (!read) {return `${title} by ${author}, ${pages} pages, not read yet`}
        return `${title} by ${author}, ${pages} pages, has been read`
    }
}


function addBookToLibrary(book) {
    myLibrary.push(book);
}

const theHobbit = new Book("The Hobbit", "J.R.R Tolkien", 295, false);
const thinkingFastAndSlow = new Book("Thinking, Fast and Slow", "Daniel Kahneman", 300, true);
const toKillAMockingbird = new Book("To Kill a Mockingbird", "Harper Lee", 281, false);

addBookToLibrary(theHobbit);
addBookToLibrary(thinkingFastAndSlow);
addBookToLibrary(toKillAMockingbird);

for (let i = 0; i < myLibrary.length; i++) {
    console.log(myLibrary[i].title);
}
