import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Publisher } from 'src/app/models/publisher.model';

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
