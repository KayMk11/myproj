import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addorder',
  templateUrl: './addorder.component.html',
  styleUrls: ['./addorder.component.css']
})
export class AddorderComponent implements OnInit {
  orderbook:FormGroup;
  submitted=false;
  constructor() { }

  ngOnInit(): void {
    this.orderbook = new FormGroup({
      quantity: new FormControl(null, [Validators.required]),
      publisherId: new FormControl(null, [Validators.required]),
      orderDate: new FormControl((new Date()).toISOString().substring(0, 10))
    })
  }
  
  onSubmit(){
    this.submitted = true;
    if (this.orderbook.invalid) {
      return;
    }
    alert('Damaged Book added successfully');

    this.orderbook.reset();
  }

}
