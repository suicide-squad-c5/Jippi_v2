import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../../../../http.service';
import { LocalService } from '../../../../local.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-companies-users',
  templateUrl: './companies-users.component.html',
  styleUrls: ['./companies-users.component.css'],
})
export class CompaniesUsersComponent implements OnInit {
  constructor(private _http: HttpService, private local: LocalService) {}
  @Input() company: any;
  callDataCompany: any = false;

  ngOnInit(): void {
    console.log('data in companies', this.company);
    this.local.getcompany_Data.subscribe((boo) => (this.callDataCompany = boo));
  }

  // THIS FUNCTION WILL SWITH THE BANNED ROW IN THE SCHEMA FROM FALSE TO TRUE.
  banCompany(companyId) {
    // CHECK ! (passed fine).
    console.log('companyId', companyId);
    this._http.bannCompany(companyId).subscribe((res) => {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'The company has been baned',
        showConfirmButton: false,
        timer: 1500,
      });
      console.log('this is the result of banncompany', res);
      this.callDataCompany = true;
      this.local.companyData(this.callDataCompany);
      console.log('cll', this.callDataCompany);
    });
  }
  // UNBANED COMPANY BY CHANGE THE TRUE TO FALSE.
  unbanCompany(companyId) {
    // CHECK ! (passed fine).
    console.log('companyId for unbaned', companyId);
    this._http.unbanedCompany(companyId).subscribe((res) => {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'The company has been unbanded',
        showConfirmButton: false,
        timer: 1500,
      });
      console.log('unbaned done', res);
      this.callDataCompany = true;
      this.local.companyData(this.callDataCompany);
      console.log('cll', this.callDataCompany);
    });
  }
}
