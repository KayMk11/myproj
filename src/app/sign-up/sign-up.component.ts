import { AuthService } from './../Services/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { User } from '../models/users.model';
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
  user:User = new User(null,'','','','','','',new Date(),[]);
  selectedRoles: string[];
  submitted = false;
  isRegistered = false;

  currentDate = new Date();
  constructor(private authService: AuthService, private datepipe:DatePipe) {
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
      dateOfBirth:new FormControl(this.datepipe.transform(this.currentDate, 'yyyy-MM-dd')),
    })
  }

  onSubmit(){
    this.submitted = true;
    this.user.userName = this.signupForm.value.username
    this.user.password = this.signupForm.value.password
    this.user.firstName = this.signupForm.value.firstname
    this.user.lastName = this.signupForm.value.lastname
    // this.user.mobileno = '9421082038'
    this.user.mobileno = this.signupForm.value.mobileno
    this.user.email = this.signupForm.value.email
    this.user.dateOfBirth = this.signupForm.value.dateOfBirth
    this.user.roles = ['user']
    console.log(this.user);
    this.save();
    this.signupForm.reset();
  }

  save() {
    console.log(this.user);
    this.authService.signup(this.user).subscribe(user => {
        console.log(user);
        this.isRegistered = true;
        console.log(JSON.stringify(this.user));

    }, error => {
        console.log(error);
    });
  }

}
