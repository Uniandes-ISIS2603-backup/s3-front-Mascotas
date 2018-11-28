import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {RazaService} from '../raza-service';
import {Raza} from '../raza';
import { RazaDetail } from '../raza-detail';

@Component({
  selector: 'app-raza-detail',
  templateUrl: './raza-detail.component.html',
  styleUrls: ['./raza-detail.component.css']
})
export class RazaDetailComponent implements OnInit {

  razaId : number;
  razaDetail : RazaDetail;

  constructor(
    private servicio: RazaService,
    private route: ActivatedRoute
  ) { }

  getRazaDetail(): void {
    this.servicio.getRazaDetail(this.razaId)
      .subscribe(razaDetail => {
        this.razaDetail = razaDetail;
      });
  }

  ngOnInit() {
    this.razaId = +this.route.snapshot.paramMap.get('id');
    this.razaDetail = new RazaDetail();
    this.getRazaDetail();
  }

}
