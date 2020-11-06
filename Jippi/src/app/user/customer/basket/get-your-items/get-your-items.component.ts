import { Component, OnInit } from '@angular/core';
import { LocalService } from '../../../../local.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-your-items',
  templateUrl: './get-your-items.component.html',
  styleUrls: ['./get-your-items.component.css'],
})
export class GetYourItemsComponent implements OnInit {
  basket_item: any = [];

  constructor(private local: LocalService, private router: Router) {}

  ngOnInit(): void {
    this.local.basktItems.subscribe(
      (basket_item) => (this.basket_item = basket_item)
    );
  }

  ngDoCheck() {
    console.log('=======>', this.basket_item);
  }

  // DELEVERY SIDE GIVE YOU SNIPET.
  onsite(type) {
    this.router.navigateByUrl('/snippet/items', {
      state: { data: this.basket_item, type: type },
    });
  }
}
