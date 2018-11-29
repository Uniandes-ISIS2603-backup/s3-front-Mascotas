import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { MascotaService } from '../mascota.service';
import { Mascota } from '../mascota';
import { RazaDetail } from 'src/app/raza/raza-detail';
import { RazaService } from 'src/app/raza/raza-service';


@Component({
  selector: 'app-mascota-edit',
  templateUrl: './mascota-edit.component.html',
  styleUrls: ['./mascota-edit.component.css']
})
export class MascotaEditComponent implements OnInit {
 
  constructor(
    private especieService: MascotaService,
    private toastrService: ToastrService,
    private razaService : RazaService
  ) { }



    /**
   * Las razas existentes
   */
  razas: RazaDetail[];

  /**
   * La mascota que llega como llamado el componente padre.
   */
  @Input() mascota: Mascota;


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
 editarMascota(): void {
  this.especieService.editarMascota(this.mascota)
    .subscribe(() => {
      this.toastrService.success("La mascota fue actualizada", "Edición de mascota");
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

   /**
   * Todas las razas existentes en tiempo real.
   */
  getRazas(): void {
    this.razaService.getRazas().subscribe(razas => {
      this.razas = razas;
    }, err => {
      this.toastrService.error(err, 'Error');
    });
  }


  ngOnInit() {
    this.getRazas();
  }


}
