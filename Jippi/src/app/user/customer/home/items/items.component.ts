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
  allitems: boolean = false;
  basket: any = [];
  // items: any = [];
  constructor(private _http: HttpService, private local: LocalService) {}

  ngOnInit(): void {
    this.getitems();
    this.local.all_items.subscribe(boo => this.allitems = boo);
    this.local.items_list.subscribe((items) => (this.itemsList = items));
  }
  ngDoCheck() {
    if(this.allitems){
      this.getitems();
      this.allitems = false;
    }
    console.log('++++>>', this.itemsList, this.allitems);
  }
  getitems() {
    return this._http.getItems().subscribe((data) => {
      this.itemsList = data;
      let dtaa = this.itemsList
      this.local.passItems(data);
      // this.local.passAllItems(data);
    });
  }
}
