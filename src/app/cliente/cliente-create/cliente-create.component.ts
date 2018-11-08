import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ClienteService} from '../cliente.service';
import {ToastrService} from 'ngx-toastr';
import {Cliente} from '../cliente';

@Component({
  selector: 'app-cliente-create',
  templateUrl: './cliente-create.component.html',
  styleUrls: ['./cliente-create.component.css']
})
export class ClienteCreateComponent implements OnInit {

  constructor(
      private clienteService: ClienteService,
      private toastrService: ToastrService
  ) { }

  cliente: Cliente;

  @Output() create = new EventEmitter();

  createCliente(): Cliente {
    this.clienteService.createCliente(this.cliente)
      .subscribe((cliente) => {
        this.cliente = cliente;
        this.create.emit();
        this.toastrService.success( 'Un cliente ha sido creado', 'Creacion Cliente');
      });
    return this.cliente;
  }

  ngOnInit() {
    this.cliente = new Cliente();
  }

}
