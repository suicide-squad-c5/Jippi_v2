import { Component, OnInit, NgModule, Input } from '@angular/core';
import { HttpService } from '../../../../../http.service';
import { FormsModule } from '@angular/forms';

import { Router } from '@angular/router';

import { BrowserModule } from '@angular/platform-browser';
@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css'],
})
export class CommentsComponent implements OnInit {
  constructor(private _http: HttpService, private router: Router) {}
  @NgModule({
    imports: [BrowserModule, FormsModule],
  })
  userId: number = 0;
  comment: string = '';
  // =======
  name: string = '';
  avatarUrl: string = '';
  // itemId: number = 0;
  likes: number = 0;
  succMessage: string = '';
  // ======Res========
  postedData: any = [];
  check: boolean = false;
  test: string =
    'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png';
  @Input() itemID: any;
  ngOnInit(): void {
    this.userId = parseInt(localStorage.getItem('Id'));
    console.log('the current user ID', this.userId);
    this.currentUser();
    this.getComments();
  }
  currentUser() {
    return this._http.getCustomerById(this.userId).subscribe((res) => {
      this.name = res['first_name'];
      this.avatarUrl = res['avatar'];
    });
  }
  ngDoCheck() {
    console.log('=================ITEMID=======', this.itemID);
    console.log('check comment inp ======>', this.comment);
  }
  // ====================== comments ========
  postaComment() {
    return this._http
      .comment(this.comment, this.userId, this.itemID, this.likes)
      .subscribe((res) => {
        this.succMessage = res['message'];
        this.getComments();
      });
  }
  getComments() {
    return this._http.getAllComments(this.itemID).subscribe((res) => {
      console.log('getComments', res);
      this.postedData = res;
      this.check = true;
    });
  }
}
