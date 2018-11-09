import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppRoutingModule} from '../routing-module/app-routing.module';
import {FormsModule} from '@angular/forms';

import { CompraListComponent } from './compra-list/compra-list.component';
import {CompraService} from './compra.service';
import { CompraCreateComponent } from './compra-create/compra-create.component';
import { CompraDetailComponent } from './compra-detail/compra-detail.component';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [CompraService],
  declarations: [CompraListComponent, CompraCreateComponent, CompraDetailComponent],
  exports: [CompraListComponent, CompraCreateComponent]
})
export class CompraModule { }
