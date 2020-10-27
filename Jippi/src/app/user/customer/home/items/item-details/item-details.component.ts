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
  fourItems: any;
  itemID: number = null;
  itemIdre: number = null;
  test: number = 39;
  CompanyId: number = null;

  ngDoCheck() {}
  ngOnInit() {
    this.get4itemsOfThatCompany();
    this.local.item_id.subscribe((itemid) => {
      sessionStorage.setItem('itemIdre', itemid);
      this.itemID = itemid;
      this.showClickedOnItem();
      console.log('itemssssss', itemid);
    });
    console.log('itemid******', this.itemID);
  }

  // to show the main item that the user has clicked on
  showClickedOnItem() {
    this.itemIdre = parseInt(sessionStorage.getItem('itemIdre'));
    return this._http
      .getItemData(this.itemID || this.itemIdre)
      .subscribe((res) => {
        this.Data.push(res);
        console.log('itemData ==> ', this.Data);
      });
  }
  get4itemsOfThatCompany() {
    return this._http.getItems().subscribe((res: any[]) => {
      console.log('////////---', res);
      for (let i = 0; i < res.length; i++) {
        if (this.itemID == res[i]['id']) {
          console.log('////////', res);
          this.CompanyId = res[i]['itemCompany'];
          if (this.CompanyId == res[i]['itemCompany']) {
            this.fourItems = res;
            console.log('--------------------', this.fourItems);
          }
        }
      }
    });
  }
}
// show all of them down
