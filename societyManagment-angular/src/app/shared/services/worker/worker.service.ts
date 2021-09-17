import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WorkerService {

  constructor(private http:HttpClient) { }

  saveProfile(data:any):Observable<any>{
    return this.http.post("http://localhost:3000/api/workerProfile",data)
  }
  verifyProfile(data:any):Observable<any>{
    return this.http.post("http://localhost:3000/api/verifyProfile",data)
  }
}
