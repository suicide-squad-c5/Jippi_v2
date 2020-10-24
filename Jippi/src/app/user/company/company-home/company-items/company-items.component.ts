import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../../http.service';
@Component({
  selector: 'app-company-items',
  templateUrl: './company-items.component.html',
  styleUrls: ['./company-items.component.css'],
})
export class CompanyItemsComponent implements OnInit {
  companyItems: any = [];

  constructor(private _http: HttpService) {}

  ngOnInit(): void {
    this.getCompanyItems(localStorage.comapnyId);
    // setTimeout(() => {
    console.log(
      'CompanyItemsComponent -> getCompanyItems -> this.companyItems',
      this.companyItems
    );
    // }, 1000);
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
