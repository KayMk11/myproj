import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { DamagedBooks } from '../DamagedBook.model';

@Component({
  selector: 'app-displayall-damagedbooks',
  templateUrl: './displayall-damagedbooks.component.html',
  styleUrls: ['./displayall-damagedbooks.component.css']
})
export class DisplayallDamagedbooksComponent implements OnInit {
  searchDamaged:FormGroup;
  DamagedBooks:DamagedBooks[];
  constructor() { }

  ngOnInit(): void {
  }

}
