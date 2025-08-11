class Book {
    constructor(id, title, author, stock, status) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.stock = stock;
        this.status = status;
    }
}
class Member {
    constructor(id, title, contact, lendedBooks, status) {
        this.id = id;
        this.title = title;
        this.contact = contact;
        this.lendedBooks = lendedBooks;
        this.status = status;
    }
}
class LendedBooks {
    constructor(memberId, bookId, dueDate) {
        this.memberId = memberId;
        this.bookId = bookId;
        this.dueDate = dueDate;
    }
}
class Library {
    constructor(books, members) {
        this.books = books;
        this.members = members;
    }
    addBook(book) {
        this.books.push(book);
    }
    showBook() {
        this.books.forEach((book) => {
            console.log(` ID: ${book.id}, Title: ${book.title}, Author: ${book.author}, Stock: ${book.stock}, Status: ${book.status}`);
        });
    }
}
const book1 = new Book("B01", "Học lập trình cơ bản", "NVA", 20, true);
const book2 = new Book("B01", "JavaScript", "TVC", 30, true);
const book3 = new Book("B01", "C", "PNV", 10, true);
const library = new Library([], []);
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.showBook();
export {};
//# sourceMappingURL=ex08.js.map