import { HouseServiceService } from '../../shared/services/houseDetails/house-service.service';
import { PackageNotifyService } from '../../shared/services/notification/package-notify.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-security-notification',
  templateUrl: './security-notification.component.html',
  styleUrls: ['./security-notification.component.css']
})
export class SecurityNotificationComponent implements OnInit {
  result: any[] = []
  validity: String = "Request Pending"
  validClass: String = "badge bg-secondary"
  details!: any
  constructor(private service: PackageNotifyService, private houseService: HouseServiceService, private router: Router) { }

  ngOnInit(): void {
    // this.houseService.residentData$.subscribe((details) => {
    //   this.details = details
    //   this.searchResult.push(this.details)

    // })
    this.service.checkNotificationSecurity().subscribe((data) => {
      this.result = data.data;
      console.log(data)
    })
    // this.service.valid$.subscribe((data) => {
    //   console.log(data)
    //   if (data.message == "NO") {
    //     this.validity = "REJECTED"
    //     this.validClass = "badge bg-danger"
    //   }
    //   else if (data.message == "YES") {
    //     this.validity = "ACCEPTED"
    //     this.validClass = "badge bg-success"
    //   }
    // })
    this.refresh()
  }
  refresh() {
    setTimeout(() => {
      this.ngOnInit()
    }, 60000)
  }
  removePending(item:any) {
    const data = item;
    console.log(data)
    this.service.pastListSecurity(data).subscribe(() => {
      this.ngOnInit()
    })
  }
}
