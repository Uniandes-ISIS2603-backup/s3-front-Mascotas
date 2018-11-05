import { Component, OnInit } from '@angular/core';
import {EspecieService} from '../especie.service';
import {ActivatedRoute} from '@angular/router';
import {EspecieDetail} from '../especie-detail';

@Component({
  selector: 'app-especie-detail',
  templateUrl: './especie-detail.component.html',
  styleUrls: ['./especie-detail.component.css']
})
export class EspecieDetailComponent implements OnInit {

  especieId: number;
  especieDetail: EspecieDetail;

  constructor(
    private especieService: EspecieService,
    private route: ActivatedRoute
  ) { }

  getEspecieDetail(): void {
    this.especieService.getEspecieDetail(this.especieId)
      .subscribe(especieDetail => {
        this.especieDetail = especieDetail;
      });
  }

  ngOnInit() {
    this.especieId = +this.route.snapshot.paramMap.get('id');
    this.especieDetail = new EspecieDetail();
    this.getEspecieDetail();
  }
}