import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../../http.service';

@Component({
  selector: 'app-admin-items',
  templateUrl: './admin-items.component.html',
  styleUrls: ['./admin-items.component.css'],
})
export class AdminItemsComponent implements OnInit {
  itemsList: any = [];
  constructor(private _http: HttpService) {}

  ngOnInit(): void {
    this.getitems();
  }
  getitems() {
    return this._http.getItems().subscribe((data) => {
      this.itemsList = data;
      console.log(this.itemsList);
    });
  }
}
