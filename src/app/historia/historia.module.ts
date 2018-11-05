import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoriaListComponent } from './historia-list/historia-list.component';
import { HistoriaDetalComponent } from './historia-detal/historia-detal.component';
import { HistoriaDetailComponent } from './historia-detail/historia-detail.component';
import { HistoriaCreateComponent } from './historia-create/historia-create.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HistoriaListComponent, HistoriaDetalComponent, HistoriaDetailComponent, HistoriaCreateComponent]
})
export class HistoriaModule { }
