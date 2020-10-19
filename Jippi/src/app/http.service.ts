import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}
  ROOT_URL = 'http://127.0.0.1:3008';

  postSignupCustomer(first_name, last_name, email, password, phone_number) {
    return this.http.post(this.ROOT_URL + '/api/register/customer/signup', {
      first_name: first_name,
      last_name: last_name,
      email: email,
      password: password,
      phone_number: phone_number,
    });
  }

  postSignUpComapany(companyName, companyPassword, companyEmail) {
    return this.http.post(
      this.ROOT_URL + `/api/register/company/comapny/signup`,
      {
        companyName: companyName,
        companyPassword: companyPassword,
        companyEmail: companyEmail,
      }
    );
  }

  postAddItem(
    itemName,
    itemPrice,
    itemDescription,
    itemImage,
    itemRating,
    companyID
  ) {
    return this.http.post(this.ROOT_URL + '/api/items', {
      itemName: itemName,
      itemPrice: itemPrice,
      itemDescription: itemDescription,
      itemImage: itemImage,
      itemRating: itemRating,
      companyID: companyID,
    });
  }
}
