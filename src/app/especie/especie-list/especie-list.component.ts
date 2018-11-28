import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ToastrService } from 'ngx-toastr'; import { EspecieService } from '../especie.service';
import { Especie } from '../especie';
import { EspecieDetail } from '../especie-detail';
import {ModalDialogService, SimpleModalComponent} from 'ngx-modal-dialog';


@Component({
  selector: 'app-especie-list',
  templateUrl: './especie-list.component.html',
  styleUrls: ['./especie-list.component.css']
})
export class EspecieListComponent implements OnInit {

  constructor(
    private especieService: EspecieService,
    private viewRef: ViewContainerRef,
    private modalDialogService: ModalDialogService,
    private toastrService: ToastrService
  ) { }

  /**
   * Lista de Especies
   */
  especies: Especie[];


  /**
    * The id of the author that the user wants to view
    */
  especie_id: number;

  /**
  * Shows or hides the author-create-component
  */
  showCreate: boolean;

  /**
   * Shows or hides the detail of an author
   */
  showView: boolean;

  /**
  * Shows or hides the edition of an author
  */
  showEdit: boolean;

  /**
   * the author that the user views.
   */
  selectedEspecie: Especie;

  /**
   * Obtiene la lista de todas las especies registradas en el sistema
   */
  getEspecies(): void {
    this.especieService.getEspecies().subscribe(
      lista => this.especies = lista
    );
  }


  /**
  * Shows the especie
  */
  onSelected(especie_id: number): void {
    this.showCreate = false;
    this.showEdit = this.showEdit;
    this.showView = !this.showView;
    this.especie_id = especie_id;
    this.selectedEspecie = new EspecieDetail();
    this.getEspecieDetail();
  }

  /**
     * Shows or hides the create component
     */
  showHideEdit(especie_id: number): void {
    if (!this.showEdit || (this.showEdit && especie_id != this.selectedEspecie.id)) {
      this.showView = false;
      this.showCreate = false;
      this.showEdit = true;
      this.especie_id = especie_id;
      this.selectedEspecie = new EspecieDetail();
      this.getEspecieDetail();
    }
    else {
      this.showEdit = false;
      this.showView = true;
    }
  }

  getEspecieDetail(): void {
    this.especieService.getEspecieDetail(this.especie_id)
      .subscribe(selectedEspecie => {
        this.selectedEspecie = selectedEspecie
      });
  }


  /**
     * Shows or hides the create component
     */
  showHideCreate(): void {
    this.showView = false;
    this.showEdit = false;
    this.showCreate = !this.showCreate;
  }


  /**
    * Elimina una especie. 
    */
   deleteEspecie(especieId): void {
    this.modalDialogService.openDialog(this.viewRef, {
        title: 'Eliminar una especie',
        childComponent: SimpleModalComponent,
        data: {text: '¿Está seguro que desea eliminar esta especie de la tienda PetsUniandes?'},
        actionButtons: [
            {
                text: 'Yes',
                buttonClass: 'btn btn-danger',
                onAction: () => {
                    this.especieService.deleteEspecie(especieId).subscribe(() => {
                        this.toastrService.error("La especie fue eliminada exitosamente", "Especie eliminada");
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
       * Al iniciar el componente llama al metodo getEspecies()
       */
  ngOnInit() {
    this.showCreate = false;
    this.showView = false;
    this.showEdit = false;
    this.selectedEspecie = undefined;
    this.especie_id = undefined;
    this.getEspecies();
  }
}
