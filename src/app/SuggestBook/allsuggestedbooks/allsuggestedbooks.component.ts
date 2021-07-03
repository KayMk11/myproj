import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { SuggestedBooks } from '../suggestbook.model';

@Component({
  selector: 'app-allsuggestedbooks',
  templateUrl: './allsuggestedbooks.component.html',
  styleUrls: ['./allsuggestedbooks.component.css']
})
export class AllsuggestedbooksComponent implements OnInit {
  searchsuggested:FormGroup;
  SuggestedBooks:SuggestedBooks[];
  constructor() { }

  ngOnInit(): void {
  }

}
