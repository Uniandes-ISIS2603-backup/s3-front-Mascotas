import { Component, OnInit } from '@angular/core';
import {MascotaDetail} from '../mascota-detail';
import {ActivatedRoute} from '@angular/router';
import {MascotaService} from '../mascota.service';


@Component({
  selector: 'app-mascota-detail',
  templateUrl: './mascota-detail.component.html',
  styleUrls: ['./mascota-detail.component.css']
})
export class MascotaDetailComponent implements OnInit {

  mascotaId: number;
  mascotaDetail: MascotaDetail;

  constructor(
    private mascotaService: MascotaService,
    private route: ActivatedRoute
  ) { }

  getMascotaDetail(): void {
    this.mascotaService.getMascotaDetail(this.mascotaId)
      .subscribe(mascotaDetail => {
        this.mascotaDetail = mascotaDetail;
      });
  }

  ngOnInit() {
    this.mascotaId = +this.route.snapshot.paramMap.get('id');
    this.mascotaDetail = new MascotaDetail();
    this.getMascotaDetail();
  }

}
