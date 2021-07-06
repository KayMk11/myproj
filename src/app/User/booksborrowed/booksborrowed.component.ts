import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Books } from 'src/app/Books/books.model';

@Component({
  selector: 'app-booksborrowed',
  templateUrl: './booksborrowed.component.html',
  styleUrls: ['./booksborrowed.component.css']
})
export class BooksborrowedComponent implements OnInit {
  books:Books[];
  borrowedBooks:FormGroup;
  constructor() { }

  ngOnInit(): void {
  }

}
