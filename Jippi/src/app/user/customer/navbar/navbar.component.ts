import { Component, OnInit } from '@angular/core';
import { LocalService } from '../../../local.service';
import { Router } from '@angular/router';
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

  constructor(private local: LocalService, private router: Router) {}

  ngOnInit(): void {
    console.log('===>', this.userType);
    this.local.basktItems.subscribe(
      (basket_item) => (this.basket_item = basket_item)
    );
    this.local.userTy.subscribe((type) => (this.userType = type));
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
