import { SigInResponse } from './../types/sign-in.type';
import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { SingInRequest } from '../types/sign-in.type';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private httpClient = inject(HttpClient)

  public signin({ password, phone }: SingInRequest): Observable<SigInResponse> {
    return this.httpClient.get<SigInResponse>('auth')
  }
}
