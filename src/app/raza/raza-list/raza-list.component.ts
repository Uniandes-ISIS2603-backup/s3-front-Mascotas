import { Component, OnInit, Input, ViewContainerRef } from '@angular/core';
import { RazaService } from '../raza-service';
import {ModalDialogService, SimpleModalComponent} from 'ngx-modal-dialog';
import { Raza } from '../raza';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-raza-list',
  templateUrl: './raza-list.component.html',
  styleUrls: ['./raza-list.component.css']
})
export class RazaListComponent implements OnInit {

  constructor(private servicio: RazaService,
    private razaService: RazaService,
    private modalDialogService: ModalDialogService,
    private toastrService: ToastrService,
    private viewRef: ViewContainerRef,
  ) { }

  /**
   * La lista de razas que pertenece a la tienda
   */
  @Input() razas: Raza[];

  /**
   * the raza to edit.
   */
  selectedRaza: Raza;

  /**
   * The id of the raza that the user wants to modificate
   */
  raza_id: number;



  /**
  * Shows or hides the edition of an author
  */
  showEdit: boolean;


  /**
   * Retorna todas las razas
   */
  getRazas(): void {
    this.servicio.getRazas()
      .subscribe(lista => this.razas = lista);
  }



  /**
    * Shows or hides the create component
    */
  showHideEdit(raza_id: number): void {
    this.showEdit = !this.showEdit;
    this.raza_id = raza_id;
    this.selectedRaza = new Raza();
    this.getRaza();
  }


  /**
    * Elimina una raza. 
    */
  deleteRaza(razaId): void {
    this.modalDialogService.openDialog(this.viewRef, {
      title: 'Eliminar una Raza',
      childComponent: SimpleModalComponent,
      data: { text: '¿Está seguro que desea eliminar esta Raza de la tienda PetsUniandes?' },
      actionButtons: [
        {
          text: 'Yes',
          buttonClass: 'btn btn-danger',
          onAction: () => {
            this.razaService.deleteRaza(razaId).subscribe(() => {
              this.toastrService.error("La Raza fue eliminada exitosamente", "Raza eliminada");
              this.ngOnInit();
            }, err => {
              this.toastrService.error(err, "Error");
            }); 
            return true;
          }
        },
        { text: 'No', onAction: () => true }
      ]
    });
  }



  /**
  * Obtiene una raza especificamente por su id
  */
  getRaza(): void {
    this.razaService.getRaza(this.raza_id)
      .subscribe(selectedRaza => {
        this.selectedRaza = selectedRaza
      });
  }



  /**
   * this will initialize the component, retrieving the list of razas, from the server
   * this method will be called when the component is created.
   */
  ngOnInit() {
    this.getRazas();
    this.showEdit = false;
    this.selectedRaza = undefined;
    this.raza_id = undefined;
  }

}
