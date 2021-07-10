import { Books } from "../Books/books.model";

export class DamagedBook{
  id:number;
  book:Books;
  description:string;
  quantity:number;

  constructor( id:number,book:Books, description:string,quantity:number){
    this.id = id;
    this.book= book;
    this.description = description;
    this.quantity = quantity;
  }
}
