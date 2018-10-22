import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MascotaAdopcionListComponent } from './mascota-adopcion-list/mascota-adopcion-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../routing-module/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DataMasAdopcionService} from './data-mas-adopcion.service'


@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule
  ],
  providers: [ DataMasAdopcionService],
  declarations: [MascotaAdopcionListComponent],
  exports: [MascotaAdopcionListComponent]
})
export class MascotaAdopcionModule { }
