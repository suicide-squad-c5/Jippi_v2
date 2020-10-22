import { Component, OnInit } from '@angular/core';
import { LocalService } from '../../../local.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  // TO SWITCH BETTWEN NAVBAR IF USER LOGED IN OR NOT.
  // TI WORK TELL WE CHANGE IT WITH THE REAL LOGID IN.
  userType: string = 'visiteur';
  // customer: boolean = false;
  constructor(private local: LocalService, private router: Router) {}

  ngOnInit(): void {
    console.log('===>', this.userType)
    this.local.userTy.subscribe( type => this.userType = type)
    if(localStorage.Id){
      this.local.changeType("customer")
    }else{
      this.local.changeType("visiteur")
    }
  }

logout(){
  localStorage.removeItem("Token");
    localStorage.removeItem("Id");
  this.local.changeType("visiteur");
  this.router.navigateByUrl('/');
}


}
