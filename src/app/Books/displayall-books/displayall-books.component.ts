import { FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Books } from '../books.model';
import { BooksService } from 'src/app/Services/books.service';

@Component({
  selector: 'app-displayall-books',
  templateUrl: './displayall-books.component.html',
  styleUrls: ['./displayall-books.component.css']
})
export class DisplayallBooksComponent implements OnInit {
  searchBooks: FormGroup;
  searchQuery: string;
  books: Books[] = [];

  constructor(private bookService: BooksService) { }

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



}
