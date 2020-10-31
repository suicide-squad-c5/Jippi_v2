import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../../http.service';
import { LocalService } from '../../../../local.service';
@Component({
  selector: 'app-comp-edit-profile',
  templateUrl: './comp-edit-profile.component.html',
  styleUrls: ['./comp-edit-profile.component.css'],
})
export class CompEditProfileComponent implements OnInit {
  constructor(private _http: HttpService, private local: LocalService) {}
  alert: string = '';
  companyInfo: any = {};
  /** image preview **/
  public imagePath;
  imgURL: any;
  /**************/
  companyName: string = '';
  companyEmail: string = '';
  location: string = '';
  phoneNumber: string = '';
  companyPassword: string = '';
  companyConfirmPassword: string = '';
  avatar: string = '';
  ngOnInit(): void {
    this.local.company_info.subscribe((info) => (this.companyInfo = info));
    this.companyName = this.companyInfo[0].companyName;
    this.companyEmail = this.companyInfo[0].companyEmail;
    this.phoneNumber = this.companyInfo[0].phoneNumber;
    this.location = this.companyInfo[0]?.location;
    this.avatar = this.companyInfo[0].avatar;
    console.log(
      'CompEditProfileComponent -> ngOnInit -> this.companyInfo',
      this.companyInfo
    );
  }

  onSelectFile(event) {
    this.avatar = event.target.files[0];
    console.log(
      'CompEditProfileComponent -> onSelectFile -> this.avatar',
      this.avatar
    );
  }

  sendUpdate() {
    const formData = new FormData();
    formData.append('companyId', this.companyInfo[0].id);
    formData.append('companyName', this.companyName);
    formData.append('companyEmail', this.companyEmail);
    formData.append('companyPassword', this.companyPassword);
    formData.append('avatar', this.avatar);
    formData.append('location', this.location);
    formData.append('phoneNumber', this.phoneNumber);
    return this._http.editCompanyProfileData(formData).subscribe((res) => {
      console.log('editCompanyProfileData res ===>', res);
    });
  }

  preview(files) {
    if (files.length === 0) {
      return;
    }
    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.imgURL = reader.result;
    };
  }
}
