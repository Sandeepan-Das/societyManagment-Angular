import { WorkerService } from './../../shared/services/worker/worker.service';
import { form } from './format';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit {
  success: Boolean = false;
  billForm!: FormGroup
  extras!: FormArray
  sum = 0;
  typeP!:any;
  showTypePerson:Boolean = false
  showTotal: Boolean = false
  private form = new form(this.fb)


  constructor(private fb: FormBuilder, private service: WorkerService) { }

  ngOnInit(): void {

    this.initializeForm()
    this.service.fetchCurrentBill().subscribe((data) => {

      this.service.workerPayment().subscribe((data2) => {
        console.log(data.bill)
        if (data.bill[0].currentBill != undefined) {
          this.billForm = this.form.formStructure(data.bill[0])
          this.extras = this.billForm.get("extras") as FormArray
          this.showTotal = true
        }
        this.billForm.patchValue({
          worker: String(data2.sum)
        })

      })
    })
  }
  initializeForm() {
    this.billForm = this.form.initialStructure()

    this.extras = this.billForm.get("extras") as FormArray
  }
  submitForm() {
    this.service.shareExpenditure(this.billForm.value).subscribe(() => {

    })
  }
  selectedMsg(event:any){
    this.typeP = event.target.value
    if(this.typeP =="Block" || this.typeP=="Floor")
    this.showTypePerson = true
  }
  addMoreExpenditure() {
    this.extras.push(this.form.extraExpenditure())
  }
  delExpenditure(i: any) {
    this.extras.removeAt(i);
  }
  close() {
    this.success = false;
  }
  total() {
    this.sum = 0;
    let valArrays = Object.entries(this.billForm.value)
    for (let val of valArrays) {
      if (val[0]=="extras") {
        for (let data of this.billForm.value.extras) {
          const stringSum = String(data.cost)

          const intVal = parseInt(stringSum)

          if (!isNaN(intVal)) {
            this.sum = this.sum + intVal

          }
        }
      } else {
        if(val[0]!="total" && val[0]!="type"){

          const stringSum = String(val[1])
  
          const intVal = parseInt(stringSum)
  
          if (!isNaN(intVal)) {
            this.sum = this.sum + intVal
  
          }
        }
      }

    }
    this.billForm.patchValue({
      total: String(this.sum)
    })
    this.showTotal = true


  }
  saveForm() {
    this.service.saveExpenditure(this.billForm.value).subscribe(() => {

    })
  }
}
