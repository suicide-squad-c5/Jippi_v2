import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../../../../../http.service';

@Component({
  selector: 'app-admin-item',
  templateUrl: './admin-item.component.html',
  styleUrls: ['./admin-item.component.css'],
})
export class AdminItemComponent implements OnInit {
  @Input() oneItem: any;
  constructor(private _http: HttpService) {}

  ngOnInit(): void {
    console.log('item', this.oneItem);
  }

  deleteItem(itemId) {
    // CHECK !
    console.log(itemId);

    this._http.deleteItem(itemId).subscribe((res) => {
      console.log(res);
      alert('deleted !');
    });
  }
}
