export class OrderWrapper {
    quantity: number;
    bookId: number;
    publisherId: number;
    constructor(quantity: number, bookId: number, publisherId: number) {
        this.quantity = quantity;
        this.bookId = bookId;
        this.publisherId = publisherId;
    }
}
