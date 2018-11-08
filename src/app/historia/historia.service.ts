import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';

import {Historia} from './historia';


const API_URL = environment.apiURL;
const historias = '/historias';

@Injectable()
export class HistoriaService {



  constructor(private http: HttpClient) {}

  getHistorias(): Observable<Historia[]> {
    //return this.http.get<Historia[]>(   "../../assets/historia.json" );
    return this.http.get<Historia[]>( API_URL + historias );

  }


}
