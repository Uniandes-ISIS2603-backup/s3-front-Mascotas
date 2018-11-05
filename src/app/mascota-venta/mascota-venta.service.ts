import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment} from '../../environments/environment'
import { MascotaVenta} from'./mascotaVenta';



const API_URL = environment.apiURL;
const mascotas = '/mascotaVenta';

@Injectable()
export class MascotaVentaService {

 
   /**
     * Constructor of the service
     * @param http The HttpClient - This is necessary in order to perform requests
     */
    constructor(private http: HttpClient) {}

      /**
     * Returns the Observable object containing the list of authors retrieved from the API
     * @returns The list of authors in real time
     */
    getMascotasVenta(): Observable<MascotaVenta[]> {
      return this.http.get<MascotaVenta[]>( "../../assets/mascotaVenta.json" );
  }
}
