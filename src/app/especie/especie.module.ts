import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EspecieListComponent } from './especie-list/especie-list.component';
import {EspecieService} from './especie.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [EspecieService],
  declarations: [EspecieListComponent],
  exports: [EspecieListComponent]
})
export class EspecieModule { }
