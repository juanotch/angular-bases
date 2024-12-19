import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  standalone: false,

  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  public name: string = 'ironam';
  public age: number = 45;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getherodescription(): string {
    return `${this.name}-${this.age}`;
  }

  changehero(): void {
    this.name = 'thor';
  }

  changeage(): void {
    this.age = 25;
  }

  resetForm(): void {
    this.name = 'ironam';
    this.age = 45;
  }
}
