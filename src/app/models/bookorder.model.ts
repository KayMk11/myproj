import { Books } from "../Books/books.model";
import { Publisher } from "./publisher.model";

export class Bookorder {
  orderId: number;
  quantity: number;
  orderDate: Date;
  orderStatus: string;
  book: Books;
  publisher: Publisher;
}
