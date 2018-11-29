import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'
import { Raza } from './raza';
import { RazaDetail } from './raza-detail';

const API_URL = environment.apiURL;
const razas = '/razas';

@Injectable()
export class RazaService {

  /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
  constructor(private http: HttpClient) { }

  /**
 * Retorna todas las razas creadas en el sistema
 * @returns The list of razas in real time
 */
  getRazas(): Observable<RazaDetail[]> {
    //return this.http.get<RazaDetail[]>(API_URL + razas);
    return this.http.get<RazaDetail[]>('../../assets/razas.json');
  }

  /**
   * Retorna el detalle de una raza, dado su id
   * @param razaId
   */
  getRazaDetail(razaId): Observable<RazaDetail> {
    //return this.http.get<RazaDetail>(API_URL + razas + '/' + razaId);
    return this.http.get<RazaDetail>('../../assets/razas' + razaId + '.json');
  }

  /**
   * Crea una raza en el sistema(POST Request)
   * @param raza
   */
  createRaza(raza): Observable<Raza> {
    return this.http.post<Raza>(API_URL + razas, raza);
  }


  /**
  * la mascota que se desea encontrar
   */
  getRaza(razaId): Observable<Raza> {
    //return this.http.get<Mascota>(API_URL + razas + '/' + razaId);
    return this.http.get<Raza>('../../assets/razas1.json');
  }



  /**
   * Elimina una mascota
   */
  deleteRaza(razaId): Observable<boolean> {
    return this.http.delete<boolean>(API_URL + razas + '/' + razaId);
  }
  

  /**
   * Edita una raza
   */
  editarRaza(raza) : Observable<Raza> {
    return this.http.put<Raza> (API_URL + razas +'/' + raza.id , raza);
  }
}
