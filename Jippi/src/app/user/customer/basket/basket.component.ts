import { Component, OnInit } from '@angular/core';
import { LocalService } from '../../../local.service';


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
  constructor(private local: LocalService) {}

  ngOnInit(): void {
    this.local.basktItems.subscribe(
      (basket_item) => (this.basket_item = basket_item)
    );
    this.local.quantityItems.subscribe((qnt) => (this.quantity = qnt));
    console.log('basket', this.basket_item);
    this.local.companys_Names.subscribe((name) => (this.campanysNames = name));
    this.totFun(); 
  }

  // ngDoCheck() {
    
  // }

  totFun() {
    for (let i = 0; i < this.basket_item.length; i++) {
      this.tot += this.basket_item[i].itemPrice;
    }
  }

  deleteItem(ite) {
    let index = this.basket_item.indexOf(ite);
    this.tot -=
      this.basket_item[index].itemPrice *
      this.quantity[index];
    this.basket_item.splice(index, 1);
    this.quantity.splice(index,1);
    this.campanysNames.splice(index,1);
  }

  addQunt(ite) {
    this.quantity[this.basket_item.indexOf(ite)]++;
    this.tot += this.basket_item[this.basket_item.indexOf(ite)].itemPrice;
  }
  subtractQunt(ite) {
    this.quantity[this.basket_item.indexOf(ite)]--;
    this.tot -= this.basket_item[this.basket_item.indexOf(ite)].itemPrice;
  }
  // get the company name
  // companyName(CompanyId) {
  //   console.log('CompanyID+++>', CompanyId);
  //   this._http.getCompanyName(CompanyId).subscribe((data) => {
  //     console.log('companyName====>', data);
  //     this.companyNam = data;
  //   });
  // }
  // company_Names(){
  //   for (let i = 0; i < this.basket_item.length; i++) {
  //     this.companyName(this.basket_item[i].itemCompany);
  //     this.companyNames.push(this.companyNam?.companyName);
  //   }
  //   console.log('==++==++>>', this.companyNames)
  // }
}
