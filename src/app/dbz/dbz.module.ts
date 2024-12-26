import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { mainpageComponent } from './pages/main-page.component';
import { ListComponent } from './components/List/List.component';
import { AddcharacterComponent } from './components/addcharacter/addcharacter/addcharacter.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [mainpageComponent, ListComponent, AddcharacterComponent],
  exports: [mainpageComponent],
  imports: [CommonModule, FormsModule],
})
export class DbzModule {}
