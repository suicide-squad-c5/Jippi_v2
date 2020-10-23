import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../http.service';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.css'],
})
export class AddAdminComponent implements OnInit {
  // GET ALL THE VALUES FROM ADD ADMIN INPUTS.
  adminName: string = '';
  adminEmail: string = '';
  adminPassword: string = '';
  adminCPassword: string = '';
  adminAvatar: string = '';

  constructor(private _http: HttpService) {}

  ngDoCheck() {
    // CHECK !
    console.log(this.adminName);
  }

  createAdmin() {
    const admin = {
      adminName: this.adminName,
      adminEmail: this.adminEmail,
      adminPassword: this.adminPassword,
      adminCPassword: this.adminCPassword,
      // adminAvatar: this.adminAvatar,
    };

    // IF PASSWORD DOSEN'T EQUAL CONFIRM PASSWORD CANCEL REQUEST.
    if (this.adminPassword !== this.adminCPassword) {
      alert('something wrong with password! please try again');
    } else {
      // CHECK ! (passed fine)
      console.log(admin);
      // SEND REQUEST TO THE SERVER SIDE.
      this._http.postAdminCreate(admin).subscribe((data) => {
        alert('Create sucssefuly :)');
      });
    }
  }

  ngOnInit(): void {}
}
