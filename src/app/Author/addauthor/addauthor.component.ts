import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addauthor',
  templateUrl: './addauthor.component.html',
  styleUrls: ['./addauthor.component.css']
})
export class AddauthorComponent implements OnInit {
  submitted=false;
  addauthorForm:FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.addauthorForm = new FormGroup({
      firstName: new FormControl(null,[Validators.required]),
      lastName: new FormControl(null,[Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      contactno: new FormControl(null, [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")])
    })
  }
  onSubmit(){
    this.submitted = true;
    if (this.addauthorForm.invalid) {
      return;
    }
    alert('Book added successfully');

    this.addauthorForm.reset();
  }


}
