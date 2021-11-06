import { authIntercptor } from './shared/Interceptors/auth.interceptor';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HouseDetailsComponent } from './house-details/house-details.component';
import { FetchResidentComponent } from './house-details/fetch-resident/fetch-resident.component';
import { InsertResidentsComponent } from './admin/insert-residents/insert-residents.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchResidentComponent } from './search-resident/search-resident.component';
import { InsertHouseComponent } from './admin/insert-house/insert-house.component';
import { CredentialsComponent } from './credentials/credentials.component';
import { SendMessageComponent } from './security/send-message/send-message.component';
import { CheckNotificationComponent } from './house-details/check-notification/check-notification.component';
import { SecurityNotificationComponent } from './security/security-notification/security-notification.component';
import { SecurityComponent } from './security/security.component';
import { AdminComponent } from './admin/admin.component';
import { InsertWorkerComponent } from './admin/insert-worker/insert-worker.component';
import { WorkerComponent } from './security/worker/worker.component';
import { BillComponent } from './admin/bill/bill.component';
import { ExpenditureComponent } from './house-details/expenditure/expenditure.component';
import { WorkerProfileComponent } from './worker-profile/worker-profile.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { RaiseIssueComponent } from './maintenance/raise-issue/raise-issue.component';
import { AvailableIssueComponent } from './admin/available-issue/available-issue.component';


@NgModule({
  declarations: [
    AppComponent,
    HouseDetailsComponent,
    FetchResidentComponent,
    InsertResidentsComponent,
    SearchResidentComponent,
    InsertHouseComponent,
    CredentialsComponent,
    SendMessageComponent,
    CheckNotificationComponent,
    SecurityNotificationComponent,
    SecurityComponent,
    AdminComponent,
    InsertWorkerComponent,
    WorkerComponent,
    BillComponent,
    ExpenditureComponent,
    WorkerProfileComponent,
    MaintenanceComponent,
    RaiseIssueComponent,
    AvailableIssueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: authIntercptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
