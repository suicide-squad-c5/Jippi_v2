import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
})
export class CustomerComponent implements OnInit {
  route: string = '';

  constructor(location: Location, router: Router) {
    router.events.subscribe((val) => {
      console.log('heeeeeeeey', val);
      this.route = location.path();
      console.log('yooo your link man', this.route);
    });
  }

  ngOnInit(): void {}
}
