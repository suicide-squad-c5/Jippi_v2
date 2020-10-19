import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', 'login.component.scss']
})
export class LoginComponent implements OnInit {
   data: any = {
    email: '',
    password: '',
  };

  constructor() { }

  ngOnInit(): void {
    
  }
  ngDoCheck(){
console.log('forms', this.data);
  }

}
