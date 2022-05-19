import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Banda } from './banda';

@Injectable({
  providedIn: 'root'
})
export class BandaService {

  private url = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getBandas(): Observable<Banda[]> {
    return this.http.get<Banda[]>(this.url);
  }


}
