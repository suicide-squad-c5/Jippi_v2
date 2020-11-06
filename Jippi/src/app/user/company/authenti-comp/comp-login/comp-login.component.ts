import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../../http.service';
import { LocalService } from '../../../../local.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-comp-login',
  templateUrl: './comp-login.component.html',
  styleUrls: ['./comp-login.component.css'],
})
export class CompLoginComponent implements OnInit {
  // take all login values from the company login.
  companyEmailLog: string = '';
  companyPasswordLog: string = '';
  token: string = '';
  userType: string = 'vsiteur';
  companyId: number = null;
  alert: boolean = false;
  verified: boolean = true;

  constructor(
    private _http: HttpService,
    private local: LocalService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.local.userTy.subscribe((type) => (this.userType = type));
  }

  ngDoCheck() {
    if (this.verified === false) {
      this.router.navigateByUrl('/company/login');
    }
    console.log('asdfasdfasdfasdfsadfasd', this.verified);
  }

  companyDataLog() {
    let LogCdata = {
      companyEmail: this.companyEmailLog,
      companyPassword: this.companyPasswordLog,
    };

    //// check ! (passed fine)
    console.log(LogCdata);

    // send request to check if this user exist in the database.
    this._http.postLoginCompany(LogCdata).subscribe((res: any) => {
      if (res.status === 800) {
        this.alert = true;
      } else if (res.status === 401) {
        Swal.fire({
          icon: 'error',
          title: 'Oops',
          text: `this company does not exist`,
        });
      } else if (res.status === 500) {
        Swal.fire({
          icon: 'error',
          title: 'Oops',
          text: `wrong password `,
        });
      } else {
        localStorage.setItem('companyToken', res['token']);
        localStorage.setItem('comapnyId', res['id']);
        this.local.changeType('company');
        this.router.navigateByUrl('/company/profile');
      }
    });
  }

  changeNav() {
    this.companyDataLog();
  }
}
