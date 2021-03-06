import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  // 給app.module.ts 使用，需在app.module的provider註冊
  providedIn: 'root'
})
export class AuthService {

  baseUrl = 'http://localhost:53599/api/auth/';
  jwtHelper = new JwtHelperService();
  decodedToken: any ;

  constructor(private http: HttpClient) { }

  login(model: any) {
    return this.http.post(this.baseUrl + 'login', model).pipe(
        map((response: any) => {
          const userToken = response;
          if (userToken) {
            localStorage.setItem('token', userToken.token);
            this.decodedToken = this.jwtHelper.decodeToken(userToken.token);
            console.log(this.decodedToken);
          }
        })
      );
    }

  register(model: any) {
    return this.http.post(this.baseUrl + 'register', model);
  }

  loggedIn() {
    const token = localStorage.getItem('token');
    return !this.jwtHelper.isTokenExpired(token);
  }

}
