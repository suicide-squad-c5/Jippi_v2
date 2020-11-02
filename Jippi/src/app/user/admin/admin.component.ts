import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';
import { LocalService } from '../../local.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  // get the value from the admin login.
  adminEmail: string = '';
  adminPassword: string = '';
  token: string = '';
  userType: string = 'vsiteur';
  adminId: number = null;

  constructor(
    private _http: HttpService,
    private router: Router,
    private local: LocalService
  ) {}

  ngOnInit(): void {
    this.local.userTy.subscribe((type) => (this.userType = type));
  }

  ngDoCheck() {
    // check ! (passed fine)
    // console.log(this.adminEmail, this.adminPassword);
  }

  adminLogin() {
    const adminLogData = {
      adminEmail: this.adminEmail,
      adminPassword: this.adminPassword,
    };

    //check ! (passed fine)
    console.log(adminLogData);

    // SEND REQUEST TO CHECK IF THIS ADMIN EXISTS OR NOT.
    this._http.postAdminlogin(adminLogData).subscribe((res: any) => {
      console.log(res);
      if (res.status === 400) {
        Swal.fire({
          icon: 'error',
          title: 'Done',
          text: `password wrong`,
        });
      } else if (res.status === 401) {
        Swal.fire({
          icon: 'error',
          title: 'Done',
          text: `this admin are not exist`,
        });
      } else {
        localStorage.setItem('adminToken', res['token']);
        localStorage.setItem('adminId', res['id']);
        this.changeType();
      }
    });
  }

  changeType() {
    this.local.changeType('admin');
    this.router.navigateByUrl('/admin/home');
  }
}
