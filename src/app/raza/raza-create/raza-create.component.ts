import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {RazaService} from '../raza-service';
import {ToastrService} from 'ngx-toastr';
import {Raza} from '../raza';

@Component({
  selector: 'app-raza-create',
  templateUrl: './raza-create.component.html',
  styleUrls: ['./raza-create.component.css']
})
export class RazaCreateComponent implements OnInit {

  constructor(
    private razaService: RazaService,
    private toastrService: ToastrService
  ) { }

  raza: Raza;

  @Output() create = new EventEmitter();

  /**
   * Creacion de una raza. Cuando ha sido creada se visualiza un toast
   */
  createRaza(): Raza {

    this.razaService.createRaza(this.raza)
      .subscribe((raza) => {
        this.raza = raza;
        this.create.emit();
        this.toastrService.success('La especie ha sido creada', 'Creacion Especie');
      });
    return this.raza;
  }

  ngOnInit() {
    /**
     * Instancia una Raza en la variable especie al iniciar el componente
     */
    this.raza = new Raza();
  }
}
