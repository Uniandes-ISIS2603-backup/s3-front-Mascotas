import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {RazaServiceService} from '../raza-service.service';
import {Raza} from '../raza';

@Component({
  selector: 'app-raza-detail',
  templateUrl: './raza-detail.component.html',
  styleUrls: ['./raza-detail.component.css']
})
export class RazaDetailComponent implements OnInit {

  constructor( ) { }

  ngOnInit() {
  }

}
