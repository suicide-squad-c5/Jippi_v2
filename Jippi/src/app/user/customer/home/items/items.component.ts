import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../../http.service';
import { LocalService } from '../../../../local.service';
@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css'],
})
export class ItemsComponent implements OnInit {
  quantity: any = [];
  itemsList: any = [];
  campanysNames: any = [];
  allitems: boolean = false;
  basket: any = [];
  itemName: string = '';
  backUpData: any;

  constructor(private _http: HttpService, private local: LocalService) {}

  ngOnInit(): void {
    this.getitems();
    this.local.all_items.subscribe((boo) => (this.allitems = boo));
    this.local.items_list.subscribe((items) => (this.itemsList = items));
  }
  ngDoCheck() {
    if (this.allitems) {
      this.getitems();
      this.allitems = false;
    }
    this.local.getitem_name.subscribe((itemName) => (this.itemName = itemName));
    this.SearchBar();
  }
  getitems() {
    return this._http.getItems().subscribe((data: any) => {
      this.itemsList = data.reverse();
      this.backUpData = this.itemsList;
      this.local.passItems(data);
    });
  }

  // SEARCH BAR FOR ITEMS.
  SearchBar() {
    if (this.itemName === '') {
      this.itemsList = this.backUpData;
    } else {
      this.itemsList = this.itemsList.filter((item) => {
        return item?.itemName.toLowerCase().match(this?.itemName.toLowerCase());
      });
    }
  }
}
