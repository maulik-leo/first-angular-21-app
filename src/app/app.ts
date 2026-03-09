import { Component, signal } from '@angular/core';
import { Login } from './login/login';
import { Custom } from './custom/cutom';

@Component({
  selector: 'app-root',
  imports: [Login, Custom],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  handleClick() {
    console.log("Button Clicked");
  }
  protected readonly title = signal('first-angular-21-app');
  version = 21;
}
