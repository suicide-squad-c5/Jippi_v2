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
  name: string = '';
  email: string = '';
  location: string = '';
  phoneNumber: Number;
  src: string = '';
  CId: any;
  url: any;
  companyInfo: any = {};
  ngOnInit() {
    this.getDataForProfile();
    this.local.company_info.subscribe(info => this.companyInfo = info);
    console.log('url', this.url);
    console.log('src:================> ', this.src);
  }

  ngDoCheck() {
    this.sendCompanyInfo();
  }

  // pick image
  chooseAvatar(event) {
    this.url = event.target.files[0];
    console.log('event.target.result', event.target.files[0]);
  }
  // upload image
  UpdateAvatar() {
    const formData = new FormData();
    formData.append('file', this.url);
    formData.append('cId', this.CId);
    return this._http
      .updateCompanyAvatar(formData, this.CId)
      .subscribe((res) => {
        console.log('updateCompanyAvatar res ===>', res);
      });
  }

  /* jus to edit all the company profile exept the 'password'
  it will be updated in the  ==> "i forgot my password part" */

  editProfile() {
    var CompanyID = localStorage.getItem('comapnyId');
    console.log('CompanyID ======>', CompanyID);
    this.CId = CompanyID;
    return this._http
      .editCompanyProfileData(
        this.name,
        this.email,
        this.location,
        this.phoneNumber,
        this.CId
      )
      .subscribe((res) => {
        console.log('editCompanyProfileData res ===>', res);
      });
  }

  /*that's to get the company data  to display it  (one object from the DB)*/
  getDataForProfile() {
    var CompanyID = localStorage.getItem('comapnyId');
    this.CId = CompanyID;
    return this._http.getCompanyData(this.CId).subscribe((res) => {
      console.log('getCompanyData   res ===>', res);
      this.company_Data.push(res);
      this.src = res['avatar'];
      console.log("res['avatar']", res['avatar']);
      console.log('this.company_Data ===>', this.company_Data);
      console.log('this.src +++', this.src);
    });
  }

  sendCompanyInfo(){
    this.local.getCompaniInfo(this.company_Data)
  }
}
