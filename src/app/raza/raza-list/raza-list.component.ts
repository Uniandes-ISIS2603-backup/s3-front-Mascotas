import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RazaService } from '../raza-service';
import { Raza } from '../raza';

@Component({
  selector: 'app-raza-list',
  templateUrl: './raza-list.component.html',
  styleUrls: ['./raza-list.component.css']
})
export class RazaListComponent implements OnInit {

constructor(private servicio: RazaService ,
    private route: ActivatedRoute
    ) {}

  /**
   * La lista de razas que pertenece a la tienda
   */
  razas: Raza[];

  getRazas(): void {
    this.servicio.getMascotasVenta()
    .subscribe( lista => this.razas = lista);
  }

  /**
   * this will initialize the component, retrieving the list of razas, from the server
   * this method will be called when the component is created.
   */
  ngOnInit() {
    this.getRazas();
  }

}
