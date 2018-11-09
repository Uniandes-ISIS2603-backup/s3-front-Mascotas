import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Cliente} from './cliente';
import {ClienteDetail} from './cliente-detail';

const API_URL = environment.apiURL;
const clientes = '/clientes';

@Injectable()
export class ClienteService {

  constructor(private http: HttpClient) { }

  /**
   * Obtiene todos los clientes del endpoint
   */
  getClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(API_URL + clientes);
  }

  /**
   * Obtiene la informacion de un un cliente dado su id
   * @param clienteId
   */
  getClienteDetail(clienteId): Observable<ClienteDetail> {
    return this.http.get<ClienteDetail>(API_URL + clientes + '/' + clienteId);
  }

  /**
   * Crea un cliente en el endpoint definido
   * @param cliente
   */
  createCliente(cliente): Observable<Cliente> {
    return this.http.post<Cliente>(API_URL + clientes, cliente);
  }
}
