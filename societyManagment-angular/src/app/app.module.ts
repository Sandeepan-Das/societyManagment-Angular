import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HouseDetailsComponent } from './house-details/house-details.component';
import { FetchResidentComponent } from './house-details/fetch-resident/fetch-resident.component';
import { InsertResidentsComponent } from './house-details/insert-residents/insert-residents.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchResidentComponent } from './house-details/search-resident/search-resident.component';

@NgModule({
  declarations: [
    AppComponent,
    HouseDetailsComponent,
    FetchResidentComponent,
    InsertResidentsComponent,
    SearchResidentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
