import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MascotaAdopcionModule} from './mascota-adopcion/mascota-adopcion.module';
import { MascotaVentaModule} from './mascota-venta/mascota-venta.module';
import {AppRoutingModule} from './routing-module/app-routing.module'





@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MascotaAdopcionModule,
    MascotaVentaModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
