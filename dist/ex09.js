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
    constructor(id, name, contact, lendedBooks, status) {
        this.id = id;
        this.name = name;
        this.contact = contact;
        this.lendedBooks = lendedBooks;
        this.status = status;
    }
    setStatus(status) {
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
    registerMember(member) {
        this.members.push(member);
    }
    blockMember(memberId) {
        const member = this.members.find((member) => member.id === memberId);
        if (member !== -1) {
            if ((member === null || member === void 0 ? void 0 : member.status) === true) {
                member.setStatus(false);
            }
        }
    }
    showMembers() {
        this.members.forEach((member) => {
            console.log(`ID : ${member.id}, Name: ${member.name}, Contact: ${member.contact}, Status: ${member.status}`);
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
const member1 = new Member("User01", "Nguyễn Văn A", "0123456789", [], true);
library.registerMember(member1);
library.blockMember("User01");
library.showMembers();
export {};
//# sourceMappingURL=ex09.js.map