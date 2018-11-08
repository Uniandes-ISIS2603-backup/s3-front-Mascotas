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


  constructor(private servicio : HistoriaService ,
    private route : ActivatedRoute
    ) {}

 /**
  * La lista de mascotas. 
  */
 historias : Historia[];

 getHistorias(): void{
   this.servicio.getHistorias()
   .subscribe( lista => this.historias=lista);
 }

 ngOnInit() {
   this.getHistorias();
 }

}
