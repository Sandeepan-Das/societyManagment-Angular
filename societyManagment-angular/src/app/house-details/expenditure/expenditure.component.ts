import { WorkerService } from './../../shared/services/worker/worker.service';
import { form } from './format';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expenditure',
  templateUrl: './expenditure.component.html',
  styleUrls: ['./expenditure.component.css']
})
export class ExpenditureComponent implements OnInit {
  success: Boolean = false;
  billForm!: FormGroup
  extras!: FormArray
  sum = 0;
  
  private form = new form(this.fb)

  constructor(private fb: FormBuilder, private service: WorkerService) { }

  ngOnInit(): void {
    this.initializeForm()
    this.service.fetchMonthlyBill().subscribe((data) => {
      console.log(data.bill[0])
      this.billForm = this.form.formStructure(data.bill[0])
      this.extras = this.billForm.get("extras") as FormArray
    })
  }
  initializeForm() {
    this.billForm = this.form.initialStructure()

    this.extras = this.billForm.get("extras") as FormArray
  }
  submitForm() {
    // payment API
  }
  close() {
    this.success = false
  }
}
