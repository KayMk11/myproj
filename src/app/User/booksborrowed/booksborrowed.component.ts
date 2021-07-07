import { Bookissue } from './../../models/bookissue.model';
import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-booksborrowed',
  templateUrl: './booksborrowed.component.html',
  styleUrls: ['./booksborrowed.component.css']
})
export class BooksborrowedComponent implements OnInit {
  booksborrowed:Bookissue[];
  borrowedBooks:FormGroup;
  constructor() { }

  ngOnInit(): void {
  }

}
