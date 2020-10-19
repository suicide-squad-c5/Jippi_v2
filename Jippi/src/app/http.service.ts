import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}
  ROOT_URL = 'http://localhost:3008';
  postSignUpComapany(companyName, companyPassword, companyEmail) {
    return this.http.post(this.ROOT_URL + `/api/register/company`, {
      companyName: companyName,
      companyPassword: companyPassword,
      companyEmail: companyEmail,
    });
  }
}
