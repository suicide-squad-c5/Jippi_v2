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
  //companie information  
  companyInfo = new BehaviorSubject({});
  company_info = this.companyInfo.asObservable();
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
//all items for  filter
  private allitems = new BehaviorSubject(false);
  all_items = this.allitems.asObservable();
  // GET USER DATA FOR THE BAN AND UNBANNED.
  private getcompanyData = new BehaviorSubject(false);
  getcompany_Data = this.getcompanyData.asObservable();
  // ITEMNAME FOR THE NAVBAR SEARCH.
  private getItemName = new BehaviorSubject('');
  getitem_name = this.getItemName.asObservable();

  //chande deleteAction boolean to rerander company_items component
  private delete = new BehaviorSubject(false);
  deleted = this.delete.asObservable();

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
// get company info
getCompaniInfo(info: any) {
  this.companyInfo.next(info)
}
  addToBasket(basket_item: any) {
    this.basket.next(basket_item);
  }

  addOne(qnt: any) {
    this.quantity.next(qnt);
  }

// function to pass and filter items
  passItems(items) {
    this.itemslist.next(items);
  }
//function to pass all items;
  passAllItems(items){
      this.allitems.next(items);
    }
  // FUNCTION FOR CHECK COMPANY DATA ALWAYS.
  companyData(boo) {
    this.getcompanyData.next(boo);

  }
  ////
  deleteFun(boolean) {
    this.delete.next(boolean);
  }
  asItemid(itemid) {
    this.itemId.next(itemid);


  }
  // FUNCTION FOR ITEMANEM.
  itemNameCheck(itemName) {
    this.getItemName.next(itemName);
  }
}
