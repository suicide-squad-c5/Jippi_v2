import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../../http.service';
import { LocalService } from '../../../../local.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css'],
})
export class EditProfileComponent implements OnInit {
  public imagePath;
  imgURL: any;
  user_Info: any = {};
  userId: any = parseInt(localStorage['Id']);
  firstName: string | Blob = '';
  lastName: string = '';
  phoneNumber: string | Blob = null;
  email: any = '';
  address: string = '';
  password: string = '';
  confirmPassword: String = '';
  url: any = '';
  alertt: string = '';
  newinfo: any = [];
  imageId: any;
  changePass: boolean = false;
  active: string = 'desactivate';
  desactivate: string = 'active';

  constructor(private _http: HttpService, private local: LocalService) {}

  ngOnInit(): void {
    this.getImage();
    this.local.user_info.subscribe((info) => (this.user_Info = info));
    this.firstName = this.user_Info.first_name;
    this.lastName = this.user_Info.last_name;
    this.phoneNumber = this.user_Info.phone_number;
    this.email = this.user_Info.email;
    this.address = this.user_Info.address;

    // this.url = this.user_Info.avatar;
    console.log('++++>', this.user_Info);
    console.log('firstName', this.firstName);
  }
  //function to read avatar url
  onSelectFile(event) {
    console.log('evvnet', event.target.files[0]);
    this.url = event.target.files[0];
    console.log('evvnet', event.target.files[0]);
  }

  check() {
    let succ = 'Success update';
    let err = 'Some think rong';
    var em = this.email;
    if (
      em.length !== 0 &&
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(em)
    ) {
      this.alertt = err;
    } else if (
      em.length === 0 ||
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(em)
    ) {
      this.alertt = succ;
      return true;
    }
  }
  updateCustomerInfo() {
    const formData = new FormData();
    formData.append('userId', this.userId);
    formData.append('customerImg', this.url ? this.url : this.user_Info.avatar);
    formData.append('firstName', this.firstName);
    formData.append('lastName', this.lastName);
    formData.append('email', this.email);
    formData.append('address', this.address);
    formData.append('phoneNumber', this.phoneNumber);
    return this._http
      .updateCusInfo(this.userId, formData)
      .subscribe((data: any) => {
        this.newinfo = data;
        console.log('data custumer update====**-*//-*//-*-', data);
        if (data.status === 200) {
          Swal.fire({
            icon: 'success',
            title: 'Done',
            text: 'Your account has been updated',
          });
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Something worng',
            text: 'Update account failed! please try again',
          });
        }
      });
  }
  getImage() {
    return this._http
      .getTheUpdateCustomerImage(this.userId)
      .subscribe((res) => {
        this.url = res['avatar'];
        console.log('000105424', res['avatar']);
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

  // UPDATE PASSWORD.
  updatPassword() {
    const newPassword = {
      password: this.password,
      customerId: this.userId,
    };

    if (newPassword.password !== this.confirmPassword) {
      Swal.fire({
        icon: 'error',
        title: 'Something worng',
        text: 'There is an issue with your password, please check it again',
      });
    } else {
      this._http.updateCustomerPassword(newPassword).subscribe((res: any) => {
        console.log(res);
        if (res.status === 101) {
          Swal.fire({
            icon: 'success',
            title: 'Done',
            text: 'Your password has been changed',
          });
        }
      });
    }
  }
}
