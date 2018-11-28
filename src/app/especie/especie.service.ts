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
   // return this.http.get<EspecieDetail>(API_URL + especies + '/' + especieId);
   return this.http.get<EspecieDetail>('../../assets/especies' +especieId + '.json');

  }

  /**
   * Crea una especie en el sistema(POST Request)
   * @param especie
   */
  createEspecie(especie): Observable<Especie> {
    return this.http.post<Especie>(API_URL + especies, especie);
  }
  
    /**
    * Updates an especie
    * @param author The author's information updated
    * @returns The confirmation that the author was updated
    */
   updateESpecie(especie): Observable<EspecieDetail> {
    return this.http.put<EspecieDetail>(API_URL + especies + '/' + especie.id, especie);
}


/**
 * Elimina una especie
 */
deleteEspecie(especieId) : Observable<boolean>{
  return this.http.delete<boolean>(API_URL + especies + '/' + especieId);
}


}
