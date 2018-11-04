import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import{MascotaAdopcion} from'./mascotaAdopcion';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment';

const API_URL = environment.apiURL;
const mascotas = '/mascotaAdopcion';

@Injectable()
export class DataMasAdopcionService {

   /**
     * Constructor of the service
     * @param http The HttpClient - This is necessary in order to perform requests
     */
    constructor(private http: HttpClient) {}

    /**
     * Returns the Observable object containing the list of authors retrieved from the API
     * @returns The list of authors in real time
     */
    getMascotas(): Observable<MascotaAdopcion[]> {
        return this.http.get<MascotaAdopcion[]>( API_URL + mascotas );
    }
}
