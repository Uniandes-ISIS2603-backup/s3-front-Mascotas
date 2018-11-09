import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';

import {Historia} from './historia';
import {Calificacion} from '../calificacion/calificacion';


const API_URL = environment.apiURL;
const historias = '/historias';

@Injectable()
export class HistoriaService {

  /**
   * Constructor de historia service
   * @param http
   */
  constructor(private http: HttpClient) {}

  /**
   * Obtiene todas las historias creadas en el sistema
   */
  getHistorias(): Observable<Historia[]> {
    return this.http.get<Historia[]>( API_URL + historias );
  }


  /**
   * Crea una historia en el endpoint
   * @param historia
   */
  createHistoria(historia): Observable<Historia> {
    return this.http.post<Historia>(API_URL + historias, historia);
  }
}
