import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../http.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  customersList: any = [];
  companiesList: any = [];
  companyName: string = '';

  constructor(private _http: HttpService) {}

  ngOnInit(): void {
    this.getCompanies();
  }

  // getcustomers() {
  //   return this._http.getcustomers().subscribe((data) => {
  //     this.customersList = data;
  //     console.log(this.customersList);
  //   });
  // }

  getCompanies() {
    this._http.getCompanies().subscribe((data) => {
      this.companiesList = data;
      console.log('we have data', this.companiesList);
    });
  }

  // SEARCH FOR COMPANY BY NAME.
  Search() {
    this.companiesList = this.companiesList.filter((company) => {
      return company.companyName
        .toLowerCase()
        .match(this.companyName.toLocaleLowerCase());
    });
  }
}
