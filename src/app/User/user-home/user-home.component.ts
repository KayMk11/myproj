import { FormGroup } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { UserAddress } from 'src/app/models/useraddress.model';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {
  addaddress:FormGroup;
  viewaddress:FormGroup;
  submitted = false;
  @ViewChild('closebutton') closebutton: { nativeElement: { click: () => void; }; };
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
  }

}
