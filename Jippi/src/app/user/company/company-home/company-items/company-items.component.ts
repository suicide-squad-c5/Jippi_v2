import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../../http.service';
import { LocalService } from '../../../../local.service';
@Component({
  selector: 'app-company-items',
  templateUrl: './company-items.component.html',
  styleUrls: ['./company-items.component.css'],
})
export class CompanyItemsComponent implements OnInit {
  companyItems: any = [];
  deleteAction: boolean = false;
  companyItem: string = '';

  constructor(private _http: HttpService, private local: LocalService) {}

  ngOnInit(): void {
    this.getCompanyItems(localStorage.comapnyId);
    this.local.deleted.subscribe((boolean) => (this.deleteAction = boolean));
  }

  ngDoCheck() {
    if (this.deleteAction) {
      this.getCompanyItems(localStorage.comapnyId);
      this.deleteAction = false;
    }
  }

  getCompanyItems(id) {
    return this._http.getcompanyItems(id).subscribe((data) => {
      this.companyItems = data;
    });
  }

  Search() {
    this.companyItems = this.companyItems.filter((item) => {
      return item.itemName
        .toLowerCase()
        .match(this.companyItem.toLocaleLowerCase());
    });
  }
}
