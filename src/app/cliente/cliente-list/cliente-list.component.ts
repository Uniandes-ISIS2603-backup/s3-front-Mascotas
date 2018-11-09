import { Component, OnInit } from '@angular/core';
import {ClienteService} from '../cliente.service';
import {Cliente} from '../cliente';

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.css']
})
export class ClienteListComponent implements OnInit {

  constructor(private clienteService: ClienteService) { }

  /**
   * Lista de clientes
   */
  clientes: Cliente[];

  /**
   * Obtiene todos los clientes
   */
  getClientes(): void {
    this.clienteService.getClientes().subscribe(
      lista => this.clientes = lista
    );
  }

  ngOnInit() {
    // Ejecuta getClientes al iniciar el componente
    this.getClientes();
  }

}
