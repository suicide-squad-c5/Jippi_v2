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
  basket: any = [];
  itemName: string = '';
  // items: any = [];
  constructor(private _http: HttpService, private local: LocalService) {}

  ngOnInit(): void {
    this.getitems();
    // this.local.items_list.subscribe(items => this.itemsList = items);
    this.local.items_list.subscribe((items) => (this.itemsList = items));
  }
  ngDoCheck() {
    console.log('++++>>', this.itemsList);
    this.local.getitem_name.subscribe((itemName) => (this.itemName = itemName));
    console.log('itemname', this.itemName);
    this.SearchBar();
  }
  getitems() {
    return this._http.getItems().subscribe((data) => {
      this.itemsList = data;
      this.local.passItems(data);
    });
  }

  // SEARCH BAR FOR ITEMS.
  SearchBar() {
    this.itemsList = this.itemsList.filter((item) => {
      return item.itemName.toLowerCase().match(this.itemName.toLowerCase());
    });
  }
}
