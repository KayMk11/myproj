import { User } from 'src/app/models/users.model';
import { FormGroup } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { UserAddress } from 'src/app/models/useraddress.model';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {
  token: string
  roles: string
  userName:string;
  constructor() {

   }

  ngOnInit(): void {

  }

  onSubmit(){
  }

  getuser():string {
    return sessionStorage.getItem('userName')
  }
}
