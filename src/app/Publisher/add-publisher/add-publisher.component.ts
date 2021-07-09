import { PublisherService } from './../../Services/publisher.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Publisher } from 'src/app/models/publisher.model';

@Component({
  selector: 'app-add-publisher',
  templateUrl: './add-publisher.component.html',
  styleUrls: ['./add-publisher.component.css']
})
export class AddPublisherComponent implements OnInit {
  addpublisherForm: FormGroup;
  submitted=false;
  isAdded=false;

  publisher:Publisher = new Publisher();
  constructor(private publisherservice:PublisherService) { }

  ngOnInit(): void {
    this.addpublisherForm = new FormGroup({
      publisherName: new FormControl(null, [Validators.required]),
      contactNo: new FormControl(null, [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
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
    this.publisher.publisherName = this.addpublisherForm.value.publisherName
    this.publisher.contactNo = this.addpublisherForm.value.contactNo
    this.publisher.email = this.addpublisherForm.value.email
    this.publisher.address1 = this.addpublisherForm.value.address1
    this.publisher.address2 = this.addpublisherForm.value.address2
    this.publisher.city = this.addpublisherForm.value.city
    this.publisher.state = this.addpublisherForm.value.state
    this.publisher.pincode = this.addpublisherForm.value.pincode
    this.save();
    this.addpublisherForm.reset();
  }

  save(){
    this.publisherservice.addPublisher(this.publisher).subscribe(publisher =>{
      console.log(publisher);
      this.isAdded=true;
    },
  error=>console.log(error))
  }

}
