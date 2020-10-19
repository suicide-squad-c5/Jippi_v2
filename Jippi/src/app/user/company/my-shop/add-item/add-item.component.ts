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
  companyID: 1;

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
  }
  saveItem() {
    return this._http.postAddItem(
      this.itemName,
      this.itemPrice,
      this.itemDescription,
      this.itemImage,
      this.itemRating,
      this.companyID
    );
  }
}
