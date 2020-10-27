import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../../http.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './comp-signup.component.html',
  styleUrls: ['./comp-signup.component.css'],
})
export class CompSignupComponent implements OnInit {
  // after taking the values from inputs it will save it her.
  companyName: string = '';
  companyEmail: string = '';
  companyPassword: string = '';
  companyConfirmPassword: string = '';

  constructor(private router: Router, private _http: HttpService) {}

  ngOnInit(): void {}

  // lookign for the changes that happened on the inputs.
  ngDoCheck() {
    // check ! (passed fine)
    // console.log(
    //   'your data',
    //   this.companyName,
    //   this.companyEmail,
    //   this.companyPassword,
    //   this.companyConfirmPassword
    // );
  }

  // take all the informations from the inputs and save her bu click.
  companyData() {
    let Data = {
      companyName: this.companyName,
      companyEmail: this.companyEmail,
      companyPassword: this.companyPassword,
      companyConfirmPassword: this.companyConfirmPassword,
    };

    // check if the password equal to the confirm password or not.
    if (this.companyConfirmPassword !== this.companyPassword) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'There is an issue with your password! please check again',
      });
    } else {
      // check ! (passed fine)
      console.log(Data);
      // send request to the server with all the information from the inputs.
      this._http
        .postSignUpComapany(
          this.companyName,
          this.companyPassword,
          this.companyEmail
        )
        .subscribe((data) => {
          localStorage.setItem('comapnyId', data['id']);
          console.log('data=.......', data);
          alert(
            `signup sucssefuly  we have sent you an email at ${this.companyEmail}`
          );
          this.router.navigate(['company/check']);
        });
    }
  }
}
