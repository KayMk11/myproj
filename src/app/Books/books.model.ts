import { Author } from "../models/author.model";
import { Publisher } from "../models/publisher.model";

export class Books {
	bookId: number;
	title: string;
	subject: string;
	authors: Author[];
	publisher: Publisher;
	publishedYear: number;
	isbn: string;
	quantity: number;
	shelfDetails: string;
	bookCost: number;
	constructor(bookId: number, title: string, subject: string, authors: Author[], publisher: Publisher, publishedYear: number,
		isbn: string, quantity: number, shelfDetails: string, bookCost: number) {
		this.bookId = bookId;
		this.title = title;
		this.subject = subject;
		this.authors = authors;
		this.publisher = publisher;
		this.publishedYear = publishedYear;
		this.isbn = isbn;
		this.quantity = quantity;
		this.shelfDetails = shelfDetails;
		this.bookCost = bookCost;
	}
}
