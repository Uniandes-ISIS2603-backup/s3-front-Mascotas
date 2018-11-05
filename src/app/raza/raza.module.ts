import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RazaListComponent } from './raza-list/raza-list.component';
import { RazaDetailComponent } from './raza-detail/raza-detail.component';
import { RazaCreateComponent } from './raza-create/raza-create.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [RazaListComponent, RazaDetailComponent, RazaCreateComponent]
})
export class RazaModule { }
