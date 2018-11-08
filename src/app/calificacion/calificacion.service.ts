import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment} from '../../environments/environment'
import { Calificacion} from './calificacion';
import {Cliente} from '../cliente/cliente';
import {Especie} from '../especie/especie';



const API_URL = environment.apiURL;
const calificaciones = '/calificaciones';
@Injectable()
export class CalificacionService {
   /**
     * Constructor of the service
     * @param http The HttpClient - This is necessary in order to perform requests
     */
    constructor(private http: HttpClient) {}

      /**
     * Returns the Observable object containing the list of authors retrieved from the API
     * @returns The list of authors in real time
     */
    getCalificaciones(): Observable<Calificacion[]> {
        return this.http.get<Calificacion[]>(API_URL + calificaciones);
    }

    createCalificacion(calificacion): Observable<Calificacion> {
      return this.http.post<Calificacion>(API_URL + calificacion, calificacion);
    }
}
