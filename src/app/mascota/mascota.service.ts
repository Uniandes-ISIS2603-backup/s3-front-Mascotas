import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment} from '../../environments/environment'
import { Mascota} from'./mascota';
import {EspecieDetail} from '../especie/especie-detail';
import {MascotaDetail} from './mascota-detail';
import {Especie} from '../especie/especie';


const API_URL = environment.apiURL;
const mascotas = '/mascotas';

@Injectable()
export class MascotaService {

   /**
     * Constructor of the service
     * @param http The HttpClient - This is necessary in order to perform requests
     */
    constructor(private http: HttpClient) {}

      /**
     * Returns the Observable object containing the list of authors retrieved from the API
     * @returns The list of authors in real time
     */
    getMascotas(): Observable<Mascota[]> {
      //return this.http.get<Mascota[]>( "../../assets/mascotas.json" );
        return this.http.get<Mascota[]>(API_URL + mascotas);
  ``}

    getMascotaDetail(mascotaId): Observable<MascotaDetail> {
        return this.http.get<MascotaDetail>(API_URL + mascotas + '/' + mascotaId);
    }

    createMascota(mascota): Observable<Mascota> {
        return this.http.post<Mascota>(API_URL + mascotas, mascota);
    }
}
