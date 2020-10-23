import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../../http.service';
@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css'],
})
export class ItemsComponent implements OnInit {
  quantity: any = [];
  itemsList: any = [];
  basket: any = [];
  constructor(private _http: HttpService) {}

  ngOnInit(): void {
    this.getitems();
  }
  getitems() {
    return this._http.getItems().subscribe((data) => {
      this.itemsList = data;
    });
  }
}
