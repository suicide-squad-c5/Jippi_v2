import { Component, OnInit } from '@angular/core';
import { LocalService } from '../../../local.service';
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
  constructor(private local: LocalService) {}

  ngOnInit(): void {
    console.log('===>', this.userType)
    this.local.userTy.subscribe( type => this.userType = type)
  }

}
