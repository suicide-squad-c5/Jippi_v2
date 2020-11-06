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
import { VerifyEmailComponent } from './user/company/authenti-comp/verify-email/verify-email.component';
import { AdminComponent } from './user/admin/admin.component';
import { AdminSectionComponent } from './user/admin/admin-section/admin-section.component';
import { AddAdminComponent } from './user/admin/add-admin/add-admin.component';
import { ReportsComponent } from './user/admin/reports/reports.component';
import { AdminHomeComponent } from './user/admin/admin-home/admin-home.component';
import { BasketComponent } from './user/customer/basket/basket.component';
import { CompanyHomeComponent } from './user/company/company-home/company-home.component';
import { AdminItemsComponent } from './user/admin/admin-home/admin-items/admin-items.component';
import { AdminItemComponent } from './user/admin/admin-home/admin-items/admin-item/admin-item.component';
import { UsersComponent } from './user/admin/users/users.component';
import { CompaniesUsersComponent } from './user/admin/users/companies-users/companies-users.component';
import { CustomersUserComponent } from './user/admin/users/customers-user/customers-user.component';
import { CompEditProfileComponent } from './user/company/comp-profile/comp-edit-profile/comp-edit-profile.component';
import { CompanyItemsComponent } from './user/company/company-home/company-items/company-items.component';
import { CompanyItemComponent } from './user/company/company-home/company-items/company-item/company-item.component';
import { ItemDetailsComponent } from './user/customer/home/items/item-details/item-details.component';
import { UpdateItemComponent } from './user/company/company-home/company-items/update-item/update-item.component';
import { PasswordStrengthMeterModule } from 'angular-password-strength-meter';
import { LandingPageComponent } from './user/landing-page/landing-page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommentsComponent } from './user/customer/home/items/comments/comments.component';
import { GetYourItemsComponent } from './user/customer/basket/get-your-items/get-your-items.component';
import { BarRatingModule } from 'ngx-bar-rating';
import { SnippetComponent } from './user/customer/snippet/snippet.component';
import { FooterComponent } from './user/footer/footer.component';
import { CompanyOrdersComponent } from './user/company/company-orders/company-orders.component';

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
    VerifyEmailComponent,
    AdminComponent,
    AdminSectionComponent,
    AddAdminComponent,
    ReportsComponent,
    AdminHomeComponent,
    BasketComponent,
    CompanyHomeComponent,
    AdminItemsComponent,
    AdminItemComponent,
    UsersComponent,
    CompaniesUsersComponent,
    CompEditProfileComponent,
    CompanyItemsComponent,
    CompanyItemComponent,
    ItemDetailsComponent,
    UpdateItemComponent,
    LandingPageComponent,
    CommentsComponent,
    GetYourItemsComponent,
    SnippetComponent,
    FooterComponent,
    CompanyOrdersComponent,

    // CustomersUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    MDBBootstrapModule,
    PasswordStrengthMeterModule,
    FontAwesomeModule,
    BarRatingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
