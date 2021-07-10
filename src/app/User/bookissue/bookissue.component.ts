import { FormGroup } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Books } from 'src/app/Books/books.model';

@Component({
  selector: 'app-bookissue',
  templateUrl: './bookissue.component.html',
  styleUrls: ['./bookissue.component.css']
})
export class BookissueComponent implements OnInit {
  issueBooks: FormGroup;
  books: Books[];
  @ViewChild('closebutton') closebutton: { nativeElement: { click: () => void; }; };
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit() {

  }

}
