import { Component, OnInit } from '@angular/core';
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
  order: any = [];

  constructor(private _http: HttpService) {}

  ngOnInit(): void {
    // console.log('numbersss', this.order);
    console.log(history.state.data);
    console.log(history.state.data[0].total);
    this.total = history.state.data[0].total;
    this.data = history.state.data;
  }


  postNewOrder(){
    return this._http.newOrderFunc(
      this.key,
      parseInt(localStorage.Id),
      this.total,
      "On site",
      false,
      )
    .subscribe((data) => {
      this.order = data;
      console.log('====>', data);
    })
  }
  postNewOrderItems(){
    let array = history.state.data;
    for (let i = 0; i < array.length; i++) {
      this._http.newOrderItemsFunc(
        this.key,
        array[i].id,
        array[i].itemPrice, 
        array[i].quantity,
        array[i].campanysName, 
        )
        .subscribe((data) => {
          console.log('<====<>', data);
        })
      }
    }
  

}
