import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { CompanyComponent } from './user/company/company.component';
import { CustomerComponent } from './user/customer/customer.component';
import { AuthentificationComponent } from './user/customer/authentification/authentification.component';
import { ContactUsComponent } from './user/customer/contact-us/contact-us.component';
import { NavbarComponent } from './user/customer/navbar/navbar.component';
import { CustProfileComponent } from './user/customer/cust-profile/cust-profile.component';
import { HomeComponent } from './user/customer/home/home.component';
import { LoginComponent } from './user/customer/authentification/login/login.component';
import { SignupComponent } from './user/customer/authentification/signup/signup.component';
import { EditProfileComponent } from './user/customer/cust-profile/edit-profile/edit-profile.component';
import { ProfileComponent } from './user/customer/cust-profile/profile/profile.component';
import { FilterComponent } from './user/customer/home/filter/filter.component';
import { ItemsComponent } from './user/customer/home/items/items.component';
import { ItemComponent } from './user/customer/home/items/item/item.component';
import { CompNavbarComponent } from './user/company/comp-navbar/comp-navbar.component';
import { MyShopComponent } from './user/company/my-shop/my-shop.component';
import { CompProfileComponent } from './user/company/comp-profile/comp-profile.component';
import { AuthentiCompComponent } from './user/company/authenti-comp/authenti-comp.component';
import { AddItemComponent } from './user/company/my-shop/add-item/add-item.component';
import { CompLoginComponent } from './user/company/authenti-comp/comp-login/comp-login.component';
import { CompSignupComponent } from './user/company/authenti-comp/comp-signup/comp-signup.component';
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    CompanyComponent,
    CustomerComponent,
    AuthentificationComponent,
    ContactUsComponent,
    NavbarComponent,
    CustProfileComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    EditProfileComponent,
    ProfileComponent,
    FilterComponent,
    ItemsComponent,
    ItemComponent,
    CompNavbarComponent,
    MyShopComponent,
    CompProfileComponent,
    AuthentiCompComponent,
    AddItemComponent,
    CompLoginComponent,
    CompSignupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    MDBBootstrapModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
