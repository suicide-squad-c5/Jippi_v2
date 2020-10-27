import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../../../../../http.service';
import { LocalService } from '../../../../../local.service';
@Component({
  selector: 'app-company-item',
  templateUrl: './company-item.component.html',
  styleUrls: ['./company-item.component.css'],
})
export class CompanyItemComponent implements OnInit {
  @Input() companyItems: any;
  delete: boolean;
  constructor(private _http: HttpService, private local: LocalService) {}

  ngOnInit(): void {
    console.log('CompanyItemComponent -> companyItems', this.companyItems);
    this.local.deleted.subscribe((boolean) => (this.delete = boolean));
    console.log('+++++>', this.delete);
  }

  deleteItem(itemId) {
    // CHECK !
    console.log(itemId);
    this._http.deleteItem(itemId).subscribe((res) => {
      console.log(res);
      alert('deleted !');
      this.delete = true;
      this.local.deleteFun(this.delete);
      console.log('======>', this.delete);
    });
  }
}
