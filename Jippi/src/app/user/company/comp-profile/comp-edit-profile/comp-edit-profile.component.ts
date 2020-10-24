import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../../http.service';

@Component({
  selector: 'app-comp-edit-profile',
  templateUrl: './comp-edit-profile.component.html',
  styleUrls: ['./comp-edit-profile.component.css'],
})
export class CompEditProfileComponent implements OnInit {
  constructor(private _http: HttpService) {}
  companyName: string = '';
  companyEmail: string = '';
  location: string = '';
  phoneNumber: string = '';
  companyPassword: string = '';
  companyConfirmPassword: string = '';
  alertt: string = '';
  src: string = '';
  companyId: any;
  avatarUrl: any;

  ngOnInit(): void {}

  editcompanyProfile() {
    var CompanyID = localStorage.getItem('comapnyId');
    console.log('CompanyID ======>', CompanyID);
    this.companyId = CompanyID;
    return this._http
      .editCompanyProfileData(
        this.companyName,
        this.companyEmail,
        this.location,
        this.phoneNumber,
        this.companyId
      )
      .subscribe((res) => {
        console.log('editCompanyProfileData res ===>', res);
      });
  }

  chooseAvatar(event) {
    this.avatarUrl = event.target.files[0];
    console.log('event.target.result', event.target.files[0]);
  }

  // upload image
  UpdateAvatar() {
    const formData = new FormData();
    formData.append('file', this.avatarUrl);
    formData.append('cId', this.companyId);
    return this._http
      .updateCompanyAvatar(formData, this.companyId)
      .subscribe((res) => {
        console.log('updateCompanyAvatar res ===>', res);
      });
  }
}
