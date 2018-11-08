import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../routing-module/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { MascotaVentaListComponent } from './mascota-venta-list/mascota-venta-list.component';
import { MascotaVentaDetailComponent } from './mascota-venta-detail/mascota-venta-detail.component';
import { MascotaVentaCreateComponent } from './mascota-venta-create/mascota-venta-create.component';
import { MascotaVentaService } from './mascota-venta.service';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule
  ],
  declarations: [MascotaVentaListComponent, MascotaVentaDetailComponent, MascotaVentaCreateComponent],
  providers : [ MascotaVentaService] ,
  exports: [MascotaVentaListComponent, MascotaVentaDetailComponent, MascotaVentaCreateComponent]
})
export class MascotaVentaModule { }
