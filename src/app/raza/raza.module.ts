import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RazaListComponent } from './raza-list/raza-list.component';
import { RazaDetailComponent } from './raza-detail/raza-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [RazaListComponent, RazaDetailComponent]
})
export class RazaModule { }
