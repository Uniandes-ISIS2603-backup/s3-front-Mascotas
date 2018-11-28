import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../routing-module/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {NgxPermissionsModule} from 'ngx-permissions';


import { MascotaListComponent } from './mascota-list/mascota-list.component';
import { MascotaCreateComponent } from './mascota-create/mascota-create.component';
import { MascotaService } from './mascota.service';
import { MascotaEditComponent } from './mascota-edit/mascota-edit.component';



@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    NgxPermissionsModule
  ],
  declarations: [MascotaListComponent, MascotaCreateComponent, MascotaEditComponent ],
  providers: [ MascotaService ],
  exports: [MascotaListComponent, MascotaCreateComponent]
})
export class MascotaModule { }
