import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Account } from 'src/app/shared/core/services/global.service';
import { HttpHeaderService } from 'src/app/shared/core/services/http-header.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpHeaderService, private router: Router) { }

  login(form: any) {
    return this.http.Post(Account.postLogin, form);
  }

  isUserLogin(){
    if(sessionStorage.getItem('userName')) {
      return true;
    } else {
      return false;
    }
  }

}
