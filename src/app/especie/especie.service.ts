import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';

import { Especie} from './especie';
import {EspecieDetail} from './especie-detail';

const API_URL = environment.apiURL;
const especies = '/especies';

@Injectable()
export class EspecieService {

  constructor(private http: HttpClient) {}

  getEspecies(): Observable<Especie[]> {
    return this.http.get<Especie[]>(API_URL + especies);
  }

  getEspecieDetail(especieId): Observable<EspecieDetail> {
    return this.http.get<EspecieDetail>(API_URL + especies + '/' + especieId);
  }
}
