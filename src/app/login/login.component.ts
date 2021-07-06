import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted:boolean=false;
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: new FormControl(null, [Validators.required, Validators.minLength(5)]),
      password: new FormControl(null,[Validators.required, Validators.pattern('^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=\\S+$).{8,20}$'),
      Validators.minLength(8), Validators.maxLength(20)])
    });
  }
  onSubmit(){
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    alert("Logged in sucessfully");
  }
}
