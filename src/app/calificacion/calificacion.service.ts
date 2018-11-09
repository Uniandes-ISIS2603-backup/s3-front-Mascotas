import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment} from '../../environments/environment'
import { Calificacion} from './calificacion';

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
   * Consulta el endpoint que obtiene todas las calificaciones
   */
  getCalificaciones(): Observable<Calificacion[]> {
        return this.http.get<Calificacion[]>(API_URL + calificaciones);
    }

  /**
   * Crea una calificacion en el endpoint
   * @param calificacion
   */
  createCalificacion(calificacion): Observable<Calificacion> {
      return this.http.post<Calificacion>(API_URL + calificaciones, calificacion);
    }
}
