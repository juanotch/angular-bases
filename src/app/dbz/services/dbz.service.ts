import { Injectable } from '@angular/core';
import { character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({ providedIn: 'root' })
export class dbzservice {
  public characters: character[] = [
    {
      id: uuid(),
      name: 'kilin',
      power: 10000,
    },
    {
      id: uuid(),
      name: 'goku',
      power: 9000,
    },
  ];

  onnewcaracter(character: character): void {
    const newCharacter: character = {
      id: uuid(),
      ...character,
    };

    this.characters.push(newCharacter);
  }

  onrmvcaracterid(index: string) {
    this.characters = this.characters.filter(
      (character) => character.id !== index
    );
  }
}
