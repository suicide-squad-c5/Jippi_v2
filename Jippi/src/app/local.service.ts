import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LocalService {
  private userType = new BehaviorSubject('visiteur');
  userTy = this.userType.asObservable();
  private userid = new BehaviorSubject(null);
  user_id = this.userid.asObservable();
  private userInfo = new BehaviorSubject({});
  user_info = this.userInfo.asObservable();
  // company side.
  private companyID = new BehaviorSubject(null);
  company_iD = this.companyID.asObservable();
  //basket side.
  private basket = new BehaviorSubject([]);
  basktItems = this.basket.asObservable();
  //quantity items
  private quantity = new BehaviorSubject([]);
  quantityItems = this.quantity.asObservable();
  //items for filter
  private itemslist = new BehaviorSubject([]);
  items_list = this.itemslist.asObservable();
  // item ID
  private itemId = new BehaviorSubject(null);
  item_id = this.itemId.asObservable();
  constructor() {}

  changeType(type: string) {
    this.userType.next(type);
  }

  getUserId(id: number) {
    this.userid.next(id);
  }

  getUserInfo(info: any) {
    this.userInfo.next(info);
  }

  addToBasket(basket_item: any) {
    this.basket.next(basket_item);
  }

  addOne(qnt: any) {
    this.quantity.next(qnt);
  }

  passItems(items) {
    this.itemslist.next(items);
  }
  asItemid(itemid) {
    this.itemId.next(itemid);
  }
}
