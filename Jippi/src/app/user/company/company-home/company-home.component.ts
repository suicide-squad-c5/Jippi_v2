import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/http.service';
import { LocalService } from '../../../local.service';
@Component({
  selector: 'app-company-home',
  templateUrl: './company-home.component.html',
  styleUrls: ['./company-home.component.css'],
})
export class CompanyHomeComponent implements OnInit {
  items_order: any = [];
  ordersId: any = [];
  orders: any;
  check: boolean = false;

  constructor(private _http: HttpService, private local: LocalService) {}

  ngOnInit(): void {
    this.companyItemOrderFunc();
    this.local.order_items.subscribe(order => this.items_order.orderItem = order);
  }
  ngDoCheck() {
    console.log('=====>', this.items_order);
    if (this.check) {
      this.ordersIdFunc();
      this.local.ordErs.subscribe(order => this.orders = order);
      this.local.ordersFunc(this.orders);
      console.log('Achref')
      this.check = false;
      console.log('orders', this.orders);
      // console.log('+++>', )
    }
    console.log('+++>', this.ordersId, this.orders);
  }

  companyItemOrderFunc() {
    if (localStorage.comapnyId) {
      return this._http
        .companyItemsOrder(localStorage.comapnyId)
        .subscribe((data) => {
          console.log('data order item', data);
          this.items_order = data;
          this.check = true;
          this.orders = [];
          this.local.ordersFunc(this.orders);
          this.local.orderItemFunc(this.items_order.orderItem)
        });
    }
    // this.ordersIdFunc();
  }
  //get an array of orderId
  ordersIdFunc() {   //to transfert to  the order list componets;
    if (this.items_order.orderItem) {
      for (let i = 0; i < this.items_order.orderItem.length; i++) {
        if (this.ordersId.indexOf(this.items_order.orderItem[i].orderId) === -1) {
          this.ordersId.push(this.items_order.orderItem[i].orderId);
        }
      }
      for (let j = 0; j < this.ordersId.length; j++) {
        this._http.companyUserOrder(this.ordersId[j]).subscribe((data) => {
          console.log('orders', data);
          this.orders.push(data);
        });
      }
    }
  }
}
