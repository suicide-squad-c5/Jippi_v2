import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { HttpService } from '../../../../../http.service';
@Component({
  selector: 'app-update-item',
  templateUrl: './update-item.component.html',
  styleUrls: ['./update-item.component.css'],
})
export class UpdateItemComponent implements OnInit {
  constructor(private location: Location, private _http: HttpService) {}
  oldData: any;
  itemName: string = '';
  itemPrice: any = 0;
  itemDescription: string = '';
  itemImage: any;
  selectedCategory: string = 'clothing';
  selectedKind: string = 'Male';
  listKind = ['Male', 'Female', 'Kids'];
  url: any;
  itemId: any;
  kind = {
    clothing: [] = ['Male', 'Female', 'Kids'],
    electronics: [] = [
      'Camera & Photo',
      'Computers',
      'Wearable Technology',
      'Cell Phones',
    ],
    Outdoor: [] = ['camping', 'Hunting and fishing', 'Biking', 'Rock Climbing'],
    Toys: [] = [
      'Action figures',
      'Animals',
      'Cars and radio controlled',
      'Creative toys',
      'Dolls',
    ],
  };
  ngOnInit(): void {
    this.oldData = this.location.getState();
    console.log(
      'UpdateItemComponent -> ngOnInit -> this.oldData',
      this.oldData
    );
    this.itemName = this.oldData.itemName;
    this.itemPrice = this.oldData.itemPrice;
    this.itemDescription = this.oldData.itemDescription;
  }
  selectCategoryHandler(event: any) {
    this.selectedCategory = event.target.value;
    this.listKind = this.kind[this.selectedCategory];
    this.selectedKind = this.listKind[0];
  }

  selectKindHandler(event: any) {
    this.selectedKind = event.target.value;
  }

  chooseAnImage(event) {
    this.itemImage = event.target.files[0];
  }

  saveItem() {
    const formData = new FormData();
    formData.append('itemName', this.itemName);
    formData.append('id', this.oldData.id);
    formData.append('itemPrice', this.itemPrice);
    formData.append('itemDescription', this.itemDescription);
    formData.append('itemImage', this.itemImage);
    formData.append('companyID', this.oldData.itemCompany);
    formData.append('selectedCategory', this.selectedCategory);
    formData.append('selectedKind', this.selectedKind);

    return this._http.updateItem(formData).subscribe((res) => {
      this.itemId = res['id'];
      return this._http.getItemData(this.itemId).subscribe((res) => {
        console.log('getItemDataToShowTheImage', res);
        this.url = res['itemImage'];
      });
    });
  }

  show() {
    console.log('im show');
  }
}
