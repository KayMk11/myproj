import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Books } from '../books.model';
import { BooksService } from 'src/app/Services/books.service';
import { BookWrapper } from '../addbook/book-wrapper.model';

@Component({
  selector: 'app-displayall-books',
  templateUrl: './displayall-books.component.html',
  styleUrls: ['./displayall-books.component.css']
})
export class DisplayallBooksComponent implements OnInit {
  searchBooks: FormGroup;
  searchQuery: string;
  books: Books[] = [];
  book: Books;

  BookUpdateForm = this.fb.group({
    bookId: { value: '', disabled: true },
    Title: ['', [Validators.required]],
    subject: ['', [Validators.required]],
    publishedYear: ['', [Validators.required]],
    publisherId: ['', [Validators.required]],
    isbn: ['', [Validators.required]],
    quantity: ['', [Validators.required]],
    shelfDetails: ['', [Validators.required]],
    bookCost: ['', [Validators.required]],
    authorIdList: this.fb.array([this.createElement()])
  })
  constructor(private bookService: BooksService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.getAllBooks();
    this.searchBooks = new FormGroup({
      searchText: new FormControl()
    })
  }

  search() {
    this.searchQuery = this.searchBooks.value.searchText;
    if (this.searchQuery === '')
      this.getAllBooks()
    else if (this.searchQuery[0] === '-')
      this.getBookBySubject(this.searchQuery.substring(1))
    else if (this.searchQuery[0] === '+')
      this.getBookByNameStartsWith(this.searchQuery.substring(1))
    else if (this.searchQuery[this.searchQuery.length - 1] === '+')
      this.getBookByNameEndsWith(this.searchQuery.substring(0, this.searchQuery.length - 1))
    else
      this.getBookByNameLike(this.searchQuery)

  }
  private getAllBooks() {
    this.bookService.getAllBooks().subscribe(
      data => {
        this.books = data;
        console.log(data)
      }
    )
  }
  private getBookByNameLike(name: string) {
    this.bookService.getBooksNameLike(name).subscribe(
      data => {
        this.books = data;
        console.log(data)
      }
    )
  }
  private getBookByNameStartsWith(name: string) {
    this.bookService.getBooksNameStartsWith(name).subscribe(
      data => {
        this.books = data;
        console.log(data)
      }
    )
  }
  private getBookByNameEndsWith(name: string) {
    this.bookService.getBooksNameEndsWith(name).subscribe(
      data => {
        this.books = data;
        console.log(data)
      }
    )
  }
  private getBookBySubject(name: string) {
    this.bookService.getBooksBySubject(name).subscribe(
      data => {
        this.books = data;
        console.log(data)
      }
    )
  }
  createElement() {
    return this.fb.control('', Validators.required);
  }
  addAuthor() {
    this.authorIdList.push(this.createElement());
  }
  get authorIdList() {
    return this.BookUpdateForm.get('authorIdList') as FormArray;
  }
  onClickUpdate(id: number) {
    this.bookService.getBooksById(id).subscribe(data => {
      this.book = data;
      this.newUpdateForm();
    })
  }
  newUpdateForm() {
    this.BookUpdateForm.patchValue({
      bookId: this.book.bookId,
      Title: this.book.bookId,
      subject: this.book.subject,
      publishedYear: this.book.subject,
      publisherId: this.book.publisher.publisherId,
      isbn: this.book.isbn,
      quantity: this.book.quantity,
      shelfDetails: this.book.shelfDetails,
      bookCost: this.book.bookCost

      // authorIdList = 
    });
  }
  deleteControl(i: number) {
    if (this.authorIdList.length !== 1) {
      this.authorIdList.removeAt(i);
    }
  }
  onSubmit() {
    let book: BookWrapper = new BookWrapper(null, '', '', [], null, null, '', null, '', null)
    book.bookId = this.BookUpdateForm.getRawValue().bookId;
    book.title = this.BookUpdateForm.value.Title;
    book.subject = this.BookUpdateForm.value.subject;
    book.publishedYear = this.BookUpdateForm.value.publishedYear;
    book.publisherId = this.BookUpdateForm.value.publisherId;
    book.isbn = this.BookUpdateForm.value.isbn;
    book.quantity = this.BookUpdateForm.value.quantity;
    book.shelfDetails = this.BookUpdateForm.value.shelfDetails;
    book.bookCost = this.BookUpdateForm.value.bookCost;
    book.authorIdList = this.BookUpdateForm.value.authorIdList

    this.bookService.updateBook(book)
  }


}
