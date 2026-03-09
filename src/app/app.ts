import { Component, signal } from '@angular/core';
import { Login } from './login/login';
import { Custom } from './custom/cutom';
import { Counter } from "./counter/counter";

@Component({
  selector: 'app-root',
  imports: [Login, Custom, Counter],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('first-angular-21-app');
  version = 21;
  author: string = 'Unknown';
  age: string | number = 'NA';
  comments: any = false;

  handleClick() {
    this.author = 'Maulik';
    this.age = 27;

    this.comments = 0;
    this.comments = 'Modified Comments';
    this.comments = { isAvailabled: true, description: 'Modified Comments' };

    console.log('Button Clicked by ' + this.author + ' (' + this.age + ' years old)');
  }
}
