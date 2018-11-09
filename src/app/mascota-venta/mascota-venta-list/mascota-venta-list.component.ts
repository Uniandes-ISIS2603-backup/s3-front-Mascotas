import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MascotaVentaService} from '../mascota-venta.service';
import { MascotaVenta} from '../mascotaVenta';

@Component({
  selector: 'app-mascota-venta-list',
  templateUrl: './mascota-venta-list.component.html',
  styleUrls: ['./mascota-venta-list.component.css']
})
export class MascotaVentaListComponent implements OnInit {

  constructor(private servicio: MascotaVentaService) {}

  /**
  * La lista de mascotas de venta.
  */
  mascotasVenta: MascotaVenta[];

  /**
   * Obtiene todas las mascotas disponibles para la venta
   */
  getMascotas(): void {
    this.servicio.getMascotasVenta()
    .subscribe( lista => this.mascotasVenta = lista);
  }

  ngOnInit() {
    /**
     * Al iniciar el componente llama al metodo getMascotas()
     */
    this.getMascotas();
  }

}
