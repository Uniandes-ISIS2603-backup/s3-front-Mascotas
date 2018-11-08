import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CalificacionService} from '../calificacion.service';
import {ToastrService} from 'ngx-toastr';
import {Calificacion} from '../calificacion';

@Component({
  selector: 'app-calificacion-create',
  templateUrl: './calificacion-create.component.html',
  styleUrls: ['./calificacion-create.component.css']
})
export class CalificacionCreateComponent implements OnInit {

  constructor(
    private calificacionService: CalificacionService,
    private toastrService: ToastrService
  ) { }

  calificacion: Calificacion;

  @Output() create = new EventEmitter();

  createCalificacion(): Calificacion {
    this.calificacionService.createCalificacion(this.calificacion)
      .subscribe((calificacion) => {
          this.calificacion = calificacion;
          this.create.emit();
          this.toastrService.success('La calificacion sa sido creada', 'Creacion Calificacion');
      });

    return this.calificacion;

  }

  ngOnInit() {
  }

}
