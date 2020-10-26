import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../../http.service';

@Component({
  selector: 'app-companies-users',
  templateUrl: './companies-users.component.html',
  styleUrls: ['./companies-users.component.css'],
})
export class CompaniesUsersComponent implements OnInit {
  constructor(private _http: HttpService) {}

  ngOnInit(): void {
    this.getCompanies();
  }

  getCompanies() {
    this._http.getCompanies().subscribe((data) => {
      console.log(data);
    });
  }
}
