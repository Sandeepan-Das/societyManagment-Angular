import { HouseServiceService } from '../../shared/services/houseDetails/house-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { format } from './format';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PackageNotifyService } from '../../shared/services/notification/package-notify.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-send-message',
  templateUrl: './send-message.component.html',
  styleUrls: ['./send-message.component.css']
})
export class SendMessageComponent implements OnInit {
  public detailsForm!: FormGroup
  public deliveryForm!: FormGroup

  form = new format(this.fb)
  roomNo!: String
  type!: String
  uuid!: String
  message!: String;

  constructor(private fb: FormBuilder, private activatedRoute: ActivatedRoute, private houseService: HouseServiceService, private packageService: PackageNotifyService, private router: Router) { }

  ngOnInit(): void {
    this.detailsForm = this.form.formStructure()
    this.activatedRoute.queryParams.subscribe((data) => {
      this.roomNo = data["roomNo"]
      this.type = data["type"]

      if (this.roomNo != undefined && this.type != undefined) this.fetchData()
    })
    this.deliveryForm = this.form.deliveryFormStructure()
  }
  selectedMsg(event: any) {
    this.message = event.target.value
  }
  fetchData() {

    this.houseService.fetchOwnerByRoom(this.roomNo, this.type).subscribe((data) => {
      this.form.setData(data)
      this.detailsForm = this.form.formStructure()
      this.uuid = this.detailsForm.value.uuid
      // this.houseService.residentData.next(data)
    })
  }
  sendNotification() {

    // this.socket._socketConnect$.subscribe((socketConnection)=>{
    //   this.socket.sendNotification(socketConnection,this.room,this.message)
    
    // })

    const data = {
      uuid: this.uuid,
      message: this.message,
      name: this.deliveryForm.value.name,
      phoneNumber: this.deliveryForm.value.phoneNumber,
      residentName: this.detailsForm.value.name,
      roomNo: this.detailsForm.value.roomNo,
      registeredNumber: this.detailsForm.value.registeredNumber,

    }
    
    this.packageService.sendNotification(data).subscribe((data) => {
      console.log("A")
        this.router.navigate(['/security/securityNotification'])
    })
  }

}
