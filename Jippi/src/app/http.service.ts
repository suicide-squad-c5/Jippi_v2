import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  ROOT_URL = 'http://localhost:3008';
  
  postSignupCustomer(first_name, last_name, email, password, phone_number) {
    return this.http.post(this.ROOT_URL + `/signup`, {
      first_name: first_name,
      last_name: last_name,
      email: email,
      password: password,
      phone_number: phone_number
    });
  }

}
