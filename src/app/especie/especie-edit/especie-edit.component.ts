import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { EspecieService } from '../especie.service';
import { ToastrService } from 'ngx-toastr';
import { EspecieDetail } from '../especie-detail';

@Component({
  selector: 'app-especie-edit',
  templateUrl: './especie-edit.component.html',
  styleUrls: ['./especie-edit.component.css']
})
export class EspecieEditComponent implements OnInit {

  /**
      * Constructor for the component
      * @param dp DatePipe to format the date.
      * @param authorService The authors' services provider
      * @param toastrService The toastr to show messages to the user
      */
  constructor(
    private especieService: EspecieService,
    private toastrService: ToastrService,
  ) { }


  /**
  * La especie que llega como llamado el componente padre.
  */
  @Input() especie: EspecieDetail;

  /**
     * The output which tells the parent component
     * that the user no longer wants to create an author
     */
  @Output() cancel = new EventEmitter();

  /**
  * The output which tells the parent component
  * that the user updated a new author
  */
  @Output() update = new EventEmitter();


  /**
  * Updates the information of the author
  */
  editarEspecie(): void {
    this.especieService.updateESpecie(this.especie)
      .subscribe(() => {
        this.toastrService.success("La especie fue actualizada", "Edición de especie");
      });
    this.update.emit();
  }

  /**
    * Emits the signal to tell the parent component that the
    * user no longer wants to create an user
    */
  cancelEdition(): void {
    this.cancel.emit();

  }


  ngOnInit() {
  }

}
