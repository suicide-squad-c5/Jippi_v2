import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../../http.service';
import { LocalService } from '../../../../local.service';
@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css'],
})
export class EditProfileComponent implements OnInit {
  user_Info: any = {};
  firstName: String = '';
  lastName: String = '';
  phoneNumber: Number = null;
  email: any = '';
  adress: string = '';
  password: String = '';
  confirmPassword: String = '';
  url: any;
  alertt: string = '';
  newinfo: any = [];
  constructor(private _http: HttpService, private local: LocalService) {}

  ngOnInit(): void {
    this.local.user_info.subscribe((info) => (this.user_Info = info));
    this.firstName = this.user_Info.first_name;
    this.lastName = this.user_Info.last_name;
    this.phoneNumber = this.user_Info.phone_number;
    this.email = this.user_Info.email;
    this.adress = this.user_Info.address;
    this.password = this.user_Info.password;
    this.confirmPassword = this.user_Info.password;
    console.log('++++>', this.user_Info);
    console.log('firstName', this.firstName);
  }

  //function to read avatar url
  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]);

      reader.onload = (event) => {
        this.url = event.target.result;
      };
    }
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
    }
  }
  updateCustomerInfo() {
    if (this.password === this.confirmPassword) {
      var body = {
        userid: localStorage.Id,
        first_name: this.firstName,
        last_name: this.lastName,
        email: this.email,
        password: this.password,
        address: this.adress,
        phone_number: this.phoneNumber,
      };
    }
    this._http
      .updateCusInfo(parseInt(localStorage.Id), body)
      .subscribe((data) => {
        this.newinfo = data;
      });
  }
}
