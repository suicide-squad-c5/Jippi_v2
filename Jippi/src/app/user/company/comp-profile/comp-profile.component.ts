import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../http.service';

@Component({
  selector: 'app-comp-profile',
  templateUrl: './comp-profile.component.html',
  styleUrls: ['./comp-profile.component.css'],
})
export class CompProfileComponent implements OnInit {
  constructor(private _http: HttpService) {}
  name: string = '';
  email: string = '';
  location: string = '';
  phoneNumber: Number;
  src: any = '';
  CId: any = '';
  ngOnInit(): void {}

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
  }
  /* jus to edit all the company profile exept the 'password'
  it will be updated in the  ==> "i forgot my password part" */
  editProfile() {
    var CompanyID = localStorage.getItem('Id');
    console.log(CompanyID);
    this.CId = CompanyID;
    return this._http
      .editCompanyProfileData(
        this.CId,
        this.name,
        this.email,
        this.location,
        this.src,
        this.phoneNumber
      )
      .subscribe((res) => {
        console.log('res', res);
      });
  }
}
