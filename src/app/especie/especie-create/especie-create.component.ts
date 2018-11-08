import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {EspecieService} from '../especie.service';
import { ToastrService } from 'ngx-toastr';
import {Especie} from '../especie';

@Component({
  selector: 'app-especie-create',
  templateUrl: './especie-create.component.html',
  styleUrls: ['./especie-create.component.css']
})
export class EspecieCreateComponent implements OnInit {

  constructor(
      private especieService: EspecieService,
      private toastrService: ToastrService
  ) { }

  especie: Especie;

  @Output() create = new EventEmitter();

  createEspecie(): Especie {
    console.log(this.especie);

    this.especieService.createEspecie(this.especie)
      .subscribe((especie) => {
        this.especie = especie;
        this.create.emit();
        this.toastrService.success('La especie ha sido creada', 'Creacion Especie');
      });
      return this.especie;
  }

  ngOnInit() {
    this.especie = new Especie();
  }

}
