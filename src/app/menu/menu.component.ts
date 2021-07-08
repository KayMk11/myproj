import { AuthService } from 'src/app/Services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  currentUser: any;

  constructor(private authservice:AuthService) {
  }
  ngOnInit(): void {
  }

  isLoggedIn(){
  //  return sessionStorage.getItem('roles') !== null;
    return this.authservice.isLoggedIn();
  }

  logout(){
    this.authservice.logout()
  }

  isUser(){
    return sessionStorage.getItem('roles') == '["ROLE_USER"]';
  }

  isAdmin(){
    return sessionStorage.getItem('roles') == '["ROLE_ADMIN"]';
  }
}
