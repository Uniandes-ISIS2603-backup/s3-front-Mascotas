import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {RazaServiceService} from '../raza-service.service';
import {Raza} from '../raza';
import { RazaDetail } from '../razaDetail';

@Component({
  selector: 'app-raza-detail',
  templateUrl: './raza-detail.component.html',
  styleUrls: ['./raza-detail.component.css']
})
export class RazaDetailComponent implements OnInit {

  /**
   * El componente constructor
   * @param razaServie 
   * @param route 
   */
  constructor( private razaServie: RazaServiceService,
     private route: ActivatedRoute
    ) {}


    /**
     * La raza cuyos detalles queremos mostrar.
     */
    razaDetail: RazaDetail;

    /**
     * El identificador de la raza entregado de la dirección.
     */
    raza_id: number;


    getRazaDetail() : void {
      this.razaServie.getRazaDetail(this.raza_id)
      .subscribe( detail => { 
        this.razaDetail= detail
        });
    }


  ngOnInit() {
    this.raza_id= +this.route.snapshot.paramMap.get('id');
    this.razaDetail = new RazaDetail();
    this.getRazaDetail();
  }

}
