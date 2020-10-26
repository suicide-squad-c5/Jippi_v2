import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../../../http.service';
import { LocalService } from '../../../../../local.service';
@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css'],
})
export class ItemDetailsComponent implements OnInit {
  constructor(private _http: HttpService, private local: LocalService) {}
  Data: {}[] = [];
  itemID: number = null;
  test = 39;

  ngDoCheck() {}
  ngOnInit() {
    console.log('itemid******', this.itemID);
    this.local.item_id.subscribe((itemid) => {
      this.itemID = itemid;
      this.showClickedOnItem();
    });
    console.log('itemid******', this.itemID);

    // console.log('itemid******', this.itemID);
  }

  // to show the main item that the user has clicked on
  showClickedOnItem() {
    // this.test = this.itemID;
    return this._http.getItemData(this.itemID).subscribe((res) => {
      this.Data.push(res);
      console.log('itemData ==> ', this.Data);
    });
  }
  // show all of them down
}
