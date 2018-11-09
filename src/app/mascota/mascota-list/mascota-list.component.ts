import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MascotaService} from '../mascota.service';
import { Mascota} from '../mascota';

@Component({
  selector: 'app-mascota-list',
  templateUrl: './mascota-list.component.html',
  styleUrls: ['./mascota-list.component.css']
})
export class MascotaListComponent implements OnInit {

  constructor(private mascotaService: MascotaService) {}

  /**
  * La lista de mascotas.
  */
  mascotas: Mascota[];

  /**
   * Retorna todas las mascotas en el sistema
   */
  getMascotas(): void {
    this.mascotaService.getMascotas().subscribe(
      lista => this.mascotas = lista
    );
  }

  ngOnInit() {
    /**
     * Al iniciar el componente llama el metodo getMascotas()
     */
    this.getMascotas();
  }

}
