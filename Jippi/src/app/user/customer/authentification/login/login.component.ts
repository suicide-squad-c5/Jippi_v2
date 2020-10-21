import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../../http.service';
import { LocalService } from '../../../../local.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', 'login.component.scss'],
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';
  responseToTheUser: string = '';
  errorMessage: string = '';
  token: string = '';
  userType: string = 'vsiteur';
  userid: number = null;

  constructor(private _http: HttpService, private local: LocalService, private router: Router ) {}

  ngOnInit(): void {
   this.local.userTy.subscribe( type => this.userType = type)
   this.local.user_id.subscribe( id => this.userid = id);
  }
  
  
  login() {
    return this._http
      .loginCustomer(this.email, this.password)
      .subscribe((res) => {
        if (res['succ']) {
          this.responseToTheUser = res['succ'];
          console.log('succ res =======>', res);
          localStorage.setItem('Token', res['token']);
          localStorage.setItem('Id', res['id']);
          this.local.getUserId(res['id']);
          this.newType();
          }
          else if (!res['succ']) {
          this.errorMessage = res['status'];
        }
      });
  }
// function for send the user id to profile component
  newType(){
    this.local.changeType("customer");
    this.router.navigateByUrl('/');
  }


}
