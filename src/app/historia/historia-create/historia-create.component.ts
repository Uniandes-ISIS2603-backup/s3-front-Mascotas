import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {HistoriaService} from '../historia.service';
import {ToastrService} from 'ngx-toastr';
import {Historia} from '../historia';

@Component({
  selector: 'app-historia-create',
  templateUrl: './historia-create.component.html',
  styleUrls: ['./historia-create.component.css']
})
export class HistoriaCreateComponent implements OnInit {

  constructor(
    private historiaService: HistoriaService,
    private toastrService: ToastrService
  ) { }

  historia: Historia;

  @Output() create = new EventEmitter();

  /**
   * Crea una historia y muestra en la interfaz un toast con el mensaje de success
   */
  createHistoria(): Historia {
    this.historiaService.createHistoria(this.historia)
      .subscribe((historia) => {
        this.historia = historia;
        this.create.emit();
        this.toastrService.success('La historia ha sido creada', 'Creacion Historia');
      });

    return this.historia;
  }

  ngOnInit() {
  }

}
