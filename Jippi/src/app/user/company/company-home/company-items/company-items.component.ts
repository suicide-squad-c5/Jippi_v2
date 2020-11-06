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
    this.getCompanyItems(localStorage.comapnyId);
    this.local.deleted.subscribe((boolean) => (this.deleteAction = boolean));
    this.local.itEms.subscribe(item => this.companyItems = item);
  }

  ngDoCheck() {
    if (this.deleteAction) {
      this.getCompanyItems(localStorage.comapnyId);
      this.deleteAction = false;
    }
    console.log("Achref",this.companyItems)
  }

  getCompanyItems(id) {
     this._http.getcompanyItems(id).subscribe((data) => {
      this.companyItems = data;
       this.local.itemsOrder(this.companyItems);
    });
  }
}
