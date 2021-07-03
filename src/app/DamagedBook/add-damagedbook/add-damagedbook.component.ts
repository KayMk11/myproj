import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-damagedbook',
  templateUrl: './add-damagedbook.component.html',
  styleUrls: ['./add-damagedbook.component.css']
})
export class AddDamagedbookComponent implements OnInit {
  damagedbook:FormGroup;
  submitted=false;
  constructor() { }

  ngOnInit(): void {
    this.damagedbook = new FormGroup({
      description: new FormControl(null,[Validators.required]),
      quantity: new FormControl(null,[Validators.required])
    })
  }
  onSubmit(){
    this.submitted = true;
    if (this.damagedbook.invalid) {
      return;
    }
    alert('Damaged Book added successfully');

    this.damagedbook.reset();
  }

}
