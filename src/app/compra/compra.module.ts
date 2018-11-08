import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppRoutingModule} from '../routing-module/app-routing.module';
import {FormsModule} from '@angular/forms';

import { CompraListComponent } from './compra-list/compra-list.component';
import {CompraService} from './compra.service';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [CompraService],
  declarations: [CompraListComponent],
  exports: [CompraListComponent]
})
export class CompraModule { }
