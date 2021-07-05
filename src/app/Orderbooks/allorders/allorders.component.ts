import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Bookorder } from 'src/app/models/bookorder.model';

@Component({
  selector: 'app-allorders',
  templateUrl: './allorders.component.html',
  styleUrls: ['./allorders.component.css']
})
export class AllordersComponent implements OnInit {
  searchorder:FormGroup;
  booksorder:Bookorder[];
  constructor() { }

  ngOnInit(): void {
  }

}
