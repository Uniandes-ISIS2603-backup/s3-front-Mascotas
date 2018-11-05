import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MascotaListComponent } from './mascota-list/mascota-list.component';
import { MascotaDetailComponent } from './mascota-detail/mascota-detail.component';
import { MascotaCreateComponent } from './mascota-create/mascota-create.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MascotaListComponent, MascotaDetailComponent, MascotaCreateComponent]
})
export class MascotaModule { }
