import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';

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
  @ViewChild('closebutton') closebutton: { nativeElement: { click: () => void; }; };
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.updateprofile = this.fb.group({
      firstName: new FormControl(null, [Validators.required]),
      lastName: new FormControl(null, [Validators.required]),
      mobileno: new FormControl(null, [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
      email: new FormControl(null, [Validators.required, Validators.email])

    })
  }
  onSubmit(){
    this.submitted = true;
    if (this.updateprofile.invalid) {
      return;
    }
  }
}
