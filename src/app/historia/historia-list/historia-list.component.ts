import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HistoriaService} from '../historia.service';
import { Historia} from '../historia';


@Component({
  selector: 'app-historia-list',
  templateUrl: './historia-list.component.html',
  styleUrls: ['./historia-list.component.css']
})
export class HistoriaListComponent implements OnInit {


  constructor(private servicio: HistoriaService) {}

 /**
  * La lista de historia
  */
 historias  : Historia[];

  /**
   * Obtiene todas las historias registradas en el sistema
   */
 getHistorias(): void {
   this.servicio.getHistorias()
   .subscribe( lista => this.historias = lista);
 }

 ngOnInit() {
   /**
    * Al iniciar el componente llama al metodo getHistorias()
    */
   this.getHistorias();
 }

}
