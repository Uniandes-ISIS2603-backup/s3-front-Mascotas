import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {RazaServiceService} from '../raza-service.service';
import {razaDetail} from '../razaDetail';


@Component({
  selector: 'app-raza-detail',
  templateUrl: './raza-detail.component.html',
  styleUrls: ['./raza-detail.component.css']
})
export class RazaDetailComponent implements OnInit {

  razaId : number;
  razaDetail : razaDetail;

  constructor(
    private servicio: RazaServiceService,
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
    this.razaDetail = new razaDetail();
    this.getRazaDetail();
  }

}
