import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoriaListComponent } from './historia-list/historia-list.component';
import { HistoriaCreateComponent } from './historia-create/historia-create.component';
import { HistoriaDetailComponent} from './historia-detail/historia-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HistoriaListComponent, HistoriaCreateComponent, HistoriaDetailComponent]
})
export class HistoriaModule { }
