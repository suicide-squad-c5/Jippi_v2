import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import compnent that will get path.
import { HomeComponent } from './user/customer/home/home.component';
import { ContactUsComponent } from './user/customer/contact-us/contact-us.component';
import { LoginComponent } from './user/customer/authentification/login/login.component';
import { SignupComponent } from './user/customer/authentification/signup/signup.component';
import { CompSignupComponent } from './user/company/authenti-comp/comp-signup/comp-signup.component';
import { CompLoginComponent } from './user/company/authenti-comp/comp-login/comp-login.component';
import { EditProfileComponent } from './user/customer/cust-profile/edit-profile/edit-profile.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contact', component: ContactUsComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'comapny/signup', component: CompSignupComponent },
  { path: 'company/login', component: CompLoginComponent },
  { path: 'profile/edit', component: EditProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
