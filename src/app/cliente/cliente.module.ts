import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteCreateComponent } from './cliente-create/cliente-create.component';
import { ClienteDetailComponent } from './cliente-detail/cliente-detail.component';
import {AppRoutingModule} from '../routing-module/app-routing.module';
import {FormsModule} from '@angular/forms';
import {ClienteListComponent} from './cliente-list/cliente-list.component';
import {ClienteService} from './cliente.service';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ClienteService],
  declarations: [ClienteCreateComponent, ClienteDetailComponent, ClienteListComponent],
  exports: [ClienteCreateComponent, ClienteDetailComponent, ClienteListComponent]
})
export class ClienteModule { }
