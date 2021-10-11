import { FormBuilder, FormGroup } from "@angular/forms";

export class form {

    initialStructure(): FormGroup {
        return this.fb.group({
            electricity: "",
            water: "",
            security: "",
            garbage: "",
            worker: this.workerPayment,
            type: "",
            total:"",
            extras: this.fb.array([this.extraExpenditure()])
        })
    }
    extraExpenditure(): FormGroup {
        return this.fb.group({
            expenditure: "",
            cost: ""
        })
    }
    workerPayment = ""
    constructor(private fb: FormBuilder) {

    }
    
    setWorkerPayment(bill: any) {

        this.workerPayment = bill
    }
    formStructure(bill:any): FormGroup {

        return this.fb.group({
            security: bill.currentBill.security,
            electricity: bill.currentBill.electricity,
            garbage: bill.currentBill.garbage,
            water: bill.currentBill.water,
            worker: this.workerPayment,
            type: bill.currentBill.type,
            total:bill.currentBill.total,
            extras: this.fb.array(this.extraExpenditureStructure(bill))
        })
    }
    extraExpenditureStructure(bill:any): any {
        console.log(bill.currentBill.extras.length)
        const arr = []
        for (let index = 0; index < bill.currentBill.extras.length; index++) {
            arr.push(this.fb.group(bill.currentBill.extras[index]));
        }
        console.log(arr)
        return arr
    }

}