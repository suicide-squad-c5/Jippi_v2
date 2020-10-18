import { Component, OnInit } from '@angular/core';

// import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css', './signup.component.scss'],
})
export class SignupComponent implements OnInit {
 

  constructor(
    // private httpClient: HttpClient
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
  }
  
}
