import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MascotaAdopcionModule} from './mascota-adopcion/mascota-adopcion.module';
import { MascotaVentaModule} from './mascota-venta/mascota-venta.module';
import { MascotaModule} from './mascota/mascota.module';
import { RazaModule} from './raza/raza.module';


import {AppRoutingModule} from './routing-module/app-routing.module'
import {EspecieModule} from './especie/especie.module';





@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MascotaAdopcionModule,
    MascotaVentaModule,
    RazaModule,
    MascotaModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    EspecieModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
