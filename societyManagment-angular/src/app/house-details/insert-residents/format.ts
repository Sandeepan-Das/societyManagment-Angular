import { FormBuilder, FormGroup } from "@angular/forms";

export class form {
    constructor(private fb: FormBuilder) {

    }
    formStructure():FormGroup {
        return this.fb.group({
            name: "",
            type: "",
            parking: "",
            residents: this.fb.array([this.memberStructure()]),
            vehicleList: this.fb.array([this.vehicleStructure()]),
            registeredNumber:"",
            roomNo:"",
            occupiedBy:""
        })
    }
    memberStructure(): FormGroup {
        return this.fb.group({
            memberName: "",
            phoneNumber: ""
        })
    }
    vehicleStructure():FormGroup{
        return this.fb.group({
            vehicleType: "",
            vehicleNumber: ""
        })
    }
}