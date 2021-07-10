
import { PublisherService } from './../../Services/publisher.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Publisher } from 'src/app/models/publisher.model';

@Component({
  selector: 'app-display-all',
  templateUrl: './display-all.component.html',
  styleUrls: ['./display-all.component.css']
})
export class DisplayAllComponent implements OnInit {
  searchPublisher: FormGroup;
  publishers: Publisher[];
  publisher: Publisher;
  updatePublisher: FormGroup;
  message: string = '';
  allPublisher = false;
  isSearched = false
  isUpdated = false;
  @ViewChild('closebutton') closebutton: { nativeElement: { click: () => void; }; };
  constructor(private publisherservie: PublisherService) {
    this.getAllPublishers();
    this.searchPublisher = new FormGroup({
      publisherId: new FormControl()
    })
  }

  ngOnInit(): void { }

  onClickDelete(publisherId: number) {
    this.publisherservie.deletePublisher(publisherId)
      .subscribe(data => {
        this.message = 'Publisher Deleted Successfully!!';
        this.getAllPublishers();
      })
  }
  publisherUpdateForm = new FormGroup({
    publisherId: new FormControl({ value: '', disabled: true }),
    publisherName: new FormControl('', [Validators.required]),
    contactNo: new FormControl('', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
    email: new FormControl('', [Validators.required, Validators.email]),
    address1: new FormControl('', [Validators.required]),
    address2: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    state: new FormControl('', [Validators.required]),
    pincode: new FormControl('', [Validators.required])
  });

  onClickUpdate(publisherId: number) {
    this.publisherservie.getPublisherById(publisherId)
      .subscribe(data => {
        this.publisher = data;
        this.newUpdateForm();
      })
  }

  newUpdateForm() {
    this.publisherUpdateForm.patchValue({
      publisherId: this.publisher.publisherId,
      publisherName: this.publisher.publisherName,
      email: this.publisher.email,
      contactNo: this.publisher.contactNo,
      address1: this.publisher.address1,
      address2: this.publisher.address2,
      city: this.publisher.city,
      state: this.publisher.state,
      pincode: this.publisher.pincode
    });
  }

  onSubmit() {
    let publisher = new Publisher();
    publisher.publisherId = this.publisherUpdateForm.getRawValue().publisherId;
    publisher.publisherName = this.publisherUpdateForm.value.publisherName;
    publisher.contactNo = this.publisherUpdateForm.value.contactNo;
    publisher.address1 = this.publisherUpdateForm.value.address1;
    publisher.address2 = this.publisherUpdateForm.value.address2;
    publisher.email = this.publisherUpdateForm.value.email;
    publisher.city = this.publisherUpdateForm.value.city;
    publisher.state = this.publisherUpdateForm.value.state;
    publisher.pincode = this.publisherUpdateForm.value.pincode;
    console.log(publisher);
    this.publisherservie.updatePublisher(publisher).subscribe(data => {
      this.message = JSON.stringify(data)
      this.getAllPublishers();
    })

  }

  onSearch() {
    console.log(this.searchPublisher.value.publisherId);
    if (this.searchPublisher.value.publisherId === '')
      this.getAllPublishers();
    else {
      this.publisherservie.getPublisherById(this.searchPublisher.value.publisherId).subscribe(
        data => {
          this.allPublisher = true;
          this.isSearched = true;
          this.publishers = [data];
        }, error => { })
    }
  }

  getAllPublishers() {
    this.publisherservie.getAllPublishers().subscribe(data => {
      this.publishers = data;
    })
  }
}
