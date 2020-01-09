import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConstantsAplicacion } from '../utils/constants';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private http: HttpClient) { }

  getToken() {
    return this.http.get(atob(ConstantsAplicacion.SOURCE));
  }
}
