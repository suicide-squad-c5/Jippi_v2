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

  constructor(private _http: HttpService) {}

  ngOnInit(): void {}

  getcustomers() {
    return this._http.getcustomers().subscribe((data) => {
      this.customersList = data;
      console.log(this.customersList);
    });
  }
}
