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
     * Retorna todas las mascotas disponibles para la venta
     * @returns Lista de mascotas para la venta
     */
    getMascotasVenta(): Observable<MascotaVenta[]> {
      return this.http.get<MascotaVenta[]>( API_URL + mascotas );

  }
}
