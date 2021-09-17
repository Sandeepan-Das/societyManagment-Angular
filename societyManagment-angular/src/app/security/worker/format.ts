import { FormBuilder, FormGroup } from "@angular/forms";

export class form {
    constructor(private fb: FormBuilder) {

    }
    formStructure():FormGroup {
        return this.fb.group({
            file1:"",
            
        })
    }
    
    
}