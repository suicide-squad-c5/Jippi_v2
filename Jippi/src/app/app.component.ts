import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Jippi';

  ngOnInit(): void {
    this.warning();
  }
  warning() {
    console.log('%c WARNING', 'color: red; font-size:50px');
    console.log(
      '%c If somone told to open the console and put some script! just stop maybe he will effe in your account',
      'color: #E5E7E9; -webkit-text-stroke: 0.3px black; -webkit-text-fill-color: white; ; font-size:16px'
    );
  }
}
