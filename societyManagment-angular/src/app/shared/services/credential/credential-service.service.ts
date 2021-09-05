import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class CredentialServiceService {


  constructor(private http: HttpClient) { }

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
  fetchUUID():Observable<any>{
    return this.http.get("http://localhost:3000/api/uuid")
  }
  saveToken(tokens: any) {
    localStorage.setItem("accessToken", tokens.accessToken)
    localStorage.setItem("refreshToken", tokens.refreshToken)
  }
}
