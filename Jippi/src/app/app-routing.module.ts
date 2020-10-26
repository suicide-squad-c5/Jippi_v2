import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import compnent that will get path.
import { VerifyEmailComponent } from './user/company/authenti-comp/verify-email/verify-email.component';
import { HomeComponent } from './user/customer/home/home.component';
import { ContactUsComponent } from './user/customer/contact-us/contact-us.component';
import { LoginComponent } from './user/customer/authentification/login/login.component';
import { SignupComponent } from './user/customer/authentification/signup/signup.component';
import { CompSignupComponent } from './user/company/authenti-comp/comp-signup/comp-signup.component';
import { CompLoginComponent } from './user/company/authenti-comp/comp-login/comp-login.component';
import { EditProfileComponent } from './user/customer/cust-profile/edit-profile/edit-profile.component';
import { AddItemComponent } from './user/company/my-shop/add-item/add-item.component';
import { ProfileComponent } from './user/customer/cust-profile/profile/profile.component';
import { CompProfileComponent } from './user/company/comp-profile/comp-profile.component';
import { MyShopComponent } from './user/company/my-shop/my-shop.component';
import { BasketComponent } from './user/customer/basket/basket.component';
// import { AdminSectionComponent } from './user/admin/admin-section/admin-section.component';
import { AdminComponent } from './user/admin/admin.component';
import { AdminHomeComponent } from './user/admin/admin-home/admin-home.component';
import { AddAdminComponent } from './user/admin/add-admin/add-admin.component';
import { ReportsComponent } from './user/admin/reports/reports.component';
import { UsersComponent } from './user/admin/users/users.component';
import { CompEditProfileComponent } from './user/company/comp-profile/comp-edit-profile/comp-edit-profile.component';
import { CompanyHomeComponent } from './user/company/company-home/company-home.component';
import { ItemDetailsComponent } from './user/customer/home/items/item-details/item-details.component';

const routes: Routes = [
  // CUSTOEMR SIDE.
  { path: '', component: HomeComponent },
  { path: 'contact', component: ContactUsComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'profile/edit', component: EditProfileComponent },
  // COMPANY SIDE.
  // items
  { path: 'items/details', component: ItemDetailsComponent },
  { path: 'comapny/signup', component: CompSignupComponent },
  { path: 'company/login', component: CompLoginComponent },
  { path: 'company/addItem', component: AddItemComponent },
  { path: 'company/profile', component: CompProfileComponent },
  { path: 'company/shop', component: MyShopComponent },
  { path: 'company/edit', component: CompEditProfileComponent },
  { path: 'company/check', component: VerifyEmailComponent },
  { path: 'company/home', component: CompanyHomeComponent },
  // ADMIN SIDE.
  { path: 'admin/jippi', component: AdminComponent },
  { path: 'admin/home', component: AdminHomeComponent },
  { path: 'admin/addadmin', component: AddAdminComponent },
  { path: 'admin/reports', component: ReportsComponent },
  { path: 'customer/basket', component: BasketComponent },
  { path: 'admin/users', component: UsersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
