import { Component, OnInit } from '@angular/core';
import {ClienteDetail} from '../cliente-detail';
import {ClienteService} from '../cliente.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-cliente-detail',
  templateUrl: './cliente-detail.component.html',
  styleUrls: ['./cliente-detail.component.css']
})
export class ClienteDetailComponent implements OnInit {

  clienteId: number;
  clienteDetail: ClienteDetail;

  constructor(
      private clienteService: ClienteService,
      private route: ActivatedRoute
  ) { }

  /**
   * Obtiene el detalle de un cliente dado suid
   */
  getClienteDetail(): void {
    this.clienteService.getClienteDetail(this.clienteId)
      .subscribe(clienteDetail => {
        this.clienteDetail = clienteDetail;
      });
  }

  ngOnInit() {
    // Al iniciar el componente mapea el id enviado por get y ejecuta getClienteDetail
    this.clienteId = +this.route.snapshot.paramMap.get('id');
    this.clienteDetail = new ClienteDetail();
    this.getClienteDetail();
  }

}
