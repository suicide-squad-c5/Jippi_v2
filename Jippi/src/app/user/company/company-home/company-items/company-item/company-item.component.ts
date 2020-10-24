import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-company-item',
  templateUrl: './company-item.component.html',
  styleUrls: ['./company-item.component.css'],
})
export class CompanyItemComponent implements OnInit {
  @Input() companyItems: any;
  constructor() {}

  ngOnInit(): void {
    console.log('CompanyItemComponent -> companyItems', this.companyItems);
  }
}
