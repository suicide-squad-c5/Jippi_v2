import { Component, OnInit } from '@angular/core';
import { LocalService } from '../../../local.service';
import { HttpService } from '../../../http.service';

@Component({
  selector: 'app-company-orders',
  templateUrl: './company-orders.component.html',
  styleUrls: ['./company-orders.component.css']
})
export class CompanyOrdersComponent implements OnInit {

  constructor(private local: LocalService, private _http: HttpService) { }
  items_order: any = [];
  orders: any = [];
  // item:any 
  // items: any = [];
  customer:any
  customers: any = [];
  companyItems: any;
  obj:any;

  ngOnInit(): void {
    this.local.order_items.subscribe(order => this.items_order = order);
    this.local.ordErs.subscribe(order => this.orders = order);
    this.local.itEms.subscribe(item => this.companyItems = item);
    // this.getItemOrder();
    this.getUserOrder();
    console.log('++++++>', this.customers, this.orders, this.companyItems);
  }

ngDoCheck() {
  // this.local.itEms.subscribe(item => this.companyItems = item);
  console.log("numbers", this.orders)
  console.log('=====>', this.companyItems,this.items_order)
}

// getItemOrder(){
//   for (let i = 0; i < this.items_order.length; i++){
//     this._http.itemOrder(this.items_order[i].ItemId)
//     .subscribe((data) => {
//       this.item = data;
//       if(this.items.indexOf(this.item.item) === -1){
//       this.items.push(this.item?.item)
//       }
//     })
//   }
  
// }

getUserOrder(){
  for (let i = 0; i < this.orders.length; i++){
    this._http.userOrder(this.orders[i].order.customerId)
    .subscribe((data) => {
      this.customer = data;
      this.customers.push(this.customer?.user)
    })
  }
  this.getItemID();
}

getItemID(){
for (let i = 0; i < this.items_order.length; i++ ){
  let z = this.items_order[i].ItemId;
  let x = this.companyItems.findIndex((y) => y.id === z);
  this.items_order[i].item = this.companyItems[x];
}
console.log("achref", this.items_order);
}



}
