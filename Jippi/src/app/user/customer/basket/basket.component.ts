import { Component, OnInit } from '@angular/core';
import { LocalService } from '../../../local.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {
    basket_item: any = [];
    tot: number = 0;
    quantity: any = [];

  constructor(private local: LocalService) { }

  ngOnInit(): void {
    this.local.basktItems.subscribe(basket_item => this.basket_item = basket_item);
    this.local.quantityItems.subscribe(qnt => this.quantity = qnt);
    console.log('basket',this.basket_item);
    this.totFun();
  }

  // ngDoCheck() {
  //   this.totFun();
  // }

  totFun(){
    for (let i = 0; i < this.basket_item.length; i++){
      this.tot += this.basket_item[i].itemPrice 
    }
  }

  deleteItem(ite){
    this.tot -= (this.basket_item[this.basket_item.indexOf(ite)].itemPrice * this.quantity[this.basket_item.indexOf(ite)]);
    this.basket_item.splice(this.basket_item.indexOf(ite),1)
    
  }
 
  addQunt(ite){
    this.quantity[this.basket_item.indexOf(ite)]++;
    this.tot += this.basket_item[this.basket_item.indexOf(ite)].itemPrice;
  }
  subtractQunt(ite){
   this.quantity[this.basket_item.indexOf(ite)]--;
   this.tot -=  this.basket_item[this.basket_item.indexOf(ite)].itemPrice ;
 } 
  

}
