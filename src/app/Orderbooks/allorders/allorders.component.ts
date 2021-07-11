import { FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Bookorder } from 'src/app/models/bookorder.model';
import { BookOrderService } from 'src/app/Services/book-order.service';

@Component({
  selector: 'app-allorders',
  templateUrl: './allorders.component.html',
  styleUrls: ['./allorders.component.css']
})
export class AllordersComponent implements OnInit {
  searchorder: FormGroup;
  booksorder: Bookorder[];
  searchQuery: string;
  constructor(private orderService: BookOrderService) { }

  ngOnInit(): void {
    this.getAllOrders();
    this.searchorder = new FormGroup({
      searchText: new FormControl('')
    })
  }

  search() {
    this.searchQuery = this.searchorder.value.searchText;
    console.log(this.searchQuery)
    console.log(Number(this.searchQuery))
    if (this.searchQuery = '')
      this.getAllOrders()
    else if (!isNaN(Number(this.searchQuery)))
      this.getOrderById(Number(this.searchQuery))
  }
  private getAllOrders() {
    this.orderService.getAllOrders().subscribe(
      data => {
        this.booksorder = data
      }
    )
  }
  private getOrderById(id: number) {
    // console.log(id) ?? dk what happened here
    this.orderService.getOrderById(Number(this.searchorder.value.searchText)).subscribe(
      data => {
        this.booksorder = [data];
      }
    );
  }
  onClickClose(Id: number) {
    this.orderService.closeOrder(Id).subscribe()
  }
  onClickCancel(Id: number) {
    this.orderService.cancelOrder(Id).subscribe()
  }
  onClickUpdate() {

  }


}
