import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
const AUTH_API = "http://medpharm001-001-site1.htempurl.com/";
const httpOptions = {
  headers:new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token:any
  verifyKey() {
    throw new Error('Method not implemented.');
  }
  remove() {
    throw new Error('Method not implemented.');
  }

  constructor(private http:HttpClient) { }
  login(userId:string, password:string):Observable<any>{
    return this.http.post(AUTH_API + 'api/Auth/UserLogin',{
      userId,
      password
    }, httpOptions);
  }

//   public isAuthenticated(): boolean {
//     this.token = localStorage.getItem('token');
//     // Check whether the token is expired and return
//     // true or false
//     // this.token = JSON.parse(localStorage.getItem('token') || '{}');

//     return !this.jwtHelper.isTokenExpired(this.token);
  
// }
}


// how to get token in angular?