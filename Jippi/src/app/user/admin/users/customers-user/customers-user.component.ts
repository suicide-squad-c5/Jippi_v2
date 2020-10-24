import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../../../../http.service';

@Component({
  selector: 'app-customers-user',
  templateUrl: './customers-user.component.html',
  styleUrls: ['./customers-user.component.css'],
})
export class CustomersUserComponent implements OnInit {
  @Input() customer: any;
  constructor(private _http: HttpService) {}

  ngOnInit(): void {
    console.log('customers', this.customer);
  }
}
