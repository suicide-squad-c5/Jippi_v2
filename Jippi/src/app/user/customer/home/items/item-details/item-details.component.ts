import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../../../http.service';
import { LocalService } from '../../../../../local.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css'],
})
export class ItemDetailsComponent implements OnInit {
  item: any = {};
  fourItems: any;
  itemID: number = null;
  itemIdre: number = null;
  test: number = 39;
  CompanyId: number = null;
  constructor(
    private router: Router,
    private _http: HttpService,
    private local: LocalService,
    private route: ActivatedRoute
  ) {}

  ngDoCheck() {}
  ngOnInit() {
    // this.local.item_id.subscribe((itemid) => {
    //   sessionStorage.setItem('itemIdre', itemid);
    // this.itemID = itemid;
    // });
    // Get the id from params
    // Get the company id
    // Get the list of that compay's items
    this.route.params.subscribe((params) => {
      console.log(params);
      this.itemID = params.id;
      this.showClickedOnItem(params.id);
    });

    this.get4itemsOfThatCompany();
    console.log('//////////', this.fourItems);
  }

  // to show the main item that the user has clicked on
  showClickedOnItem(id) {
    // this.itemIdre = parseInt(sessionStorage.getItem('itemIdre'));
    return this._http.getItemData(id).subscribe((res) => {
      this.item = res;
      console.log(this.item);
    });
  }
  //  to show  some items belong to the same comapny
  get4itemsOfThatCompany() {
    return this._http.getItems().subscribe((res: any[]) => {
      for (let i = 0; i < res.length; i++) {
        if (this.itemID == res[i].id) {
          this.CompanyId = res[i]['itemCompany'];
          console.log('*/-/*-/+-*-', this.CompanyId);
          this.getSomeitems();
        }
      }
    });
  }
  getSomeitems() {
    return this._http.getfour(this.CompanyId).subscribe((res: any[]) => {
      console.log('res', res);
      this.fourItems = res;
    });
  }
  // to see the item that u click on in details
  view(doid) {
    this.router.navigate([`/items/details/${doid}`]);
  }
}
