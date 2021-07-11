export class BookWrapper {
    bookId: number;
    title: string;
    subject: string;
    authorIdList: number[];
    publisherId: number;
    publishedYear: number;
    isbn: string;
    quantity: number;
    shelfDetails: string;
    bookCost: number;
    constructor(bookId: number, title: string, subject: string, authors: number[], publisher: number, publishedYear: number,
        isbn: string, quantity: number, shelfDetails: string, bookCost: number) {
        this.bookId = bookId;
        this.title = title;
        this.subject = subject;
        this.authorIdList = authors;
        this.publisherId = publisher;
        this.publishedYear = publishedYear;
        this.isbn = isbn;
        this.quantity = quantity;
        this.shelfDetails = shelfDetails;
        this.bookCost = bookCost;
    }
}
