import { WorkerService } from './../shared/services/worker/worker.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-worker-profile',
  templateUrl: './worker-profile.component.html',
  styleUrls: ['./worker-profile.component.css']
})
export class WorkerProfileComponent implements OnInit {
  workerInfo:any={
    name:""
  };
  index:any = 0;
  constructor(private service:WorkerService) { }

  ngOnInit(): void {
    this.service.fetchWorkerList().subscribe((data)=>{
      console.log(data)
      this.workerInfo = data.result[0].house_details 
      console.log(data.result[this.index].house_details)
    })
  }
  saveData(){
    this.index++;
    this.ngOnInit()
  }

}
