import { AuthService } from './../Services/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Users } from '../models/users.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  providers: [DatePipe]
})
export class SignUpComponent implements OnInit {
  signupForm: FormGroup;
  // roles= ['User', 'Admin'];
  user:Users = new Users(null,'','','','',null,'',null,[]);
  selectedRoles: string[];
  submitted = false;
  isRegistered = false;
  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      username: new FormControl(null,[Validators.required, Validators.minLength(5), Validators.maxLength(20)]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null,[Validators.required, Validators.pattern('^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=\\S+$).{8,20}$'),
      Validators.minLength(8), Validators.maxLength(20)]),
      firstname: new FormControl(null,Validators.required),
      lastname: new FormControl(null,Validators.required),
      mobileno: new FormControl(null, [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
      dob:new FormControl(null, [Validators.required])
    })
  }

  onSubmit(){
    this.submitted = true;
    if (this.signupForm.invalid) {
      return;
    }

    this.user.userName = this.signupForm.value.username
    this.user.password = this.signupForm.value.password
    this.user.firstName = this.signupForm.value.firstname
    this.user.lastName = this.signupForm.value.lastname
    // this.user.mobileno = '9421082038'
    this.user.mobileno = this.signupForm.value.mobileno
    this.user.email = this.signupForm.value.email
    this.user.dob = this.signupForm.value.dob
    this.user.roles = ['user']
    this.save();
    this.signupForm.reset();
  }

  save() {
    this.authService.signup(this.user).subscribe(user => {
        console.log(user);
        this.isRegistered = true;
    }, error => {
        console.log(error);
    });
  }

}
