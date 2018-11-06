import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {EspecieService} from '../../especie/especie.service';
import {ToastrService} from 'ngx-toastr';
import {MascotaService} from '../mascota.service';
import {Mascota} from '../mascota';
import {Especie} from '../../especie/especie';

@Component({
  selector: 'app-mascota-create',
  templateUrl: './mascota-create.component.html',
  styleUrls: ['./mascota-create.component.css']
})
export class MascotaCreateComponent implements OnInit {

  constructor(
    private mascotaService: MascotaService,
    private toastrService: ToastrService
  ) { }

  mascota: Mascota;

  @Output() create = new EventEmitter();

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

  ngOnInit() {
    this.mascota = new Mascota();
  }

}
