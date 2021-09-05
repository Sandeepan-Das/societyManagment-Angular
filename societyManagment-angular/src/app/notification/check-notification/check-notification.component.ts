import { Router } from '@angular/router';
import { PackageNotifyService } from './../../shared/services/notification/package-notify.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check-notification',
  templateUrl: './check-notification.component.html',
  styleUrls: ['./check-notification.component.css']
})
export class CheckNotificationComponent implements OnInit {
  socketConnection!: any
  list: any[] = [];
  room!: String
  constructor(private service: PackageNotifyService,private router:Router) { }

  ngOnInit(): void {
    // this.service.message$.subscribe((data) => {
    //   if (data.message != null)
    //     this.list.push(data.message)
    //   this.room = data.room
    // })
    // this.service.uuid$.subscribe((uuid)=>{
    //   this.service._socketConnect$.subscribe((socketConnection)=>{
    //     this.service.receiveNotification(socketConnection,uuid)
    //   })
    // })
    this.service.checkNotification().subscribe((data) => {
      this.list = data.data
      
    })
  }

  status(valid: String,id:String) {
    const data={
      id:id,
      valid:valid
    }
    
    this.service.sendValidity(data).subscribe(()=>{
        this.ngOnInit()
    })

    // this.service._socketConnect$.subscribe((socketConnection) => {
    //   this.service.sendValidty(socketConnection, this.room, valid)
    // })
  }

}
