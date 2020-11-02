import { Component, OnInit } from '@angular/core';
import { LocalService } from '../../../../local.service';

@Component({
  selector: 'app-get-your-items',
  templateUrl: './get-your-items.component.html',
  styleUrls: ['./get-your-items.component.css']
})
export class GetYourItemsComponent implements OnInit {

  basket_item: any = [];

  constructor(private local: LocalService) { }
 
  ngOnInit(): void {
     this.local.basktItems.subscribe(
      (basket_item) => (this.basket_item = basket_item)
    );
  }

  ngDoCheck() {
    console.log('=======>', this.basket_item);
  }

}
