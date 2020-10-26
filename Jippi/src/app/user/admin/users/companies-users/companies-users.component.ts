import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../../../../http.service';

@Component({
  selector: 'app-companies-users',
  templateUrl: './companies-users.component.html',
  styleUrls: ['./companies-users.component.css'],
})
export class CompaniesUsersComponent implements OnInit {
  constructor(private _http: HttpService) {}
  @Input() company: any;

  ngOnInit(): void {
    console.log('data in companies', this.company);
  }

  // THIS FUNCTION WILL SWITH THE BANNED ROW IN THE SCHEMA FROM FALSE TO TRUE.
  banCompany(companyId) {
    // CHECK ! (passed fine).
    console.log('companyId', companyId);
    this._http.bannCompany(companyId).subscribe((res) => {
      console.log('this is the result of banncompany', res);
    });
  }
  // UNBANED COMPANY BY CHANGE THE TRUE TO FALSE.
  unbanCompany(companyId) {
    // CHECK ! (passed fine).
    console.log('companyId for unbaned', companyId);
    this._http.unbanedCompany(companyId).subscribe((res) => {
      console.log('unbaned done', res);
    });
  }
}
