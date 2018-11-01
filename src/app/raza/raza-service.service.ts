import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Raza } from './raza';
import { RazaDetail } from './razaDetail';

const API_URL = environment.apiURL;
const razas= '/razas'

@Injectable()
export class RazaServiceService {

  /**
   * 
   */
  constructor(private http: HttpClient) { }

  /**
   * 
   */
  getRazas(): Observable<Raza[]>{
    return this.http.get<Raza[]>('../../../assets/raza.json');
  }


  /**
   * 
   */
  getRazaDetail(razaId): Observable<RazaDetail>{
    return this.http.get<RazaDetail>( API_URL + razas + '/' + razaId);
  }

}


