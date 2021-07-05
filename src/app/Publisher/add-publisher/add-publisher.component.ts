import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-publisher',
  templateUrl: './add-publisher.component.html',
  styleUrls: ['./add-publisher.component.css']
})
export class AddPublisherComponent implements OnInit {
  addpublisherForm: FormGroup;
  submitted=false;
  constructor() { }

  ngOnInit(): void {
    this.addpublisherForm = new FormGroup({
      publisherName: new FormControl(null, [Validators.required]),
      contactno: new FormControl(null, [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      address1: new FormControl(null, [Validators.required]),
      address2: new FormControl(null, [Validators.required]),
      city: new FormControl(null, [Validators.required]),
      state: new FormControl(null, [Validators.required]),
      pincode: new FormControl(null, [Validators.required])
    })
  }
  onSubmit(){
    this.submitted = true;
    if (this.addpublisherForm.invalid) {
      return;
    }
    alert('Book added successfully');

    this.addpublisherForm.reset();
  }

}
