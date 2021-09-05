import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HouseServiceService {
  residentData = new BehaviorSubject<any>([])
  residentData$ = this.residentData.asObservable()

  constructor(private http:HttpClient) { }
  fetchHouseDetails(id:any):Observable<any>{
    return this.http.get(`http://localhost:3000/api/fetchHouseInfo?id=${id}`)
  }
  insertResidents(body:any):Observable<any>{
    return this.http.post("http://localhost:3000/api/ownerDetails",body)
  }
  updateOwner(body:any):Observable<any>{
    return this.http.put("http://localhost:3000/api/update/owner",body)
  }
  delOnwer(id:any):Observable<any>{
    return this.http.delete(`http://localhost:3000/api/del/owner/${id}`)
  }
  updateTenant(body:any):Observable<any>{
    return this.http.put("http://localhost:3000/api/update/tenant",body)
  }
  delTenant(id:any):Observable<any>{
    return this.http.delete(`http://localhost:3000/api/del/tenant/${id}`)
  }
  updateHouse(body:any):Observable<any>{
    return this.http.put("http://localhost:3000/api/update/house",body)
  }

  searchQueryResidents(data:any):Observable<any>{
    return this.http.get(`http://localhost:3000/api/fetchSearchQuery/${data}`)
  }

  insertHouse(data:any):Observable<any>{
    return this.http.post("http://localhost:3000/api/houseInfo",data)
  }

  fetchOwnerByRoom(roomNo:any,type:any):Observable<any>{
    return this.http.get(`http://localhost:3000/api/fetchResidentInfo?roomNo=${roomNo}&type=${type}`)
  }

  
}
