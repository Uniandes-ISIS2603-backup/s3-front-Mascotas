import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MascotaVentaListComponent } from './mascota-venta-list/mascota-venta-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MascotaVentaListComponent],
  exports: [MascotaVentaListComponent]
})
export class MascotaVentaModule { }
