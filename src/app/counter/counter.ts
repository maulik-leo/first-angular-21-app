import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
export class Counter {
  count = 0;

  manageCounter(operation: string) {
    switch (operation) {
      case 'minus':
        this.count -= 1;
        if (this.count < 0) {
          this.count = 0;
        }
        break;
      case 'plus':
        this.count += 1;
        break;
      default:
        this.count = 0;
    }
  }
}
