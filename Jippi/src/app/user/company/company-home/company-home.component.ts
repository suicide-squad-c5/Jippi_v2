import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/http.service';

@Component({
  selector: 'app-company-home',
  templateUrl: './company-home.component.html',
  styleUrls: ['./company-home.component.css'],
})
export class CompanyHomeComponent implements OnInit {
  items_order: any = [];

  constructor(private _http: HttpService) {}

  ngOnInit(): void {
    this.companyItemOrderFunc();
  }
  // ngDoCheck() {
  //   console.log('=====>', this.items_order)
  // }

companyItemOrderFunc(){
  if(localStorage.comapnyId){
    return this._http.companyItemsOrder(localStorage.comapnyId)
    .subscribe((data) => {
    console.log('data order item', data);
    this.items_order = data;
    })
  }
}
}

