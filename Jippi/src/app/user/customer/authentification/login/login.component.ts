import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../../http.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', 'login.component.scss'],
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';
  responseToTheUser: string = '';
  errorMessage: string = '';
  token: string = '';
  constructor(private _http: HttpService) {}

  ngOnInit(): void {}
  ngDoCheck() {
    console.log('forms', this.email, this.password);
  }
  0;
  login() {
    return this._http
      .loginCustomer(this.email, this.password)
      .subscribe((res) => {
        if (res['succ']) {
          this.responseToTheUser = res['succ'];
          console.log('succ res =======>', res);
          localStorage.setItem('Token', res['token']);
          localStorage.setItem('Id', res['id']);
        } else {
          this.errorMessage = res['status'];
        }
      });
  }
}
