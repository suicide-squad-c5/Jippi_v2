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
      '%c If someone told to past any kind of scripts in the console! just stop maybe he will effect in your account',
      'color: #E5E7E9; -webkit-text-stroke: 0.3px black; -webkit-text-fill-color: white; ; font-size:16px'
    );
  }
}
