import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule} from './routing-module/app-routing.module';
import { AppComponent } from './app.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgxPermissionsModule} from 'ngx-permissions';


import { MascotaVentaModule} from './mascota-venta/mascota-venta.module';
import { MascotaModule} from './mascota/mascota.module';
import { RazaModule} from './raza/raza.module';
import { HistoriaModule} from'./historia/historia.module';
import { EspecieModule} from './especie/especie.module';
import { CalificacionModule} from './calificacion/calificacion.module';
import {CompraModule} from './compra/compra.module';
import {ClienteModule} from './cliente/cliente.module';
import { AuthModule } from './auth/auth.module';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
    BrowserAnimationsModule,
    AppRoutingModule,
    RazaModule,
    MascotaVentaModule,
    MascotaModule,
    EspecieModule,
    HistoriaModule,
    CalificacionModule,
    CompraModule,
    ClienteModule,
    NgxPermissionsModule.forRoot(),
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
