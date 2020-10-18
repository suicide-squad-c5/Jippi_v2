import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// const headers = new HttpHeaders();
@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  ROOT_URL = 'http://localhost:3008';
  postSignUpComapany(companyName, companyPassword, companyEmail) {
    return this.http.post(this.ROOT_URL + `/company/signup`, {
      companyName: companyName,
      companyPassword: companyPassword,
      companyEmail: companyEmail,
    });
  }
}
