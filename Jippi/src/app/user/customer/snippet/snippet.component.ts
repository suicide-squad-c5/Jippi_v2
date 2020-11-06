import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { HttpService } from '../../../http.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-snippet',
  templateUrl: './snippet.component.html',
  styleUrls: ['./snippet.component.css'],
})
export class SnippetComponent implements OnInit {
  // CREATE UNIQUE KEY FOR EACH SNIPPET.
  key: number = Date.now();
  date: any = new Date();
  data: any = [];
  total: number = 0;
  order: any = [];

  constructor(private _http: HttpService, private router: Router) {}

  ngOnInit(): void {
    this.total = history.state.data[0].total;
    this.data = history.state.data;
  }

  postNewOrder() {
    return this._http
      .newOrderFunc(
        this.key,
        parseInt(localStorage.Id),
        this.total,
        'On site',
        false
      )
      .subscribe((data) => {
        this.order = data;
        Swal.fire({
          icon: 'success',
          title: 'Your order has been saved',
          text: 'You will get your receipt via E-mail',
        });
        this.router.navigateByUrl('/home');
      });
  }
  postNewOrderItems() {
    let array = history.state.data;
    for (let i = 0; i < array.length; i++) {
      this._http
        .newOrderItemsFunc(
          this.key,
          array[i].id,
          array[i].itemPrice,
          array[i].quantity,
          array[i].itemCompany
        )
        .subscribe((data) => {
          console.log('<====<>', data);
        });
    }
  }

  confirm() {
    return this._http
      .confirmPayment({
        data: this.data,
        date: this.date,
        order: this.key,
        customerID: localStorage.Id,
      })
      .subscribe(() => {
        console.log('success!');
      });
  }
}
