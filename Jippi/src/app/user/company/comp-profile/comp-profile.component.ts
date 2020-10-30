import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../http.service';
import { LocalService } from '../../../local.service';

@Component({
  selector: 'app-comp-profile',
  templateUrl: './comp-profile.component.html',
  styleUrls: ['./comp-profile.component.css'],
})
export class CompProfileComponent implements OnInit {
  constructor(private _http: HttpService, private local: LocalService) {}
  company_Data: any = [];
  src: string = '';
  CId: any;
  companyInfo: any = {};
  ngOnInit() {
    this.getDataForProfile();
    this.local.company_info.subscribe((info) => (this.companyInfo = info));
  }
  /*that's to get the company data  to display it  (one object from the DB)*/
  getDataForProfile() {
    var CompanyID = localStorage.getItem('comapnyId');
    this.CId = CompanyID;
    return this._http.getCompanyData(this.CId).subscribe((res) => {
      this.company_Data.push(res);
      this.src = res['avatar'];
      this.local.getCompaniInfo(this.company_Data);
    });
  }
}
