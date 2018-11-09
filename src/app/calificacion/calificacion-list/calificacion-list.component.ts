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

  constructor(private servicio: CalificacionService) {}

  /**
  * La lista de calificaciones.
  */
  calificaciones: Calificacion[];

  /**
   * Obtiene todas las calificaciones
   */
  getCalificaciones(): void {
    this.servicio.getCalificaciones().subscribe(
      lista => this.calificaciones = lista);
  }

  ngOnInit() {
    // Ejecuta getCalificaciones al iniciar el componente
    this.getCalificaciones();
  }
}
