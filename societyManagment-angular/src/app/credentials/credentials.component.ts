import { FormBuilder, FormGroup } from '@angular/forms';
import { credentialFormat } from './format';
import { CredentialServiceService } from './../shared/services/credential/credential-service.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-credentials',
  templateUrl: './credentials.component.html',
  styleUrls: ['./credentials.component.css']
})
export class CredentialsComponent implements OnInit {
  public signUp: Boolean = true;

  form = new credentialFormat(this.fb)
  credentialForm!: FormGroup


  constructor(private service: CredentialServiceService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.credentialForm = this.form.SignUpformStructre()
  }
  signUpPage() {
    if (this.signUp) this.signUp = false
    else this.signUp = true
  }
  signUpSubmit() {
    this.service.signUp(this.credentialForm.value).subscribe(() => {
      location.href="/"
    })
  }
  loginSubmit() {
    this.service.login(this.credentialForm.value).subscribe(() => {
      location.href="/"
    })
  }
}
