import { Component, OnInit } from '@angular/core';
import { LocalService } from '../../../local.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css'],
})
export class BasketComponent implements OnInit {
  campanysNames: any = [];
  basket_item: any = [];
  tot: number = 0;
  quantity: any = [];
  companyNames: any = [];
  final_basket: any = {};

  constructor(private local: LocalService, private router: Router) {}

  ngOnInit(): void {
    this.local.basktItems.subscribe(
      (basket_item) => (this.basket_item = basket_item)
    );
    this.local.quantityItems.subscribe((qnt) => (this.quantity = qnt));
    console.log('basket', this.basket_item);
    this.local.companys_Names.subscribe((name) => (this.campanysNames = name));
    this.totFun();
  }

  ngDoCheck() {
    this.addQnt();
    console.log('======>', this.basket_item);
  }

  totFun() {
    for (let i = 0; i < this.basket_item.length; i++) {
      this.tot += this.basket_item[i].itemPrice;
    }
  }

  deleteItem(ite) {
    let index = this.basket_item.indexOf(ite);
    this.tot -= this.basket_item[index].itemPrice * this.quantity[index];
    this.basket_item.splice(index, 1);
    this.quantity.splice(index, 1);
    this.campanysNames.splice(index, 1);
  }

  addQunt(ite) {
    this.quantity[this.basket_item.indexOf(ite)]++;
    this.tot += this.basket_item[this.basket_item.indexOf(ite)].itemPrice;
  }
  subtractQunt(ite) {
    if (this.quantity[this.basket_item.indexOf(ite)] > 0) {
      this.quantity[this.basket_item.indexOf(ite)]--;
      this.tot -= this.basket_item[this.basket_item.indexOf(ite)].itemPrice;
    }
  }

  addQnt() {
    for (let i = 0; i < this.basket_item.length; i++) {
      this.basket_item[i].quantity = this.quantity[i];
      this.basket_item[i].campanysName = this.campanysNames[i];
      this.basket_item[i].total = this.tot;
    }
  }

  checkOut() {
    this.router.navigateByUrl('/customer/getyouritems', {
      state: { data: this.tot },
    });
  }
}
