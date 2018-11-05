import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RazaServiceService } from '../raza-service.service';
import { Raza } from '../raza';


@Component({
  selector: 'app-raza-list',
  templateUrl: './raza-list.component.html',
  styleUrls: ['./raza-list.component.css']
})
export class RazaListComponent implements OnInit {

  constructor(private servicio : RazaServiceService ,
    private route : ActivatedRoute
    ) {}

  /**
  * La lista de mascotas de venta.
  */
  razas : Raza[];

  getRazas(): void{
    this.servicio.getMascotasVenta()
    .subscribe( lista => this.razas=lista);
  }

  ngOnInit() {
    this.getRazas();
  }

}
