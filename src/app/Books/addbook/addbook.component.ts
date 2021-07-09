import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {
  addbookForm:FormGroup;
  submitted=false;
  constructor() {
  }

  ngOnInit(): void {
    this.addbookForm = new FormGroup({
      title: new FormControl(null, [Validators.required]),
      subject: new FormControl(null, [Validators.required]),
      publishedYear: new FormControl(null, [Validators.required]),
      publisherId: new FormControl(null, [Validators.required]),
      isbn: new FormControl(null, [Validators.required]),
      quantity: new FormControl(null, [Validators.required]),
      shelfDetails: new FormControl(null, [Validators.required]),
      bookCost: new FormControl(null, [Validators.required]),
      authorIdList: new FormControl(null, [Validators.required])
    })
  }
  onSubmit(){
    this.submitted = true;
    
    this.addbookForm.reset();
  }

}
