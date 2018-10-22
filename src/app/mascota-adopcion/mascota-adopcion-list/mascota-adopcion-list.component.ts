import { Component, OnInit } from '@angular/core';
import { DataMasAdopcionService} from '../data-mas-adopcion.service';
import { MascotaAdopcion} from '../mascotaAdopcion';

@Component({
  selector: 'app-mascota-adopcion-list',
  templateUrl: './mascota-adopcion-list.component.html',
  styleUrls: ['./mascota-adopcion-list.component.css']
})
export class MascotaAdopcionListComponent implements OnInit {

  constructor(private servicio: DataMasAdopcionService) { }

  mascotas: MascotaAdopcion[];

  getMascotas(): void{
    this.servicio.getMascotas()
    .subscribe( lista => this.mascotas=lista);
  }


  ngOnInit() {
    this.getMascotas();
  }

}
