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
  // ================ITEMS=====================
  //  to add a new item
  postAddItem(formData) {
    return this.http.post(this.ROOT_URL + '/api/items/add', formData);
  }
  // to get the item image updatedin the UI so u can see it before posting it
  getItemData(itemId) {
    return this.http.post(this.ROOT_URL + `/api/items/get/${itemId}`, {
      itemId,
    });
  }
  //add an item to the database

  // CREATE POST REQUEST FOR THE ADMIN LOGIN.
  postAdminlogin(adminLogin) {
    return this.http.post(this.ROOT_URL + `/admin/jippi`, {
      adminEmail: adminLogin.adminEmail,
      adminPassword: adminLogin.adminPassword,
    });
  }

  // GET ALL CUSTOMERS FOR THE ADMIN LIST.
  getcustomers() {
    return this.http.get(this.ROOT_URL + '/api/profile/customer');
  }

  // CREATE POST REQUEST TO THE ADMIN CREATE ACCOUNT.
  postAdminCreate(adminCreate) {
    return this.http.post(this.ROOT_URL + `/admin/jippi/create`, {
      adminName: adminCreate.adminName,
      adminEmail: adminCreate.adminEmail,
      adminPassword: adminCreate.adminPassword,
      adminAvatar: adminCreate.adminAvatar,
    });
  }

  // CREATE REQUEST TO DELETE ITEMS.
  deleteItem(itemId) {
    return this.http.delete(this.ROOT_URL + `/api/items/${itemId}`);
  }

  // GET ALL THE COMPANIES FOR THE ADMIN SIDE.
  getCompanies() {
    return this.http.get(this.ROOT_URL + `/api/profile/company`);
  }

  //get all items in db
  getItems() {
    return this.http.get(this.ROOT_URL + '/api/items');
  }
  // ================================================
  loginCustomer(email, password) {
    return this.http.post(this.ROOT_URL + `/api/login/customer/login`, {
      email,
      password,
    });
  }

  // ================COMPANY====================================
  // that's for updating the company  Data
  editCompanyProfileData(
    companyName,
    companyEmail,
    location,
    phoneNumber,
    companyId
  ) {
    return this.http.put(
      this.ROOT_URL + `/api/profile/company/update/${companyId}`,
      {
        companyName,
        companyEmail,
        location,
        phoneNumber,
        companyId,
      }
    );
  }
  // that's for receiving  the company Data
  getCompanyData(CId) {
    console.log('Cid ===> ', CId);
    return this.http.post(this.ROOT_URL + `/api/profile/company/get/${CId}`, {
      CId,
    });
  }
  // UPDATAE THE AVATART OF THE COMPANY
  updateCompanyAvatar(formData, companyId) {
    console.log('CId ===> <==', companyId);
    return this.http.put(
      this.ROOT_URL + `/api/profile/company/avatar/${companyId}`,
      formData
    );
  }
  // EMAIL AUTH FOR THE COMPANY
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
  // ==========COOSTUMER==================
  custProfile(user_id) {
    return this.http.get(this.ROOT_URL + `/api/profile/customer/${user_id}`);
  }

  updateCusInfo(user_id, user) {
    return this.http.post(
      this.ROOT_URL + `/api/profile/customer/update/${user_id}`,
      user
    );
  }
  getTheUpdateCustomerImage(imageId) {
    return this.http.get(this.ROOT_URL + `/api/profile/customer/${imageId}`);
  }

  getcompanyItems(companyId) {
    return this.http.get(this.ROOT_URL + `/api/items/Company/${companyId}`);
  }
}
