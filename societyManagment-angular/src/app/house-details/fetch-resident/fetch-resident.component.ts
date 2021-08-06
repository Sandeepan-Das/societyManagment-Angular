import { ActivatedRoute } from '@angular/router';
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
  public success:Boolean = false
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
  constructor(private service: HouseServiceService, private fb: FormBuilder, private ActivatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.ActivatedRoute.queryParams.subscribe((data) => {
      this.key = data["roomNo"]
      if (this.key != undefined) this.fetchData()
    })
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
  changeHouseStructure(){
    this.editInfo = false;
  }
  delOwner() {
    this.service.delOnwer(this.detailsForm.get("owner")?.value.roomNo).subscribe(() => {
      this.success = true
    })
  }
  delTenant() {
    this.service.delTenant(this.detailsForm.get("tenant")?.value.roomNo).subscribe(() => {
      this.success = true
    })
  }
  changeOwnerValues() {
    this.editOwner = false;
  }
  changeTenantValues() {
    this.editTenant = false;
  }
  
  saveInfo(){
    this.service.updateHouse(this.detailsForm.get("houseDetails")?.value).subscribe(()=>{
      this.success = true
    })
    
  }
  saveOwner() {

    this.service.updateOwner(this.detailsForm.get("owner")?.value).subscribe(() => {
      this.success = true
    })
  }
  saveTenant() {

    this.service.updateTenant(this.detailsForm.get("tenant")?.value).subscribe(() => {
      this.success = true
    })
  }
  delTenantMember(i: any) {
    this.tenantResidents.removeAt(i);
  }
  delTenantVehicle(i: any) {
    this.tenantVehicleList.removeAt(i);
  }
  delOwnerMember(i: any) {
    this.ownerResidents.removeAt(i);
  }
  delOwnerVehicle(i: any) {
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
  close(){
    this.success = false
  }
}
