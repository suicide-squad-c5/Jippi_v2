import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { HttpService } from '../../../http.service';

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

  constructor(private _http: HttpService) {}

  ngOnInit(): void {
    this.total = history.state.data[0].total;
    this.data = history.state.data;
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
