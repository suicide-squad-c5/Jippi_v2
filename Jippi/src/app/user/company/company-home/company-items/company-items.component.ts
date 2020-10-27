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

  constructor(private _http: HttpService, private local: LocalService) {}

  ngOnInit(): void {
    console.log('boo****>', this.deleteAction);
    this.getCompanyItems(localStorage.comapnyId);
    console.log(
      'CompanyItemsComponent -> getCompanyItems -> this.companyItems',
      this.companyItems
    );
    this.local.deleted.subscribe((boolean) => (this.deleteAction = boolean));
  }

  ngDoCheck() {
    console.log('boo****>', this.deleteAction);
    if (this.deleteAction) {
      this.getCompanyItems(localStorage.comapnyId);
      this.deleteAction = false;
    }
  }

  getCompanyItems(id) {
    return this._http.getcompanyItems(id).subscribe((data) => {
      this.companyItems = data;
      console.log(
        'CompanyItemsComponent -> getCompanyItems -> this.companyItems',
        this.companyItems
      );
    });
  }
}
