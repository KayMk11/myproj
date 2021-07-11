import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted: boolean = false;
  errorMessage = '';
  isLoggedin = false;
  isLoginFailed = false;
  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: new FormControl(null, [Validators.required, Validators.minLength(5), Validators.maxLength(10)]),
      password: new FormControl(null, [Validators.required, Validators.pattern('^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=\\S+$).{8,20}$'),
      Validators.minLength(8), Validators.maxLength(20)])
    });
  }

  onSubmit() {
    this.submitted = true;

    this.authService.login(this.loginForm.value.username, this.loginForm.value.password).subscribe(
      data => {
        this.isLoggedin = true
        this.navigateTo()
        console.log("logged in");
        console.log(sessionStorage.getItem('roles'));
      },
      error => {
        console.log(error);
        this.errorMessage = error;
        this.isLoggedin = false;
        this.isLoginFailed = true;
      }
    );

  }

  navigateTo() {
    if (sessionStorage.getItem('roles').includes('ROLE_ADMIN'))
      this.router.navigate(['adminhome']);
    else if (sessionStorage.getItem('roles').includes('ROLE_USER'))
      this.router.navigate(['userhome']);
    else {
      this.isLoggedin = false;
      this.router.navigate(['home']);
    }
  }
}
