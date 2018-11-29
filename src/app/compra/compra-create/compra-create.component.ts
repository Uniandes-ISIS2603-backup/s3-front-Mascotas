import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CompraService} from '../compra.service';
import {ToastrService} from 'ngx-toastr';
import {Compra} from '../compra';
import {Especie} from '../../especie/especie';
import {RazaDetail} from '../../raza/raza-detail';
import {ActivatedRoute} from '@angular/router';
import {MascotaService} from '../../mascota/mascota.service';
import {Mascota} from '../../mascota/mascota';
import {ClienteService} from '../../cliente/cliente.service';
import {ClienteDetail} from '../../cliente/cliente-detail';



@Component({
  selector: 'app-compra-create',
  templateUrl: './compra-create.component.html',
  styleUrls: ['./compra-create.component.css']
})
export class CompraCreateComponent implements OnInit {

  constructor(
      private compraService: CompraService,
      private toastrService: ToastrService,
      private route: ActivatedRoute,
      private mascotaService: MascotaService,
      private clienteService: ClienteService
  ) { }

  mascotaId: number;
  mascota: Mascota;
  compra: Compra;
  cliente: ClienteDetail;

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

  getMascota(): void {
    this.mascotaService.getMascota(this.mascotaId)
      .subscribe(mascota => {
        this.mascota = mascota;
      });
  }

  getCliente(): void {
    this.clienteService.getClienteDetail(1)
      .subscribe(clienteDetail => {
        this.cliente = clienteDetail;
      });
  }

  ngOnInit() {

    this.mascotaId = +this.route.snapshot.paramMap.get('id');

    // Inicializa compra al cargar el componente
    this.getMascota();
    this.getCliente();
    this.compra = new Compra();
  }

}
