import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../../http.service';
@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css'],
})
export class AddItemComponent implements OnInit {
  itemName: string = '';
  itemPrice: number = null;
  itemDescription: string = '';
  itemImage: string = '';
  itemRating: number = null;
  companyID: number = 1;
  selectedCategory: string = 'clothing';
  selectedKind: string = 'Male';
  listKind = ['Male', 'Female', 'Kids'];

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

  constructor(private _http: HttpService) {}

  ngOnInit(): void {}

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

  saveItem() {
    return this._http.postAddItem(
      this.itemName,
      this.itemPrice,
      this.itemDescription,
      this.itemImage,
      this.itemRating,
      this.companyID,
      this.selectedCategory,
      this.selectedKind
    );
  }
}
