import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../../http.service';
import { LocalService } from '../../../../local.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-comp-edit-profile',
  templateUrl: './comp-edit-profile.component.html',
  styleUrls: ['./comp-edit-profile.component.css'],
})
export class CompEditProfileComponent implements OnInit {
  constructor(
    private _http: HttpService,
    private local: LocalService,
    private router: Router
  ) {}
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
  timing: string = '';
  changePass: boolean = false;
  active: string = 'desactivate';
  desactivate: string = 'active';

  ngOnInit(): void {
    this.local.company_info.subscribe((info) => (this.companyInfo = info));
    this.companyName = this.companyInfo[0].companyName;
    this.companyEmail = this.companyInfo[0].companyEmail;
    this.phoneNumber = this.companyInfo[0].phoneNumber;
    this.location = this.companyInfo[0]?.location;
    this.avatar = this.companyInfo[0].avatar;
    this.timing = this.companyInfo[0].timing;
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
    formData.append('avatar', this.avatar);
    formData.append('location', this.location);
    formData.append('phoneNumber', this.phoneNumber);
    formData.append('timing', this.timing);
    return this._http.editCompanyProfileData(formData).subscribe((res: any) => {
      console.log('editCompanyProfileData res ===>', res);
      if (res.status === 200) {
        Swal.fire({
          icon: 'success',
          title: 'Done',
          text: 'Your account has been updated',
        });
        this.router.navigateByUrl('/company/profile');
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Something worng',
          text: 'Update account failed! please try again',
        });
      }
    });
  }

  //UPDATE COMPANY PASSWORD.
  updatPassword() {
    const newPassword = {
      companyId: this.companyInfo[0].id,
      companyPassword: this.companyPassword,
    };
    console.log(newPassword);
    // CHECK IF BOTH COMPANY PASSWORD ARE THE SAME.
    if (newPassword.companyPassword !== this.companyConfirmPassword) {
      Swal.fire({
        icon: 'error',
        title: 'Something worng',
        text: 'There is an issue with your password, please check it again',
      });
    } else {
      return this._http.updateCompanyPassword(newPassword).subscribe((res) => {
        console.log(res);
      });
    }
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

  selectTime(event: any) {
    this.timing = event.target.value;
    console.log(this.timing);
  }

  changePassword() {
    this.changePass = true;
    this.active = 'active';
    this.desactivate = 'desactivate';
  }

  changeSettings() {
    this.changePass = false;
    this.active = 'desactivate';
    this.desactivate = 'active';
  }
}
