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

  getCompras(): Observable<Compra[]> {
    return this.http.get<Compra[]>(API_URL + compras);
  }

  getCompraDetail(compraId): Observable<CompraDetail> {
    return this.http.get<CompraDetail>(API_URL + compras + '/' + compraId);
  }

  createCompra(compra): Observable<Compra> {
    return this.http.post<Compra>(API_URL + compras, compra);
  }
}
