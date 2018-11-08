import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../routing-module/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { RazaListComponent } from './raza-list/raza-list.component';
import { RazaDetailComponent } from './raza-detail/raza-detail.component';
import { RazaCreateComponent } from './raza-create/raza-create.component';
import { RazaService } from './raza-service';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule
  ],
  declarations: [ RazaListComponent, RazaDetailComponent, RazaCreateComponent],
  providers : [ RazaService] ,
  exports : [ RazaListComponent, RazaDetailComponent, RazaCreateComponent]
})
export class RazaModule { }
