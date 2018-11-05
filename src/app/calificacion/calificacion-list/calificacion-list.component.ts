import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CalificacionService} from '../calificacion.service';
import { Calificacion} from '../calificacion';

@Component({
  selector: 'app-calificacion-list',
  templateUrl: './calificacion-list.component.html',
  styleUrls: ['./calificacion-list.component.css']
})
export class CalificacionListComponent implements OnInit {

  constructor(private servicio : CalificacionService ,
    private route : ActivatedRoute
    ) {}

  /**
  * La lista de mascotas de venta.
  */
  calificaciones : Calificacion[];

  getMascotas(): void{
    this.servicio.getCalificaciones()
    .subscribe( lista => this.calificaciones=lista);
  }

  ngOnInit() {
    this.getMascotas();
  }
}
