import { FormBuilder, FormGroup } from '@angular/forms';

export class credentialFormat {
    constructor(private fb: FormBuilder) { }
    SignUpformStructre(): FormGroup {
        return this.fb.group({
            email: "",
            password: "",
            confirmPass: ""
        })
    }

}