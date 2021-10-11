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
            security: bill.payableSocietyBill.security,
            electricity: bill.payableSocietyBill.electricity,
            garbage: bill.payableSocietyBill.garbage,
            water: bill.payableSocietyBill.water,
            worker: bill.payableSocietyBill.worker,
            type: bill.payableSocietyBill.type,
            total:bill.payableSocietyBill.total,
            extras: this.fb.array(this.extraExpenditureStructure(bill))
        })
    }
    extraExpenditureStructure(bill:any): any {
        console.log(bill.payableSocietyBill.extras.length)
        const arr = []
        for (let index = 0; index < bill.payableSocietyBill.extras.length; index++) {
            arr.push(this.fb.group(bill.payableSocietyBill.extras[index]));
        }
        console.log(arr)
        return arr
    }

}