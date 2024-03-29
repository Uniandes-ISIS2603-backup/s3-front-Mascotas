import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'
import { Mascota } from './mascota';


const API_URL = environment.apiURL;
const mascotas = '/mascotas';
const temporal = '../../assets/mascotas.json';

@Injectable()
export class MascotaService {

  /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
  constructor(private http: HttpClient) { }

  /**
 * Retorna todas las mascotas registradas en el sistema
 * @returns The list of authors in real time
 */
  getMascotas(): Observable<Mascota[]> {
    return this.http.get<Mascota[]>(API_URL + mascotas);
    //return this.http.get<Mascota[]>(temporal);
  }


  /**
   * Crea una mascota en el sistema
   * @param mascota
   */
  createMascota(mascota): Observable<Mascota> {
    return this.http.post<Mascota>(API_URL + mascotas, mascota);
  }


  /**
  * la mascota que se desea encontrar
 */
  getMascota(mascotaId): Observable<Mascota> {
    return this.http.get<Mascota>(API_URL + mascotas + '/' + mascotaId);
    //return this.http.get<Mascota>('../../assets/mascotas1.json');

  }

  /**
   * Edita la mascota que se desea.
   */
  editarMascota(mascota): Observable<Mascota> {
    return this.http.put<Mascota>(API_URL + mascotas + '/' + mascota.id, mascota);
  }

  /**
   * Elimina una mascota
   */
  deleteMascota(mascotaId): Observable<boolean> {
    return this.http.delete<boolean>(API_URL + mascotas + '/' + mascotaId);
  }

}
