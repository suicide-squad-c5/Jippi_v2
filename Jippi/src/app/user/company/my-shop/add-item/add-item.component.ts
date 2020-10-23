import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../../http.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css'],
})
export class AddItemComponent implements OnInit {
  constructor(private _http: HttpService) {}
  itemName: string = '';
  itemPrice: any = 0;
  itemDescription: string = '';
  itemImage: any;
  itemRating: any = 0;
  companyID: any = parseInt(localStorage.comapnyId);
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
    console.log('companyID', this.companyID);
    console.log('this.url', this.url);
  }
  show() {
    console.log('AddItemComponent -> itemName', this.itemName);
    console.log('Addthis.ItemComponent -> this.itemPrice', this.itemPrice);
    console.log(
      'Addthis.ItemComponent -> this.itemDescription',
      this.itemDescription
    );
    console.log('Addthis.ItemComponent -> this.itemImage', this.itemImage);
    console.log('Addthis.ItemComponent -> this.itemRating', this.itemRating);
    console.log('AddItemComponent -> ngOnInit ->this.company', this.companyID);
    console.log(
      'AddItemComponent -> ngOnInit ->this.selectedCategory',
      this.selectedCategory
    );
    console.log(
      'AddItemComponent -> selectKindHandler -> this.selectedKind',
      this.selectedKind
    );
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
    console.log('this.itemImage===========<<<', this.itemImage);
  }

  saveItem() {
    const formData = new FormData();
    formData.append('itemName', this.itemName);
    formData.append('itemPrice', this.itemPrice);
    formData.append('itemDescription', this.itemDescription);
    formData.append('itemImage', this.itemImage);
    formData.append('itemRating', this.itemRating);
    formData.append('companyID', this.companyID);
    formData.append('selectedCategory', this.selectedCategory);
    formData.append('selectedKind', this.selectedKind);

    return this._http.postAddItem(formData).subscribe((res) => {
      this.itemId = res['id'];
      // console.log(this.url);
      console.log('UUUUUUUUUUUUU=======> ', res['id']);

      return this._http.getItemData(this.itemId).subscribe((res) => {
        console.log('getItemDataToShowTheImage', res);
        this.url = res['itemImage'];
      });
    });
  }
}
