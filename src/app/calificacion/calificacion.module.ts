import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppRoutingModule} from '../routing-module/app-routing.module';
import { CalificacionListComponent } from './calificacion-list/calificacion-list.component';
import { CalificacionCreateComponent } from './calificacion-create/calificacion-create.component';
import { CalificacionService} from './calificacion.service';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  declarations: [CalificacionListComponent, CalificacionCreateComponent],
  providers : [ CalificacionService],
  exports : [CalificacionListComponent, CalificacionCreateComponent]
})
export class CalificacionModule { }
 