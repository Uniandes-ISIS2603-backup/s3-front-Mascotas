import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule} from './routing-module/app-routing.module';
import { AppComponent } from './app.component';


import { MascotaVentaModule} from './mascota-venta/mascota-venta.module';
import { MascotaModule} from './mascota/mascota.module';
import { RazaModule} from './raza/raza.module';
import { HistoriaModule} from'./historia/historia.module';
import { EspecieModule} from './especie/especie.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    RazaModule,
    MascotaVentaModule,
    MascotaModule,
    EspecieModule,
    HistoriaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
