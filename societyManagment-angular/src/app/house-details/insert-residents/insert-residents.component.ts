import { HouseServiceService } from './../house-service.service';
import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { form } from "./format"
@Component({
  selector: 'app-insert-residents',
  templateUrl: './insert-residents.component.html',
  styleUrls: ['./insert-residents.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class InsertResidentsComponent implements OnInit {
  residentsForm!: FormGroup;
  form = new form(this.fb);
  residents!:FormArray;
  vehicleList!:FormArray;
  success:boolean = false;
  
  public parkingDetails:boolean = false

  constructor(private fb: FormBuilder,private service:HouseServiceService) { }

  ngOnInit(): void {
    this.initializeForm()
  }
  delMember(i:any){
    this.residents.removeAt(i);
  }
  delVehicle(i:any){
    this.vehicleList.removeAt(i);
  }
  initializeForm() {
    this.residentsForm = this.form.formStructure()
    this.residents = this.residentsForm.get("residents") as FormArray;
    this.vehicleList = this.residentsForm.get("vehicleList") as FormArray;
  }

  submitForm() {
    
    this.service.insertResidents(this.residentsForm.value).subscribe(()=>{
      this.success = true;
    })
  
  }

  addMoreMember() {
    
    this.residents.push(this.form.memberStructure())
  }
  addMoreVehicle(){
    this.vehicleList.push(this.form.vehicleStructure())
  }
  selectedParking(event:any){
    if(event.target.value=="yes"){
      this.parkingDetails = true
    }
  }

  close(){
    this.success = false
  }
  
}
