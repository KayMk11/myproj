import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Author } from 'src/app/models/author.model';

@Component({
  selector: 'app-allauthors',
  templateUrl: './allauthors.component.html',
  styleUrls: ['./allauthors.component.css']
})
export class AllauthorsComponent implements OnInit {
  searchAuthor:FormGroup;
  authors:Author[];
  constructor() { }

  ngOnInit(): void {
  }

}
