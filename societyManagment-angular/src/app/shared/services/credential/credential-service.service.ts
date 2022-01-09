import { environment } from './../../../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class CredentialServiceService {


  constructor(private http: HttpClient) { }
  checkEnv():Observable<any>{
    return this.http.get(`${environment.baseUrl}/`)
  }
  testToken(): Observable<any> {
    return this.http.get("http://localhost:3000/api/test")
  }
  signUp(data: any): Observable<any> {
    console.log(data)
    return this.http.post("http://localhost:3000/api/signUp", data).pipe(
      tap(tokens => {
        this.saveToken(tokens)
      })
    )
  }
  logOut(data: any): Observable<any> {
    console.log(data)
    return this.http.post("http://localhost:3000/api/logout", data)
  }
  login(data: any): Observable<any> {
    return this.http.post("http://localhost:3000/api/login", data).pipe(
      tap(tokens => {
        this.saveToken(tokens)
      })
    )
  }
  refreshToken(): Observable<any> {
    return this.http.post("http://localhost:3000/api/newToken", { token: localStorage.getItem("refreshToken") }).pipe(
      tap(token => {
        this.saveRefresh(token)

      })
    )
  }
  fetchUUID(): Observable<any> {
    return this.http.get("http://localhost:3000/api/uuid")
  }
  saveRefresh(tokens: any) {
    localStorage.removeItem("accessToken")
    localStorage.setItem("accessToken", tokens.accessToken)
  }
  saveToken(tokens: any) {
    localStorage.setItem("accessToken", tokens.accessToken)
    localStorage.setItem("refreshToken", tokens.refreshToken)
  }
}
