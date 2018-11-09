import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {Compra} from './compra';
import {CompraDetail} from './compra-detail';

const API_URL = environment.apiURL;
const compras = '/compras';

@Injectable()
export class CompraService {

  constructor(private http: HttpClient) { }

  /**
   * Consulta todas las compras que estas en el sistema (API)
   */
  getCompras(): Observable<Compra[]> {
    return this.http.get<Compra[]>(API_URL + compras);
  }

  /**
   * Obtienen el detalle de una compra dado su id (API)
   * @param compraId
   */
  getCompraDetail(compraId): Observable<CompraDetail> {
    return this.http.get<CompraDetail>(API_URL + compras + '/' + compraId);
  }

  /**
   * Crea una compra en el sistema por medio del API
   * @param compra
   */
  createCompra(compra): Observable<Compra> {
    return this.http.post<Compra>(API_URL + compras, compra);
  }
}
