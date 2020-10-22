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
  loginCustomer(email, password) {
    return this.http.post(this.ROOT_URL + `/api/login/customer/login`, {
      email,
      password,
    });
  }
  // that's for updating the company  Data
  editCompanyProfileData(name, email, location, phoneNumber, CId) {
    return this.http.put(this.ROOT_URL + `/api/profile/company/update/${CId}`, {
      name,
      email,
      location,
      phoneNumber,
      CId,
    });
  }
  // that's for receiving  the company  Data
  getCompanyData(CId) {
    console.log('Cid ===> ', CId);
    return this.http.post(this.ROOT_URL + `/api/profile/company/get/${CId}`, {
      CId,
    });
  }
  updateCompanyAvatar(formData, CId) {
    console.log('formData ===>', formData);
    return this.http.put(
      this.ROOT_URL + `/api/profile/company/avatar/${CId}`,
      {
        formData,
        CId,
      },
      {
        reportProgress: true,
        observe: 'events',
      }
    );
  }
  verifyComapnyEmail(CId) {
    return this.http.post(
      this.ROOT_URL + `/api/login/company/sendmail/${CId}`,
      {
        CId,
      }
    );
  }
  check(CId, verificationCode) {
    return this.http.post(
      this.ROOT_URL + `/api/login/company/chekpoint/${CId}`,
      {
        CId,
        verificationCode,
      }
    );
  }
}
