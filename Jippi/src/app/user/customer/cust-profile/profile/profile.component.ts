import { Component, OnInit,  Input, ViewChild } from '@angular/core';
import { HttpService } from '../../../../http.service'
import { LocalService } from '../../../../local.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userInfo: any = {};
  user_Info: any = {};

  constructor(private local: LocalService, private _http: HttpService) { }

  ngOnInit(): void {
     this.getUserInfo();
     this.local.user_info.subscribe(info => this.user_Info = info);
  }
  ngDoCheck(){
    this.sendUserInfo();
  }
/// function for get the customer information from db
  async getUserInfo(){
    this._http.custProfile(parseInt(localStorage.Id)).subscribe((data) => {
      this.userInfo = data;
      console.log('<==>', this.userInfo)
    });
    // await this.sendUserInfo()
  }
  sendUserInfo(){
    this.local.getUserInfo(this.userInfo);
    console.log('<==>', this.userInfo)
  }
}
