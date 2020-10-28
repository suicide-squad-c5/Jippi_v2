import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../../../../../http.service';
import { LocalService } from '../../../../../local.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-company-item',
  templateUrl: './company-item.component.html',
  styleUrls: ['./company-item.component.css'],
})
export class CompanyItemComponent implements OnInit {
  @Input() companyItems: any;
  delete: boolean;
  constructor(
    private _http: HttpService,
    private local: LocalService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.local.deleted.subscribe((boolean) => (this.delete = boolean));
  }

  deleteItem(itemId) {
    // CHECK !
    console.log(itemId);
    this._http.deleteItem(itemId).subscribe((res) => {
      console.log(res);
      alert('deleted !');
      this.delete = true;
      this.local.deleteFun(this.delete);
    });
  }
  update() {
    this.router.navigateByUrl('/company/updateItem', {
      state: this.companyItems,
    });
  }
}
