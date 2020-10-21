import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../http.service';

@Component({
  selector: 'app-comp-profile',
  templateUrl: './comp-profile.component.html',
  styleUrls: ['./comp-profile.component.css'],
})
export class CompProfileComponent implements OnInit {
  constructor(private _http: HttpService) {}
  company_Data: any = [];
  name: string = '';
  email: string = '';
  location: string = '';
  phoneNumber: Number;
  src: any;
  CId: any;
  ngOnInit() {
    this.getDataForProfile();
  }

  updateAvatar(event) {
    var theFile = event.target.files;
    console.log('event ', event.target.files[0]);
    if (theFile && theFile[0]) {
      var read = new FileReader();
      read.readAsDataURL(theFile[0]);
      read.onload = (event) => {
        this.src = event.target.result;
      };
    }
    // console.log('updateAvatar', read.result);
    console.log('event.target.result', event.target);
    return this._http
      .updateCompanyAvatar(this.CId, this.src)
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
      console.log('this.company_Data ===>', this.company_Data);
    });
  }
}
