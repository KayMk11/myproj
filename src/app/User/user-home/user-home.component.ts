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
  constructor() { }

  ngOnInit(): void {
    this.roles = sessionStorage.getItem('roles')
    this.token = sessionStorage.getItem('token')
  }
  onSubmit(){
  }

}
