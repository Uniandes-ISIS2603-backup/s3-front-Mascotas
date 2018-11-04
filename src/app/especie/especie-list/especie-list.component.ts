import { Component, OnInit } from '@angular/core';
import {EspecieService} from '../especie.service';
import {Especie} from '../especie';

@Component({
  selector: 'app-especie-list',
  templateUrl: './especie-list.component.html',
  styleUrls: ['./especie-list.component.css']
})
export class EspecieListComponent implements OnInit {

  constructor(private especieService: EspecieService) { }

  especies: Especie[];

  getEspecies(): void{
    this.especieService.getEspecies().subscribe(
      lista => this.especies = lista
    );
  }

  ngOnInit() {
    this.getEspecies();
  }

}
