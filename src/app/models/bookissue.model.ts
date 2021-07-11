import { Books } from "../Books/books.model";

export class Bookissue {
  issueId: number;
  book: Books;
  userId: number;
  issueDate: Date;
  returnDate: Date;
  fine: number;
  status: string;

}
