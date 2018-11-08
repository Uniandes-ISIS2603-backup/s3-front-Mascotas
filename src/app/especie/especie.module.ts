import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { EspecieListComponent } from './especie-list/especie-list.component';
import {EspecieService} from './especie.service';
import { EspecieCreateComponent } from './especie-create/especie-create.component';
import {AppRoutingModule} from '../routing-module/app-routing.module';
import { EspecieDetailComponent } from './especie-detail/especie-detail.component';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [EspecieService],
  declarations: [EspecieListComponent, EspecieCreateComponent, EspecieDetailComponent],
  exports: [EspecieListComponent, EspecieCreateComponent, EspecieDetailComponent]
})
export class EspecieModule { }
