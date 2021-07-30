import { FormBuilder, FormGroup } from '@angular/forms';
export class format {




    constructor(private fb: FormBuilder) {


    }

    formStructure(): FormGroup {

        return this.fb.group({


            block: "",
            roomNo: "",
            houseType: this.fb.group({
                balcony: "",
                bathrooms: "",
                floors: "",
                rooms: "",
                type: ""
            })


        }

        )

    }

}