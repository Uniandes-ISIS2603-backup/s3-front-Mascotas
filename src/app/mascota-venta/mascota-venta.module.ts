import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MascotaVentaListComponent } from './mascota-venta-list/mascota-venta-list.component';
import { MascotaVentaDetailComponent } from './mascota-venta-detail/mascota-venta-detail.component';
import { MascotaVentaCreateComponent } from './mascota-venta-create/mascota-venta-create.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MascotaVentaListComponent, MascotaVentaDetailComponent, MascotaVentaCreateComponent],
  exports: [MascotaVentaListComponent]
})
export class MascotaVentaModule { }
