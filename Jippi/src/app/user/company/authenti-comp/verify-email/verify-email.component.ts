import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/http.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.css'],
})
export class VerifyEmailComponent implements OnInit {
  constructor(private router: Router, private _http: HttpService) {}
  verificationCode: any;
  CId: String = '';
  code: any = [];

  ngOnInit() {
    this.CId = localStorage.getItem('comapnyId');
  }

  // that's to send the verificationCode
  verify() {
    this._http.verifyComapnyEmail(this.CId).subscribe((res) => {
      console.log(res);
      this.code.push(res);
    });
  }

  // the check the code that the Company submited
  checkTheVerificationCode() {
    this._http.check(this.CId, this.verificationCode).subscribe((res) => {
      if (res['result'] === 'welcome to Jippi') {
        this.router.navigate(['company/login']);
      }
      console.log(res);
    });
  }
}
