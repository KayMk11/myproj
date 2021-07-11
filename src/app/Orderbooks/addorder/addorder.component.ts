import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { OrderWrapper } from './order-wrapper.model';
import { BookOrderService } from 'src/app/Services/book-order.service';

@Component({
  selector: 'app-addorder',
  templateUrl: './addorder.component.html',
  styleUrls: ['./addorder.component.css']
})
export class AddorderComponent implements OnInit {
  orderbook: FormGroup;
  submitted = false;
  constructor(private orderService: BookOrderService) { }

  ngOnInit(): void {
    this.orderbook = new FormGroup({
      quantity: new FormControl(null, [Validators.required]),
      publisherId: new FormControl(null, [Validators.required]),
      bookId: new FormControl(null, [Validators.required])
    })
  }

  onSubmit() {
    this.submitted = true;
    if (this.orderbook.invalid) {
      return;
    }
    let order: OrderWrapper = new OrderWrapper(null, null, null);
    order.bookId = this.orderbook.value.bookId;
    order.publisherId = this.orderbook.value.publisherId;
    order.quantity = this.orderbook.value.quantity;

    this.orderService.addOrder(order);
    // alert('Damaged Book added successfully');
    this.orderbook.reset();
  }

}
