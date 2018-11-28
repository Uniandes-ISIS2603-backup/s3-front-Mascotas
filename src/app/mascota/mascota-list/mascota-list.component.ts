import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MascotaService } from '../mascota.service';
import { Mascota } from '../mascota';

@Component({
  selector: 'app-mascota-list',
  templateUrl: './mascota-list.component.html',
  styleUrls: ['./mascota-list.component.css']
})
export class MascotaListComponent implements OnInit {

  constructor(private mascotaService: MascotaService) { }

  /**
  * La lista de mascotas.
  */
  @Input() mascotas: Mascota[];

  /**
   * si se desean mostrar todas las mascotas.
   */
  @Input() allMascotas: boolean = true;


  /**
   * the mascota to edit.
   */
  selectedMascota: Mascota;

  /**
   * The id of the mascota that the user wants to view
   */
  mascota_id: number;



  /**
  * Shows or hides the edition of an author
  */
  showEdit: boolean;

  /**
   * Retorna todas las mascotas en el sistema
   */
  getMascotas(): void {
    this.mascotaService.getMascotas().subscribe(
      lista => this.mascotas = lista
    );
  }




   /**
     * Shows or hides the create component
     */
    showHideEdit(mascota_id: number): void {
        this.showEdit = !this.showEdit;
        this.mascota_id = mascota_id;
        this.selectedMascota = new Mascota();
        this.getMascota();
    }

    /**
     * Obtiene una mascota especificamente por su id
     */
  getMascota(): void {
    this.mascotaService.getMascota(this.mascota_id)
    .subscribe(selectedMascota => {
      this.selectedMascota = selectedMascota
    });
  }


  /**
 * Al iniciar el componente llama el metodo getMascotas()
 */
  ngOnInit() {
    if (this.allMascotas) {
      this.getMascotas();
    }
    this.showEdit = false;
    this.selectedMascota = undefined;
    this.mascota_id = undefined;
  }

}
