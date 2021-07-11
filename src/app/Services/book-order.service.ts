import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Bookorder } from '../models/bookorder.model';
import { OrderWrapper } from '../Orderbooks/addorder/order-wrapper.model';

@Injectable({
  providedIn: 'root'
})
export class BookOrderService {
  private baseURL = 'http://localhost:8080/book/order'
  constructor(private httpclient: HttpClient) { }

  addOrder(orderWrapper: OrderWrapper) {
    return this.httpclient.post(`${this.baseURL}/add`, orderWrapper).subscribe(
      res => {
        console.log(res)
      }
    )
  }
  updateOrder(orderWrapper: OrderWrapper) {
    return this.httpclient.put(`${this.baseURL}/update`, orderWrapper).subscribe(
      res => {
        console.log(res)
      }
    )
  }

  cancelOrder(Id: number) {
    return this.httpclient.get(`${this.baseURL}/cancel/${Id}`)
  }

  closeOrder(Id: number) {
    return this.httpclient.get(`${this.baseURL}/close/${Id}`)
  }

  getAllOrders() {
    return this.httpclient.get<Bookorder[]>(`${this.baseURL}/get/all`)
  }
  getOrderById(Id: number) {
    return this.httpclient.get<Bookorder>(`${this.baseURL}/get/${Id}`)
  }

}
