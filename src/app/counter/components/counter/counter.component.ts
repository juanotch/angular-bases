import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: false,
  template: `
    <h3>counter:{{ counter }}</h3>
    <button (click)="increaseby(1)">+1</button>
    <button (click)="reset()">reset</button>
    <button (click)="increaseby(-1)">-1</button>
  `,
})
export class CounterComponet {
  public counter: number = 10;

  increaseby(value: number): void {
    this.counter += value;
  }

  reset(): void {
    this.counter = 10;
  }
}
