import { Component, OnInit, Input } from '@angular/core';
import { LocalService } from '../../../../../local.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  @Input() quantity: any;
  // basket_item: any = [];
  @Input() item: any;
  @Input() basket: any;
  constructor(private local: LocalService ) {}

  ngOnInit(): void {
    console.log('ItemComponent -> item', this.item);
    this.local.basktItems.subscribe(basket_item => this.basket = basket_item);
    this.local.quantityItems.subscribe(qnt => this.quantity = qnt);
  }
ngDoCheck() {
  console.log("basket",this.basket, this.quantity);
  // console.log('++++>',this.local.basktItems)
}

addFun(){
  if(this.basket.indexOf(this.item) === -1){ 
  this.basket.push(this.item);
  this.quantity.push(1)
  }
  this.addItem();
  this.addOne();
}

addItem(){
  this.local.addToBasket(this.basket);
}
  addOne(){
  this.local.addOne(this.quantity);
}
}
