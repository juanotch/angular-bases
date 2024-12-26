import { Component, EventEmitter, Output } from '@angular/core';
import { character } from '../../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-dd-character',
  templateUrl: 'addcharacater.component.html',
  styleUrl: './addcharacter.component.css',
  standalone: false,
})
export class AddcharacterComponent {
  @Output()
  public onNewcaracter: EventEmitter<character> = new EventEmitter();

  public character: character = {
    name: '',
    power: 0,
  };

  emitcharacter(): void {
    if (this.character.name.length === 0) return;

    this.onNewcaracter.emit({ ...this.character });
    this.character.name = '';
    this.character.power = 0;
  }
}
