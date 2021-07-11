import { Bookissue } from './../../models/bookissue.model';
import { FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { BookIssueService } from 'src/app/Services/book-issue.service';

@Component({
  selector: 'app-booksborrowed',
  templateUrl: './booksborrowed.component.html',
  styleUrls: ['./booksborrowed.component.css']
})
export class BooksborrowedComponent implements OnInit {
  booksborrowed: Bookissue[];
  borrowedBooks: FormGroup;
  searchQuery: string;
  constructor(private bookIssueService: BookIssueService) { }

  ngOnInit(): void {
    this.getBorrowHistory()
    this.borrowedBooks = new FormGroup({
      searchText: new FormControl()
    })
  }
  search() {
    this.searchQuery = this.borrowedBooks.value.searchText;
    if (this.searchQuery === '')
      this.getBorrowHistory()
    else if (!isNaN(Number(this.searchQuery)))
      this.getBorrowHistoryByBookId(Number(this.searchQuery))
  }
  getBorrowHistory() {
    this.bookIssueService.borrowHistory().subscribe(
      data => {
        this.booksborrowed = data;
      }
    )
  }
  getBorrowHistoryByBookId(id: number) {
    this.bookIssueService.borrowHistoryById(id).subscribe(
      data => {
        this.booksborrowed = [data];
      }
    )
  }
  onClickReturn(id: number) {
    this.bookIssueService.returnBook(id).subscribe()
  }
}
