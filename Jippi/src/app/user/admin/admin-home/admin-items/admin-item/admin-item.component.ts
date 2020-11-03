import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../../../../../http.service';
import { LocalService } from '../../../../../local.service';

@Component({
  selector: 'app-admin-item',
  templateUrl: './admin-item.component.html',
  styleUrls: ['./admin-item.component.css'],
})
export class AdminItemComponent implements OnInit {
  @Input() oneItem: any;
  delete_Item: boolean = false;
  constructor(private _http: HttpService, private locale: LocalService) {}

  ngOnInit(): void {
    console.log('item', this.oneItem);
  this.locale.delete_item.subscribe(boo => this.delete_Item = boo)
  }

  deleteItem(itemId) {
    console.log(itemId);
    this._http.deleteItem(itemId).subscribe((res) => {
      console.log(res);
      alert('deleted !');
     
    });
     this.locale.deleteItemFunc(true)    
  }
}
