import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../../http.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

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
  ConfirmePassword: string = '';
  phoneNumber: string = '';
  address: string = '';
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
    if (this.password !== this.ConfirmePassword) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please check your password',
      });
    } else if (this.phoneNumber.length !== 8) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please fix your phone number',
      });
    } else {
      return this._http
        .postSignupCustomer(
          this.firstName,
          this.lastName,
          this.email,
          this.password,
          this.phoneNumber,
          this.address
        )
        .subscribe((data) => {
          this.newUser = data;
          console.log(data);
          this.router.navigateByUrl('/login');
        });
    }
  }
}
