import { ResponseLogin } from './../models/ResponseLogin';
import { RequestLogin } from './../models/ResquestLogin';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) {}

  public doLogin(requestLogin:RequestLogin): Observable<ResponseLogin>{
    return this.httpClient.post<ResponseLogin>('http://localhost:8080/api/login',requestLogin);
  }
  
}
