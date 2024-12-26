import { Component, OnInit } from '@angular/core';
import { character } from '../interfaces/character.interface';
import { dbzservice } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  standalone: false,
  templateUrl: './main-page.component.html',
})
export class mainpageComponent {
  constructor(private dbzservice: dbzservice) {}

  get characters(): character[] {
    return [...this.dbzservice.characters];
  }

  ondeleteCharacter(id: string) {
    this.dbzservice.onrmvcaracterid(id);
  }

  onnewcaracter(character: character) {
    this.dbzservice.onnewcaracter(character);
  }
}
