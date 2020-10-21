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

  // create post request for the comapny signup.
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

  // craete post request for the comapny login.
  postLoginCompany(comapnyLoginObj) {
    return this.http.post(this.ROOT_URL + `/api/login/company/company/login`, {
      companyEmail: comapnyLoginObj.companyEmail,
      companyPassword: comapnyLoginObj.companyPassword,
    });
  }

  postAddItem(
    itemName,
    itemPrice,
    itemDescription,
    itemImage,
    itemRating,

    companyID,
    selectedCategory,
    selectedKind
  ) {

    return this.http.post(this.ROOT_URL + '/api/items', {
      itemName: itemName,
      itemPrice: itemPrice,
      itemDescription: itemDescription,
      itemImage: itemImage,
      itemRating: itemRating,
      companyID: companyID,
      category: selectedCategory,
      kind: selectedKind,
    });
  }

  loginCustomer(email, password) {
    return this.http.post(this.ROOT_URL + `/api/login/customer/login`, {
      email,
      password,
    });
  }


  custProfile(user_id){
  return this.http.get(this.ROOT_URL + `/api/profile/customer/${user_id}` )
}

updateCusInfo(user_id,user){
  return this.http.post(this.ROOT_URL + `/api/profile/customer/update/${user_id}`,user )
}


}
