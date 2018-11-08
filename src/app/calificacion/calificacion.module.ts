import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppRoutingModule} from '../routing-module/app-routing.module';
import { CalificacionListComponent } from './calificacion-list/calificacion-list.component';
import { CalificacionCreateComponent } from './calificacion-create/calificacion-create.component';
import { CalificacionService} from './calificacion.service';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule
  ],
  declarations: [CalificacionListComponent, CalificacionCreateComponent],
  providers : [ CalificacionService],
  exports : [CalificacionListComponent, CalificacionCreateComponent]
})
export class CalificacionModule { }
