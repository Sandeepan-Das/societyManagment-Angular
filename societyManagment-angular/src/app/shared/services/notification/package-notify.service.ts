import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { io, Socket } from 'socket.io-client';



@Injectable({
  providedIn: 'root'
})
export class PackageNotifyService {
  // socket!: Socket;

  // private _socketConnection = new BehaviorSubject<any>([])
  // _socketConnect$ = this._socketConnection.asObservable()

  // private message = new BehaviorSubject<any>([])
  // message$ = this.message.asObservable()

  // private valid = new BehaviorSubject<any>([])
  // valid$ = this.valid.asObservable()

  // private uuid = new BehaviorSubject<any>([])
  // uuid$ = this.uuid.asObservable()

  constructor(private http:HttpClient) {


  }

  // connectSocket() {
  //   this.socket = io("http://localhost:3000", { transports: ['websocket', 'polling', 'flashsocket'] })

  //   this._socketConnection.next(this.socket)
  // }

  // joinRoom(room: String) {

  //   this.socket.emit("join-room", room, (msg: any) => {
  //     this.uuid.next(room)
  //     console.log(msg)
  //   })
  // }
  // sendNotification(socket: any, room: String, msg: String) {

  //   socket.emit("send-notification", room, msg)

  // }
  // receiveNotification(socket: any, room: any) {

  //   socket.emit("check-notification", room)

  //   socket.on("receive-notification", (data: any) => {
  //     console.log(data)
  //     // this.message.next(data)
  //   })
  // }
  // receiveValidity() {

  //   this.socket.on("receive-validity", (data: any) => {
  //     console.log(data)
  //     this.valid.next(data)
  //   })
  // }
  // sendValidty(socket: any, room: String, valid: String) {
  //   socket.emit("send-validity", room, valid)
  // }
  sendNotification(data:any):Observable<any>{
    return this.http.post("http://localhost:3000/api/packageRequest",data) 
  }
  checkNotification():Observable<any>{
    return this.http.get("http://localhost:3000/api/checkRequest") 
  }
  sendValidity(data:any):Observable<any>{
    return this.http.post("http://localhost:3000/api/validRequest",data)
  }
  pastListSecurity(data:any):Observable<any>{
    return this.http.post("http://localhost:3000/api/pastListUpdate",data)
  }
  checkNotificationSecurity():Observable<any>{
    return this.http.get("http://localhost:3000/api/checkRequestSecurity") 
  }
}
