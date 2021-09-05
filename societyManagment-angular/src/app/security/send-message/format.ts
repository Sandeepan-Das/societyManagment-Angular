import { FormBuilder, FormGroup } from '@angular/forms';
export class format {
    resident = {
        name: "",
        uuid: "",
        registeredNumber: "",
        roomNo: "",
    }
    constructor(private fb: FormBuilder) {


    }
    setData(houseInfoData: any) {


        this.resident = houseInfoData


    }
    formStructure(): FormGroup {

        return this.fb.group({


            name: this.resident.name,
            uuid: this.resident.uuid,
            registeredNumber: this.resident.registeredNumber,
            roomNo: this.resident.roomNo,
            message:""

        })
    }
    deliveryFormStructure():FormGroup{
        return this.fb.group({
            name:"",
            phoneNumber:""
        })
    }

}