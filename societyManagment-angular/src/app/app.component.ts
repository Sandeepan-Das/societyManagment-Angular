import { PackageNotifyService } from './shared/services/notification/package-notify.service';
import { CredentialServiceService } from './shared/services/credential/credential-service.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent {
  logOut:Boolean = false;
  

  title = 'societyManagment-angular';
  
  constructor(private routes:Router,private credentialService:CredentialServiceService,private socket:PackageNotifyService){

  }

  searchQuery(searchValue:any){
    this.routes.navigate(["/houseDetails/search"],{
      queryParams:{"searchQuery":searchValue.target.value}
    })
    
  }
  ngOnInit(): void {
    if(localStorage.getItem("refreshToken")) {
      this.logOut = true;
    } 
  }
  loggedOut(){
    this.credentialService.logOut({token:localStorage.getItem("refreshToken")}).subscribe(()=>{
      localStorage.removeItem("refreshToken")
      localStorage.removeItem("accessToken")
      location.href="/"
    })
  }

}
