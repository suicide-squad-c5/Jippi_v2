import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-login',
  templateUrl: './comp-login.component.html',
  styleUrls: ['./comp-login.component.css'],
})
export class CompLoginComponent implements OnInit {
  // take all login values from the company login.
  companyEmailLog: string = '';
  companyPasswordLog: string = '';

  constructor() {}

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
  }
}
