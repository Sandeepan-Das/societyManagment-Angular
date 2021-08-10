import { HouseServiceService } from '../../shared/services/houseDetails/house-service.service';
import { format } from './format';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-insert-house',
  templateUrl: './insert-house.component.html',
  styleUrls: ['./insert-house.component.css']
})
export class InsertHouseComponent implements OnInit {
  public success:Boolean = false

  detailsForm!:FormGroup
  form = new format(this.fb)
  constructor(private fb:FormBuilder,private service:HouseServiceService) { }

  ngOnInit(): void {
    this.initializeForm()
  }
  initializeForm(){
    this.detailsForm = this.form.formStructure()
    
  }
  submitForm(){
    this.service.insertHouse(this.detailsForm.value
      ).subscribe(()=>{
        this.success = true
    })
    
  }
  close(){
    this.success = false
  }
}
