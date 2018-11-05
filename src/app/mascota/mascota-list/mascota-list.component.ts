import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MascotaService} from '../mascota.service';
import { Mascota} from '../mascota';

@Component({
  selector: 'app-mascota-list',
  templateUrl: './mascota-list.component.html',
  styleUrls: ['./mascota-list.component.css']
})
export class MascotaListComponent implements OnInit {

  constructor(private mascotaService : MascotaService ,
    private route : ActivatedRoute
    ) {}

  /**
  * La lista de mascotas. 
  */
  mascotas : Mascota[];

  getMascotas(): void{
    this.mascotaService.getMascotas()
    .subscribe( lista => this.mascotas=lista);
  }

  ngOnInit() {
    this.getMascotas();
  }

}
