import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
})
export class LandingPageComponent implements OnInit {
  name: string = '';
  email: string = '';
  phone: string = '';
  message: string = '';

  constructor(private _http: HttpService) {}

  ngDocheck() {
    console.log(this.name);
  }

  ngOnInit(): void {}

  public sendEmail(e: Event) {
    e.preventDefault();
    emailjs
      .send(
        'service_colpd11',
        'template_lp0i6gm',
        {
          user_email: this.email,
          user_name: this.name,
          message: this.message,
          phone: this.phone,
        },
        'user_NyvSwkcUPMDfmNeUwoacw'
      )
      .then(
        (result: EmailJSResponseStatus) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }
}
