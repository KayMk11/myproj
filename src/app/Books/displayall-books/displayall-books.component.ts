import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Books } from '../books.model';

@Component({
  selector: 'app-displayall-books',
  templateUrl: './displayall-books.component.html',
  styleUrls: ['./displayall-books.component.css']
})
export class DisplayallBooksComponent implements OnInit {
  searchBooks:FormGroup;
  books:Books[]=[];
  constructor() { }

  ngOnInit(): void {
  }

}
