import { Component, OnInit, Input } from '@angular/core';
import { EspecieService } from '../especie.service';
import { ActivatedRoute } from '@angular/router';
import { EspecieDetail } from '../especie-detail';

@Component({
  selector: 'app-especie-detail',
  templateUrl: './especie-detail.component.html',
  styleUrls: ['./especie-detail.component.css']
})
export class EspecieDetailComponent implements OnInit {

 
  /**
  * El id del author que viene en el path get .../especies/especie_id
  */
  especieId: number;

  /**
    * La especie.
    */
  @Input() especieDetail: EspecieDetail;


  constructor(
    private especieService: EspecieService,
    private route: ActivatedRoute
  ) { }

  /**
   * Obtiene el detalle de una especie dado su id
   */
  getEspecieDetail(): void {
    this.especieService.getEspecieDetail(this.especieId)
      .subscribe(especieDetail => {
        this.especieDetail = especieDetail;
      });
      console.log("sdsds");
      console.log(this.especieDetail);
  }

  ngOnInit() {
    /**
     * Captura el parametro 'id' enviado como parametro por GET y obtiene el detalle de la especie al iniciar el componenteg
     */
    this.especieId = +this.route.snapshot.paramMap.get('id');
    if (this.especieId) {
      this.especieDetail = new EspecieDetail();
      this.getEspecieDetail();
    }
    console.log(this.especieDetail.nombre);
  }
}
