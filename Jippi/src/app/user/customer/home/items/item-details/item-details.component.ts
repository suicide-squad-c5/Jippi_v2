import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../../../http.service';
import { LocalService } from '../../../../../local.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css'],
})
export class ItemDetailsComponent implements OnInit {
  item: any = {};

  check: boolean = false;
  fourItems: any;
  itemID: any;
  itemIdre: number = null;
  test: number = 39;
  CompanyId: number = null;
  campanysNames: any;
  companyNam: any;
  quantity: any;
  basket: any;
  starRating: number = 0;
  itemId: string = '';
  routeer: string = '';

  constructor(
    private router: Router,
    private _http: HttpService,
    private local: LocalService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    // this.local.item_id.subscribe((itemid) => {
    //   sessionStorage.setItem('itemIdre', itemid);
    // this.itemID = itemid;
    // });
    // Get the id from params
    // Get the company id
    // Get the list of that compay's items
    this.local.basktItems.subscribe(
      (basket_item) => (this.basket = basket_item)
    );
    this.local.quantityItems.subscribe((qnt) => (this.quantity = qnt));
    this.local.companys_Names.subscribe((name) => (this.campanysNames = name));
    this.route.params.subscribe((params) => {
      console.log(params);
      this.itemID = params.id;

      this.showClickedOnItem(params.id);
    });
    // console.log('//////////', this.fourItems);
  }
  ngDoCheck() {
    // console.log('all item name',this.fourItems, this.itemID);
    //  this.fourItems = this.fourItems?.filter( itm => itm.id !== this.itemID);
    //  console.log('fourItems====>S', this.fourItems)
    this.checkFun();
  }

  // to show the main item that the user has clicked on
  showClickedOnItem(id) {
    // this.itemIdre = parseInt(sessionStorage.getItem('itemIdre'));
    return this._http.getItemData(id).subscribe((res) => {
      this.item = res;
      this.check = true;
    });
  }
  //  to show  some items belong to the same comapny
  get4itemsOfThatCompany() {
    return this._http.getItems().subscribe((res: any[]) => {
      for (let i = 0; i < res.length; i++) {
        if (this.itemID == res[i].id) {
          this.CompanyId = res[i]['itemCompany'];
          // console.log('*/-/*-/+-*-', this.CompanyId);
          this.getSomeitems();
        }
      }
    });
  }
  getSomeitems() {
    return this._http.getfour(this.CompanyId).subscribe((res: any[]) => {
      console.log('res', res);
      this.fourItems = res.slice(0, 3);
      this.fourItems = this.fourItems.filter(
        (itm) => parseInt(itm.id) !== parseInt(this.itemID)
      );
    });
  }
  // to see the item that u click on in details
  view(doid) {
    this.router.navigate([`/items/details/${doid}`]);
  }

  addFun() {
    if (this.basket.indexOf(this.item) === -1) {
      this.basket.push(this.item);
      this.quantity.push(1);
      this.companyNameFunc(this.item.itemCompany);
    }
    this.addItem();
    this.addOne();
    this.local.passCompanyName(this.campanysNames);
    console.log('companyName===>', this.campanysNames);
  }

  addItem() {
    if (localStorage.Id) {
      this.local.addToBasket(this.basket);
    } else {
      this.router.navigateByUrl('/signup');
    }
  }
  addOne() {
    this.local.addOne(this.quantity);
  }

  //chek for change items
  checkFun() {
    if (this.check) {
      this.get4itemsOfThatCompany();

      this.check = false;
    }
  }
  //get the company name
  companyNameFunc(CompanyId) {
    // console.log('CompanyID+++>', CompanyId);
    this._http.getCompanyName(CompanyId).subscribe((data) => {
      // console.log('companyName====>', data);
      this.companyNam = data;
      this.campanysNames.push(this.companyNam?.companyName);
    });
  }

  moreDetails(item) {
    this.router.navigate([`/items/details/${item.id}`]);
  }
}
