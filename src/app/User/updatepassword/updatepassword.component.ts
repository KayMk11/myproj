import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-updatepassword',
  templateUrl: './updatepassword.component.html',
  styleUrls: ['./updatepassword.component.css']
})
export class UpdatepasswordComponent implements OnInit {
  updatepassword:FormGroup;
  submitted=false;
  constructor() { }

  ngOnInit(): void {
    this.updatepassword = new FormGroup({
      password:new FormControl(null,[Validators.required]),
      confirmpassword:new FormControl(null,[Validators.required])

    })
  }
  onSubmit(){
    this.submitted = true;
    if (this.updatepassword.invalid) {
      return;
    }
    alert('password updated successfully');

    this.updatepassword.reset();
  }
}
