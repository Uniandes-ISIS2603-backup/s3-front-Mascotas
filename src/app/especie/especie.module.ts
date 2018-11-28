import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {NgxPermissionsModule} from 'ngx-permissions';
import {RazaModule} from '../raza/raza.module';


import { EspecieListComponent } from './especie-list/especie-list.component';
import {EspecieService} from './especie.service';
import { EspecieCreateComponent } from './especie-create/especie-create.component';
import {AppRoutingModule} from '../routing-module/app-routing.module';
import { EspecieDetailComponent } from './especie-detail/especie-detail.component';


@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    NgxPermissionsModule,
    HttpClientModule,
    BrowserModule,
    RazaModule
  ],
  providers: [EspecieService],
  declarations: [ EspecieListComponent, EspecieCreateComponent, EspecieDetailComponent],
  exports: [EspecieListComponent, EspecieCreateComponent, EspecieDetailComponent]
})
export class EspecieModule { }
