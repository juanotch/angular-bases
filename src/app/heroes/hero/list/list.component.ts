import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  standalone: false,

  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  public deletedhero?: string;

  public heronames: string[] = [
    'spiderman',
    'ironman',
    'hulk',
    'Doctor strange',
  ];

  removelasthero(): void {
    this.deletedhero = this.heronames.pop();
  }
}
