import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CompraService} from '../compra.service';
import {ToastrService} from 'ngx-toastr';
import {Compra} from '../compra';
import {Especie} from '../../especie/especie';



@Component({
  selector: 'app-compra-create',
  templateUrl: './compra-create.component.html',
  styleUrls: ['./compra-create.component.css']
})
export class CompraCreateComponent implements OnInit {

  constructor(
      private compraService: CompraService,
      private toastrService: ToastrService
  ) { }

  compra: Compra;

  @Output() create = new EventEmitter;

  /**
   * Crea una compra y muestra un mensaje toast en la interfaz
   */
  createCompra(): Compra {

    this.compraService.createCompra(this.compra)
      .subscribe( (compra) => {
        this.compra = compra;
        this.create.emit();
        this.toastrService.success('La compra ha sido creada', 'Creacion Compra');
      });

    return this.compra;
  }

  ngOnInit() {
    // Inicializa compra al cargar el componente
    this.compra = new Compra();
  }

}
