import { authIntercptor } from './shared/Interceptors/auth.interceptor';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HouseDetailsComponent } from './house-details/house-details.component';
import { FetchResidentComponent } from './house-details/fetch-resident/fetch-resident.component';
import { InsertResidentsComponent } from './house-details/insert-residents/insert-residents.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchResidentComponent } from './search-resident/search-resident.component';
import { InsertHouseComponent } from './house-details/insert-house/insert-house.component';
import { CredentialsComponent } from './credentials/credentials.component';

@NgModule({
  declarations: [
    AppComponent,
    HouseDetailsComponent,
    FetchResidentComponent,
    InsertResidentsComponent,
    SearchResidentComponent,
    InsertHouseComponent,
    CredentialsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:authIntercptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
