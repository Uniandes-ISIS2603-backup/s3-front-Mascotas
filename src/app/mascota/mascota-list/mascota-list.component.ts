import { Component, OnInit, Input, ViewContainerRef } from '@angular/core';
import { MascotaService } from '../mascota.service';
import {ModalDialogService, SimpleModalComponent} from 'ngx-modal-dialog';
import { Mascota } from '../mascota';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-mascota-list',
  templateUrl: './mascota-list.component.html',
  styleUrls: ['./mascota-list.component.css']
})
export class MascotaListComponent implements OnInit {

  constructor(
    private mascotaService: MascotaService,
    private modalDialogService: ModalDialogService,
    private toastrService: ToastrService,
    private viewRef: ViewContainerRef,
    ) { }

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
    * Elimina una especie. 
    */
   deleteMascota(mascotaId): void {
    this.modalDialogService.openDialog(this.viewRef, {
        title: 'Eliminar una Mascota',
        childComponent: SimpleModalComponent,
        data: {text: '¿Está seguro que desea eliminar esta mascota de la tienda PetsUniandes?'},
        actionButtons: [
            {
                text: 'Yes',
                buttonClass: 'btn btn-danger',
                onAction: () => {
                    this.mascotaService.deleteMascota(mascotaId).subscribe(() => {
                        this.toastrService.error("La mascota fue eliminada exitosamente", "Mascota eliminada");
                        this.ngOnInit();
                    }, err => {
                        this.toastrService.error(err, "Error");
                    });
                    return true;
                }
            },
            {text: 'No', onAction: () => true}
        ]
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
