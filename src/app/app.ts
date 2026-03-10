import { Component, signal } from '@angular/core';
import { Login } from './login/login';
import { Custom } from './custom/cutom';
import { Counter } from './counter/counter';
import { MyEvent } from './my-event/my-event';

@Component({
  selector: 'app-root',
  imports: [Login, Custom, Counter, MyEvent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('first-angular-21-app');
  version = 21;
}
