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
  userid: number = null;

  constructor(private local: LocalService, private _http: HttpService) { }

  ngOnInit(): void {
     this.local.user_id.subscribe( id => this.userid = id);
     console.log('====>', this.userid);
     this.getUserInfo();
  }
/// function for get the customer information from db
  getUserInfo(){
    this._http.custProfile(this.userid).subscribe((data) => {
      this.userInfo = data;
      console.log('<==>', this.userInfo)
    });
  }

}
