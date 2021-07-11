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
  updateprofile:FormGroup;
  addaddress:FormGroup;
  viewaddress:FormGroup;
  updateaddress:FormGroup;
  submitted=false;
  address:UserAddress = new UserAddress();
  user:User = new User(0,'','','','','','',new Date(),[]);

  @ViewChild('closebutton') closebutton: { nativeElement: { click: () => void; }; };
  constructor(private fb:FormBuilder, private userservice:UserService) {
    this.userservice.getUserDetails(this.user).subscribe(data=>{
      console.log(this.user)
      this.user = data;
    })
   }

  ngOnInit(): void {
    this.updateprofile = this.fb.group({
      firstName: new FormControl(null, [Validators.required]),
      lastName: new FormControl(null, [Validators.required]),
      mobileno: new FormControl(null, [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      dateOfBirth:new FormControl(null,[Validators.required])
    })

    this.addaddress = this.fb.group({
      addressLine1: new FormControl(null, [Validators.required]),
      addressLine2: new FormControl(null, [Validators.required]),
      city: new FormControl(null, [Validators.required]),
      state: new FormControl(null, [Validators.required])
    })
  }

  onSubmit(){

    this.address.addressLine1 = this.addaddress.value.addressLine1;
    this.address.addressLine2 = this.addaddress.value.addressLine2;
    this.address.city = this.addaddress.value.city;
    this.address.state = this.addaddress.value.state;
    console.log(this.address);
    this.add();
    this.addaddress.reset();

  }

  add(){
    this.userservice.addAddress(this.address).subscribe(addr =>{
      this.submitted = true;
      console.log(addr);
    },
    error=>console.log(error))
  }
}
