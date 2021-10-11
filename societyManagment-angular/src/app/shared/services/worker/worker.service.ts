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
  saveExpenditure(data:any):Observable<any>{
    return this.http.post("http://localhost:3000/api/saveExpenditure",data)
  }
  shareExpenditure(data:any):Observable<any>{
    return this.http.post("http://localhost:3000/api/sendExpenditure",data)
  }
  workerPayment():Observable<any>{
    
    return this.http.get("http://localhost:3000/api/workerPayment")
  }
  fetchCurrentBill():Observable<any>{
    
    return this.http.get("http://localhost:3000/api/currentBill")
  }
  fetchMonthlyBill():Observable<any>{
    
    return this.http.get("http://localhost:3000/api/monthlyBill")
  }
  
  
  fetchWorkerList():Observable<any>{
    
    return this.http.get("http://localhost:3000/api/workerList")
  }

  
  
}
