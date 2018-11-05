import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../routing-module/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { MascotaListComponent } from './mascota-list/mascota-list.component';
import { MascotaDetailComponent } from './mascota-detail/mascota-detail.component';
import { MascotaCreateComponent } from './mascota-create/mascota-create.component';
import { MascotaService } from './mascota.service';



@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
  ],
  declarations: [MascotaListComponent, MascotaDetailComponent, MascotaCreateComponent ],
  providers: [ MascotaService ],
  exports: [MascotaListComponent, MascotaDetailComponent, MascotaCreateComponent]
})
export class MascotaModule { }
