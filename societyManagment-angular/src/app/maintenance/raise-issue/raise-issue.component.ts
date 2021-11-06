import { Component, OnInit } from '@angular/core';
import { MaintenanceService } from 'src/app/shared/services/maintenance/maintenance.service';

@Component({
  selector: 'app-raise-issue',
  templateUrl: './raise-issue.component.html',
  styleUrls: ['./raise-issue.component.css']
})
export class RaiseIssueComponent implements OnInit {
  desc:any="";
  
  type:any;
  constructor(private service:MaintenanceService) { }
  ngOnInit(): void {
  }
  save(){
   const data= {
      desc:this.desc,type:this.type
    }
    console.log(data)
    this.service.raiseIssue(data).subscribe(()=>{

    })
  }
  selectedMsg(event:any){
    this.type = event.target.value
  }

}
