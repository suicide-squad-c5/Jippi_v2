import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../../http.service';
import { LocalService } from '../../../../local.service';
import { Router } from '@angular/router';

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

  constructor(
    private _http: HttpService,
    private local: LocalService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.local.userTy.subscribe((type) => (this.userType = type));
  }

  ngDoCheck() {
    // check ! (passed fine)
    // console.log(this.companyEmailLog);
  }

  companyDataLog() {
    let LogCdata = {
      companyEmail: this.companyEmailLog,
      companyPassword: this.companyPasswordLog,
    };

    // check ! (passed fine)
    console.log(LogCdata);
    // send request to check if this user exist in the database.
    this._http.postLoginCompany(LogCdata).subscribe((res) => {
      console.log('yo', res);
      localStorage.setItem('companyToken', res['token']);
      localStorage.setItem('comapnyId', res['id']);
      this.changeNav();
    });
  }

  changeNav() {
    this.local.changeType('company');
    this.router.navigateByUrl('/');
  }
}
