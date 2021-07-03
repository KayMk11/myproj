import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Users } from '../models/users.model';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signupForm: FormGroup;
  roles= ['User', 'Admin'];
  user:Users;
  selectedRoles: string[];
  submitted = false;
  constructor() { }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      username: new FormControl(null,[Validators.required, Validators.minLength(5), Validators.maxLength(20)]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null,[Validators.required, Validators.pattern('^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=\\S+$).{8,20}$'),
      Validators.minLength(8), Validators.maxLength(20)]),
      firstname: new FormControl(null,Validators.required),
      lastname: new FormControl(null,Validators.required),
      mobilenumber: new FormControl(null, [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
      dob:new FormControl(null, [Validators.required]),
      roles: new FormControl(null, [Validators.required])
    })
  }
  onSubmit(){
    this.submitted = true;
    if (this.signupForm.invalid) {
      return;
    }
    alert('Successfully Signed Up');

    this.signupForm.reset();
  }
}
