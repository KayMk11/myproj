import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Books } from '../books.model';

@Component({
  selector: 'app-booksearch',
  templateUrl: './booksearch.component.html',
  styleUrls: ['./booksearch.component.css']
})
export class BooksearchComponent implements OnInit {
  search: FormGroup;
  books: Books[] = [];
  constructor() { }
  ngOnInit(): void {
  }

}
