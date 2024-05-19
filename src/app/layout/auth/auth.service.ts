import { baseUrl } from './../../shared/core/services/global.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Account } from 'src/app/shared/core/services/global.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(form: any): Observable<any> {
    return this.http.post<any>(baseUrl+Account.postLogin, form);
  }

  isAuthenticated(): boolean{
    return !!sessionStorage.getItem('userName');
  }

}
