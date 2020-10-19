import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../../http.service';

@Component({
  selector: 'app-comp-login',
  templateUrl: './comp-login.component.html',
  styleUrls: ['./comp-login.component.css'],
})
export class CompLoginComponent implements OnInit {
  // take all login values from the company login.
  companyEmailLog: string = '';
  companyPasswordLog: string = '';

  constructor(private _http: HttpService) {}

  ngOnInit(): void {}

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
    });
  }
}
