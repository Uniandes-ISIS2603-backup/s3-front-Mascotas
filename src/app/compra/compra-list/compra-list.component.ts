import { Component, OnInit } from '@angular/core';
import {CompraService} from '../compra.service';
import {Compra} from '../compra';

@Component({
  selector: 'app-compra-list',
  templateUrl: './compra-list.component.html',
  styleUrls: ['./compra-list.component.css']
})
export class CompraListComponent implements OnInit {

  constructor(private comprasService: CompraService) { }

  compras: Compra[];

  /**
   * Obtiene todas las compras en el sistema
   */
  getCompras(): void {
    this.comprasService.getCompras().subscribe(
        lista => this.compras = lista
    );
  }

  ngOnInit() {
    // Al cargar el componente carga todas las compras
    this.getCompras();
  }
}
