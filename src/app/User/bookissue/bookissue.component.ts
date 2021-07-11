import { FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Books } from 'src/app/Books/books.model';
import { BooksService } from 'src/app/Services/books.service';
import { BookIssueService } from 'src/app/Services/book-issue.service';

@Component({
  selector: 'app-bookissue',
  templateUrl: './bookissue.component.html',
  styleUrls: ['./bookissue.component.css']
})
export class BookissueComponent implements OnInit {
  issueBooks: FormGroup;
  books: Books[];
  searchQuery: string;
  @ViewChild('closebutton') closebutton: { nativeElement: { click: () => void; }; };
  constructor(private bookService: BooksService, private bookIssueService: BookIssueService) { }

  ngOnInit(): void {
    this.getAllBooks();
    this.issueBooks = new FormGroup({
      searchText: new FormControl()
    })
  }
  search() {
    this.searchQuery = this.issueBooks.value.searchText;
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
  onClickIssue(bookId: number) {
    this.bookIssueService.issueBook(bookId).subscribe()
  }
}
