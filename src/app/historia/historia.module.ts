import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../routing-module/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { HistoriaListComponent } from './historia-list/historia-list.component';
import { HistoriaCreateComponent } from './historia-create/historia-create.component';
import { HistoriaDetailComponent} from './historia-detail/historia-detail.component';
import { HistoriaService} from './historia.service';


@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule
  ],
  declarations: [ HistoriaListComponent, HistoriaCreateComponent, HistoriaDetailComponent],
  providers : [ HistoriaService],
  exports: [ HistoriaListComponent, HistoriaCreateComponent, HistoriaDetailComponent],

})
export class HistoriaModule { }
