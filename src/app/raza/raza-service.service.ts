import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment} from '../../environments/environment'
import { Raza} from'./raza';



const API_URL = environment.apiURL;
const mascotas = '/razas';

@Injectable()
export class RazaServiceService {

  
   /**
     * Constructor of the service
     * @param http The HttpClient - This is necessary in order to perform requests
     */
    constructor(private http: HttpClient) {}

      /**
     * Returns the Observable object containing the list of authors retrieved from the API
     * @returns The list of authors in real time
     */
    getMascotasVenta(): Observable<Raza[]> {
      return this.http.get<Raza[]>( "../../assets/raza.json" );
  }
}
 