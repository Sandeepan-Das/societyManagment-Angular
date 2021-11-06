import { MaintenanceService } from 'src/app/shared/services/maintenance/maintenance.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-available-issue',
  templateUrl: './available-issue.component.html',
  styleUrls: ['./available-issue.component.css']
})
export class AvailableIssueComponent implements OnInit {
  list:any = [];
  constructor(private service:MaintenanceService) { }

  ngOnInit(): void {
    this.service.fetchIssuesByAdmin().subscribe((data)=>{
      this.list = data.data
    })
  }
  status(response:string,id:any){

  }

}
