import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../../http.service';

// import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css', './signup.component.scss'],
})
export class SignupComponent implements OnInit {
 firstName: string = '';
 lastName: string = '';
 email: any = '';
 password: string = '';
 phoneNumber: string = '';

  constructor(
    private _http: HttpService
    ) {}

  ngOnInit(): void {
    
  }
  // baseUrl = 'http://localhost:3008';
  register() {
    // this.httpClient.post(
    //   this.baseUrl + '/api/register/customer/signup',
    //   this.data,
    //   { headers: { 'content-type': 'application/json' } }
    // );
    console.log("data",this.firstName,this.lastName,this.email,this.password,this.phoneNumber);
  }
  postSignup() {
   return this._http.postSignupCustomer(this.firstName, this.lastName, this.email, this.password, this.phoneNumber)
   .subscribe((data) =>{  
   console.log(data)
   })
  }
  
}
