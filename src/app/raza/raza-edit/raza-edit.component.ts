import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { RazaService } from '../raza-service';
import { EspecieService } from 'src/app/especie/especie.service';
import { EspecieDetail } from 'src/app/especie/especie-detail';
import { Raza } from '../raza';
import { Especie } from 'src/app/especie/especie';

@Component({
  selector: 'app-raza-edit',
  templateUrl: './raza-edit.component.html',
  styleUrls: ['./raza-edit.component.css']
})
export class RazaEditComponent implements OnInit {



  constructor(
    private especieService: EspecieService,
    private toastrService: ToastrService,
    private razaService: RazaService
  ) { }

  /**
   * Las especies existentes
   */
  especies: EspecieDetail[];


  /**
   * Las mascota que lelga como llamado del componente padre.
   */
  @Input() raza: Raza;


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
  editarRaza(): void {
    this.razaService.editarRaza(this.raza)
      .subscribe(() => {
        this.toastrService.success("La Raza fue actualizada", "Edición de Raza");
      });
    this.update.emit();
  }

  /**
   * Emits the signal to tell the parent component that the
   * user no longer wants to create an user
   */
  cancelEdition(): void {
    console.log('cancelar edicion raza');
    this.cancel.emit();
  }

  
   /**
   * Todas las razas existentes en tiempo real.
   */
  getEspecies(): void {
    this.especieService.getEspecies().subscribe(especies => {
      this.especies = especies;
    }, err => {
      this.toastrService.error(err, 'Error');
    });
  }

  ngOnInit() {
    this.getEspecies();
  }

}
