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

  /**
   * Obtiene todas las especies registradas en el sistema
   */
  getEspecies(): Observable<EspecieDetail[]> {
    //    return this.http.get<EspecieDetail[]>(API_URL + especies);
    return this.http.get<EspecieDetail[]>('../../assets/especies.json');
  }

  /**
   * Obtiene el detalle de una especie dado su id por GET
   * @param especieId
   */
  getEspecieDetail(especieId): Observable<EspecieDetail> {
    return this.http.get<EspecieDetail>(API_URL + especies + '/' + especieId);
  }

  /**
   * Crea una especie en el sistema(POST Request)
   * @param especie
   */
  createEspecie(especie): Observable<Especie> {
    return this.http.post<Especie>(API_URL + especies, especie);
  }
}
