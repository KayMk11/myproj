import { UserAddress } from './../../models/useraddress.model';
import { User } from './../../models/users.model';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-viewprofile',
  templateUrl: './viewprofile.component.html',
  styleUrls: ['./viewprofile.component.css']
})
export class ViewprofileComponent implements OnInit {

  addaddress: FormGroup;
  viewaddress: FormGroup;
  updateaddress: FormGroup;
  submitted = false;
  address: UserAddress = new UserAddress();
  user: User = new User(0, '', '', '', '', '', '', new Date(), []);

  @ViewChild('closebutton') closebutton: { nativeElement: { click: () => void; }; };
  constructor(private fb: FormBuilder, private userservice: UserService) {
    this.userservice.getUserDetails(this.user).subscribe(data => {
      // console.log(this.user)
      this.user = data;
    })
  }

  ngOnInit(): void {
    this.addaddress = this.fb.group({
      addressLine1: new FormControl(null, [Validators.required]),
      addressLine2: new FormControl(null, [Validators.required]),
      city: new FormControl(null, [Validators.required]),
      state: new FormControl(null, [Validators.required])
    })
  }

  updateprofile = new FormGroup({
    firstName: new FormControl(null, [Validators.required]),
    lastName: new FormControl(null, [Validators.required]),
    mobileno: new FormControl(null, [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    dateOfBirth: new FormControl(null, [Validators.required])
  })

  onClickUpdate(user: User) {
    this.userservice.getUserDetails(user)
      .subscribe(data => {
        this.user = data;
        console.log(this.user);
        this.newUpdateForm();
      })
  }

  newUpdateForm() {
    this.updateprofile.setValue({
      firstName: this.user.firstName,
      lastName: this.user.lastName,
      mobileno: this.user.mobileno,
      email: this.user.email,
      dateOfBirth: this.user.dateOfBirth
    });
  }


  onSubmit() {
    let user = new User(0, '', '', '', '', '', '', new Date(), []);
    this.user.firstName = this.updateprofile.value.firstName
    this.user.lastName = this.updateprofile.value.lastName
    this.user.mobileno = this.updateprofile.value.mobileno
    this.user.email = this.updateprofile.value.email
    this.user.dateOfBirth = this.updateprofile.value.
      this.userservice.updateUserDetails(user).subscribe((up: User) => {
        this.user = up;
        this.getUserDetails();
      })
  }
  onAdd() {
    this.address.addressLine1 = this.addaddress.value.addressLine1;
    this.address.addressLine2 = this.addaddress.value.addressLine2;
    this.address.city = this.addaddress.value.city;
    this.address.state = this.addaddress.value.state;
    console.log(this.address);
    this.add();
    this.addaddress.reset();

  }

  add() {
    this.userservice.addAddress(this.address).subscribe(addr => {
      this.submitted = true;
      console.log(addr);
    },
      error => console.log(error))
  }
  getUserDetails() {
    this.userservice.getUserDetails(this.user).subscribe(us => {
      this.submitted = true;
    })
  }

}
