import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../http.service';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.css'],
})
export class AddAdminComponent implements OnInit {
  // GET ALL THE VALUES FROM ADD ADMIN INPUTS.
  adminName: string = '';
  adminEmail: string = '';
  adminPassword: string = '';

  constructor(private _http: HttpService) {}

  ngOnInit(): void {}
}
