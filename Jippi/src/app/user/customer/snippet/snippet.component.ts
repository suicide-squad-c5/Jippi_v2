import { Component, OnInit } from '@angular/core';

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

  constructor() {}

  ngOnInit(): void {
    console.log(history.state.data);
    console.log(history.state.data[0].total);
    this.total = history.state.data[0].total;
    this.data = history.state.data;
  }
}
