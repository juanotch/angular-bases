import { Component, EventEmitter, Input, Output } from '@angular/core';
import { character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './List.component.html',
  styleUrl: './List.component.css',
  standalone: false,
})
export class ListComponent {
  @Input()
  public characterlist: character[] = [
    {
      name: 'trhunks',
      power: 10,
    },
  ];

  @Output()
  public ondeleteid: EventEmitter<string> = new EventEmitter();

  ondeletecharacter(index?: string): void {
    if (!index) return;
    this.ondeleteid.emit(index);
    console.log({ index });
  }
}
