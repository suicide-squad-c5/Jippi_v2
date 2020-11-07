import { Component, OnInit } from '@angular/core';
import { LocalService } from '../../../local.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  // TO SWITCH BETTWEN NAVBAR IF USER LOGED IN OR NOT.
  // TI WORK TELL WE CHANGE IT WITH THE REAL LOGID IN.
  userType: string = 'visiteur';
  basket_item: any = [];
  itemNum: number = 0;
  itemList: any = [];
  itemName: string = '';
  route: boolean = false;
  orders: any = [];
  orderNum: number = 0;

  constructor(
    location: Location,
    private local: LocalService,
    private router: Router
  ) {
    router.events.subscribe((val) => {
      if (location.path() === '/shop/items') {
        this.route = true;
      } else {
        this.route = false;
      }
    });
  }

  ngOnInit(): void {
    // console.log('===>', this.userType);

    this.local.basktItems.subscribe(
      (basket_item) => (this.basket_item = basket_item)
    );
    this.local.ordErs.subscribe(order => this.orders = order);
    this.local.userTy.subscribe((type) => (this.userType = type));
    this.local.getitem_name.subscribe((itemName) => (this.itemName = itemName));
    if (localStorage.Id) {
      this.local.changeType('customer');
    } else if (localStorage.comapnyId) {
      this.local.changeType('company');
    } else if (localStorage.adminId) {
      this.local.changeType('admin');
    } else {
      this.local.changeType('visiteur');
    }
  }

  ngDoCheck() {
    this.itemNum = this.basket_item.length;
    this.orderNum = this.orders.length
    this.local.itemNameCheck(this.itemName);
    // console.log('itemname navbar', this.itemName);
    this.local.getitem_name.subscribe((itemName) => (this.itemName = itemName));
    console.log('NavbarComponent -> route', this.route);
  }

  logout() {
    localStorage.removeItem('Token');
    localStorage.removeItem('Id');
    localStorage.removeItem('companyToken');
    localStorage.removeItem('comapnyId');
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminId');
    this.local.changeType('visiteur');
    this.router.navigateByUrl('/');
  }


}
