import { format } from './format';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { HouseServiceService } from './../house-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fetch-resident',
  templateUrl: './fetch-resident.component.html',
  styleUrls: ['./fetch-resident.component.css']
})
export class FetchResidentComponent implements OnInit {
  public key!: String;
  public detailsForm!: FormGroup
  public searched: boolean = false
  public displayOwner: boolean = false
  public displayTenant: boolean = false

  editInfo: boolean = true
  editOwner: boolean = true
  editTenant: boolean = true
  ownerResidents!: FormArray;
  tenantResidents!: FormArray;
  ownerVehicleList!: FormArray;
  tenantVehicleList!: FormArray;
  form = new format(this.fb)
  admin: boolean = false
  constructor(private service: HouseServiceService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.checkAdmin()
  }
  checkAdmin() {
    this.admin = true
  }
  fetchData() {
    this.displayOwner = this.displayTenant = false;
    this.service.fetchHouseDetails(this.key).subscribe((data) => {
      this.form.setData(data.data)
      if (data.data.owner != undefined) this.displayOwner = true
      if (data.data.tenant != undefined) this.displayTenant = true
      this.initializeForm(data.data)


    })
  }
  delOwner(){
    this.service.delOnwer(this.detailsForm.get("owner")?.value.roomNo).subscribe(()=>{
      
    })
  }
  delTenant(){
    this.service.delTenant(this.detailsForm.get("tenant")?.value.roomNo).subscribe(()=>{

    })
  }
  changeOwnerValues() {
    this.editOwner = false;
  }
  changeTenantValues() {
    this.editTenant = false;
  }
  saveOwner(){
    
    this.service.updateOwner(this.detailsForm.get("owner")?.value).subscribe(()=>{
      
    })
  }
  saveTenant(){
    
    this.service.updateTenant(this.detailsForm.get("tenant")?.value).subscribe(()=>{
      
    })
  }
  delTenantMember(i:any){
    this.tenantResidents.removeAt(i);
  }
  delTenantVehicle(i:any){
    this.tenantVehicleList.removeAt(i);
  }
  delOwnerMember(i:any){
    this.ownerResidents.removeAt(i);
  }
  delOwnerVehicle(i:any){
    this.ownerVehicleList.removeAt(i);
  }
  addMoreOwnerMember() {
    this.ownerResidents.push(this.fb.group({
      memberName: "",
      phoneNumber: ""
    }))
  }
  addMoreTenantMember() {
    this.tenantResidents.push(this.fb.group({
      memberName: "",
      phoneNumber: ""
    }))
  }
  addMoreTenantVehicle() {
    this.tenantVehicleList.push(this.fb.group({
      vehicleType: "",
      vehicleNumber: ""
    }))
  }
  addMoreOwnerVehicle() {
    this.ownerVehicleList.push(this.fb.group({
      vehicleType: "",
      vehicleNumber: ""
    }))
  }

  initializeForm(data: any) {
    this.detailsForm = this.form.formStructure()

    const owner = this.detailsForm.get("owner") as FormGroup
    const tenant = this.detailsForm.get("tenant") as FormGroup

    this.ownerResidents = owner.get("residents") as FormArray;
    this.tenantResidents = tenant.get("residents") as FormArray;

    this.ownerVehicleList = owner.get("vehicleList") as FormArray;
    this.tenantVehicleList = tenant.get("vehicleList") as FormArray;
    this.searched = true;
  }
}
