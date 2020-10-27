import { Component, OnInit } from '@angular/core';
import { LocalService } from '../../../../local.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent implements OnInit {
  kinds: [];
  items: any = [];
  allItemsData: any[];
  min_price: string = '';
  max_price: string = '';
  allItems: boolean = false;
  items_kinds: {} = {
    'Camera & Photo': false,
    Computers: false,
    'Wearable Technology': false,
    Male: false,
    Female: false,
    Kids: false,
    'Action figures': false,
    Animals: false,
    'Cars and radio controlled': false,
    Dolls: false,
    'Creative toys': false,
    camping: false,
    'Hunting and fishing': false,
    Biking: false,
    'Rock Climbing': false,
  };
  constructor(private local: LocalService) {}

  ngOnInit(): void {
    this.getAllDataItems();
  }
  ngDoCheck() {
    this.local.items_list.subscribe((items) => (this.items = items));
    this.local.all_items.subscribe((items) => (this.allItems = items));

    console.log('items_list in filter', this.items, this.allItems);

    console.log('<<<', this.items, this.items_kinds, this.allItemsData);
  }

  filterItems() {
    // this.getAllData();
    for (var i = 0; i < this.items.length; i++) {
      if (!this.items_kinds[this.items[i].itemKind]) {
        this.items.splice(i, 1, undefined);
      }
    }
    this.local.passItems(this.items);
  }
  checkCheckBoxvalue(event) {
    console.log('test filter', event.checked);
  }

  getAllData() {
    this.local.passAllItems(true);
    this.getAllDataItems();
  }

  getAllDataItems() {
    for (let key in this.items_kinds) {
      this.items_kinds[key] = false;
    }
  }

  //filter items with price
  filterPrice() {
    let min = parseInt(this.min_price);
    let max = parseInt(this.max_price);
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].itemPrice < min) {
        console.log('item min', this.items[i].itemPrice, i);
        this.items.splice(i, 1,undefined);
      } else if (this.items[i]?.itemPrice > max) {
        console.log('item max', this.items[i].itemPrice, i);
        this.items.splice(i, 1, undefined);
      } else {
        console.log('item in marge', this.items[i].itemPrice, i);
      }
    }
    this.local.passItems(this.items);
  }
}
