import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RazaService } from '../raza-service';
import { ToastrService } from 'ngx-toastr';
import { Raza } from '../raza';
import { EspecieDetail } from 'src/app/especie/especie-detail';
import { EspecieService } from 'src/app/especie/especie.service';

@Component({
  selector: 'app-raza-create',
  templateUrl: './raza-create.component.html',
  styleUrls: ['./raza-create.component.css']
})
export class RazaCreateComponent implements OnInit {

  /**
   * constructor del componente.
   * @param mascotaService El proveedor del servicio de la msacota
   * @param toastrService  los mensajes al usuario
   */
  constructor(
    private razaService: RazaService,
    private toastrService: ToastrService,
    private especieService: EspecieService
  ) { }

  /**
   * La raza que se va a crear.
   */
  raza: Raza;

  /**
   * 
   */
  especies: EspecieDetail[];


  

  /**
 * The output which tells the parent component
 * that the user created a new pet
 */
  @Output() create = new EventEmitter();





  /**
   * Creacion de una raza. Cuando ha sido creada se visualiza un toast
   */
  createRaza(): Raza {
    this.razaService.createRaza(this.raza)
      .subscribe((raza) => {
        this.raza = raza;
        this.create.emit();
        this.toastrService.success('La Raza ha sido creada', 'Creacion Raza');
      });
    return this.raza;
  }

 

  getEspecies(): void {
    this.especieService.getEspecies().subscribe(especies => {
      this.especies = especies;
    }, err => {
      this.toastrService.error(err, 'Error');
    })
  }



   /**
     * Instancia una Raza en la variable especie al iniciar el componente
     */
  ngOnInit() {
    this.raza = new Raza();
    this.getEspecies();
  }
}
 