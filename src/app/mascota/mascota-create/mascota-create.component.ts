import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { MascotaService } from '../mascota.service';
import { Mascota } from '../mascota';
import { RazaDetail } from 'src/app/raza/raza-detail';
import { RazaService } from 'src/app/raza/raza-service';


@Component({
  selector: 'app-mascota-create',
  templateUrl: './mascota-create.component.html',
  styleUrls: ['./mascota-create.component.css']
})
export class MascotaCreateComponent implements OnInit {

  /**
   * constructor del componente.
   * @param mascotaService El proveedor del servicio de la msacota
   * @param toastrService  los mensajes al usuario
   */
  constructor(
    private mascotaService: MascotaService,
    private toastrService: ToastrService,
    private razaService: RazaService
  ) { }

  /**
   * La nueva mascota
   */
  mascota: Mascota;


  /**
   * Las razas existentes
   */
  razas: RazaDetail[];

  /**
   * The output which tells the parent component
   * that the user no longer wants to create a pet
   */
  @Output() cancel = new EventEmitter();

  /**
 * The output which tells the parent component
 * that the user created a new pet
 */
  @Output() create = new EventEmitter();


  /**
   * This creates a new pet.
   */
  createMascota(): Mascota {
    console.log(this.mascota);

    this.mascotaService.createMascota(this.mascota)
      .subscribe((mascota) => {
        this.mascota = mascota;
        this.create.emit();
        this.toastrService.success('La mascota ha sido creada', 'Creacion Mascota');
      });
    return this.mascota;
  }


  /**
    * Emits the signal to tell the parent component that the
    * user no longer wants to create an user
    */
  cancelCreation(): void {
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

  /**
   * This function will initialite the component.
   */
  ngOnInit() {
    this.mascota = new Mascota();
    this.getRazas();
  }

}
