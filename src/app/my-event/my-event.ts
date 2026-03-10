import { Component } from '@angular/core';

@Component({
  selector: 'my-event',
  imports: [],
  templateUrl: './my-event.html',
  styleUrl: './my-event.css',
})
export class MyEvent {
  author: string = 'Unknown';
  age: string | number = 'NA';
  comments: any = false;
  currentEvent = 'none';

  performEvent(e: Event) {
    this.currentEvent = e.type;

    this.author = 'Maulik';
    this.age = 27;
    this.comments = 0;
    this.comments = 'Modified Comments';
    this.comments = { isAvailabled: true, description: 'Modified Comments' };

    console.log('Button Clicked by ' + this.author + ' (' + this.age + ' years old)');
  }
}