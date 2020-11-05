import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}
  ROOT_URL = 'http://127.0.0.1:3008';

  postSignupCustomer(
    first_name,
    last_name,
    email,
    password,
    phone_number,
    address
  ) {
    return this.http.post(this.ROOT_URL + '/api/register/customer/signup', {
      first_name: first_name,
      last_name: last_name,
      email: email,
      password: password,
      phone_number: phone_number,
      adress: address,
    });
  }

  //confirm payment
  confirmPayment(data) {
    console.log('data in the service', data);
    return this.http.post(this.ROOT_URL + '/companyName/payment', {
      data: data,
    });
  }

  // create post request for the comapny signup.
  postSignUpComapany(
    companyName,
    companyPassword,
    companyEmail,
    companyAddress,
    companyNumber
  ) {
    return this.http.post(
      this.ROOT_URL + `/api/register/company/comapny/signup`,
      {
        companyName: companyName,
        companyPassword: companyPassword,
        companyEmail: companyEmail,
        companyAddress: companyAddress,
        companyNumber: companyNumber,
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

  //update an item
  updateItem(formData) {
    return this.http.put(this.ROOT_URL + '/api/items/update', formData);
  }

  //add an item to the database

  // CREATE POST REQUEST FOR THE ADMIN LOGIN.
  postAdminlogin(adminLogin) {
    return this.http.post(this.ROOT_URL + `/admin/jippi`, {
      adminEmail: adminLogin.adminEmail,
      adminPassword: adminLogin.adminPassword,
    });
  }

  getCustomerById(id: number) {
    return this.http.get(this.ROOT_URL + `/api/profile/customer/${id}`);
  }
  comment(comment, userId, itemId, likes) {
    return this.http.post(this.ROOT_URL + `/api/item/comments/post/${itemId}`, {
      comment,
      userId,
      likes,
    });
  }
  getAllComments(itemId) {
    return this.http.get(
      this.ROOT_URL + `/api/item/comments/get/all/${itemId}`
    );
  }
  // toDelete a comment
  deleteComments(CommentId) {
    return this.http.delete(
      this.ROOT_URL + `/api/item/comments/delete/comment/${CommentId}`
    );
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

  // BAN THE COMPANY BY UPDATE BANN FROM FALSE TO TRUE.
  bannCompany(companyId) {
    return this.http.put(this.ROOT_URL + `/api/profile/company/${companyId}`, {
      companyId,
    });
  }

  // UNBANNED COMPANY FOR THE ADMIN SIDE. \
  unbanedCompany(companyId) {
    return this.http.put(
      this.ROOT_URL + `/api/profile/company/unbaned/${companyId}`,
      {
        companyId,
      }
    );
  }

  // SEND EMAIL (CONTACT).
  sendEmailC(mailData) {
    console.log('http service');
    return this.http.post(this.ROOT_URL + `/contact`, {
      userName: mailData.Uname,
      userEmail: mailData.Uemail,
      userPhone: mailData.Uphone,
      userMessage: mailData.Umessage,
    });
  }

  //get all items in db
  getItems() {
    return this.http.get(this.ROOT_URL + '/api/items');
  }
  getfour(CompanyId) {
    return this.http.get(this.ROOT_URL + `/api/items/getfour/${CompanyId}`);
  }
  // ================================================
  loginCustomer(email, password) {
    return this.http.post(this.ROOT_URL + `/api/login/customer/login`, {
      email,
      password,
    });
  }

  // ==============================COMPANY====================================
  // that's for updating the company  Data
  editCompanyProfileData(data) {
    return this.http.put(this.ROOT_URL + `/api/profile/company/update`, data);
    /******** =======>fix here!!!!!!<====== ********/
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
    return this.http.put(
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

  // ==============customers/companay Relation ===============
  getCompanyName(companyId) {
    return this.http.get(
      this.ROOT_URL + `/companyName/companyName/${companyId}`
    );
  }


  //new order
  newOrderFunc(orderId, customerId, totalPrice, type, received) {
    return this.http.post(this.ROOT_URL + `/new_order`, {
      orderId,
      customerId,
      totalPrice,
      type,
      received
    });
  }
  newOrderItemsFunc(orderId, itemId, unitPrice, amount, companyName){
    return this.http.post(this.ROOT_URL + `/order/order_item`, {
      orderId,
      itemId,
      unitPrice,
      amount,
      companyName
    });
  }
}
