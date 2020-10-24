import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../../http.service';
import { Router } from '@angular/router';
// import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css', './signup.component.scss'],
})
export class SignupComponent implements OnInit {
  firstName: string = '';
  lastName: string = '';

  email: string = '';

  password: string = '';
  phoneNumber: string = '';
  newUser: any = [];

  constructor(private _http: HttpService, private router: Router) {}

  ngOnInit(): void {}

  register() {
    console.log(
      'data',
      this.firstName,
      this.lastName,
      this.email,
      this.password,
      this.phoneNumber
    );
  }
  postSignup() {
    return this._http
      .postSignupCustomer(
        this.firstName,
        this.lastName,
        this.email,
        this.password,
        this.phoneNumber
      )
      .subscribe((data) => {
        this.newUser = data;
        console.log(data);
        this.router.navigateByUrl('/login');
      });
    
  }
}
