import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-component',
  templateUrl: './counter.component.html'
})
export class CounterComponent {
  public currentCount = 0;

  public incrementCounter() {
    // This is a comment
    this.currentCount +=3;
  }
}
