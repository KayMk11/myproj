import { FormGroup } from '@angular/forms';
import { Publisher } from './../publisher.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-all',
  templateUrl: './display-all.component.html',
  styleUrls: ['./display-all.component.css']
})
export class DisplayAllComponent implements OnInit {
  searchPublisher:FormGroup;
  publishers:Publisher[];
  constructor() { }

  ngOnInit(): void {
  }

}
