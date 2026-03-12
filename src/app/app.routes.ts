import { Routes } from '@angular/router';
import { Counter } from './counter/counter';
import { MyEvent } from './my-event/my-event';
import { ToDoList } from './to-do-list/to-do-list';
import { Custom } from './custom/cutom';
import { Login } from './login/login';
import { Home } from './home/home';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'to-do', component: ToDoList },
  { path: 'counter', component: Counter },
  { path: 'event', component: MyEvent },
  { path: 'login', component: Login },
  { path: 'custom', component: Custom },
];
