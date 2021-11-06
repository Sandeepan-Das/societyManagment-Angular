import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MaintenanceService {

  constructor(private http:HttpClient) { }
  raiseIssue(data:any):Observable<any>{
    return this.http.post("http://localhost:3000/api/raiseIssue",data)
  }
  fetchIssuesByAdmin():Observable<any>{
    return this.http.get("http://localhost:3000/api/fetchIssueAdmin")
  }
}
