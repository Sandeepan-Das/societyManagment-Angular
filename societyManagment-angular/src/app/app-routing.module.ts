import { WorkerProfileComponent } from './worker-profile/worker-profile.component';
import { ExpenditureComponent } from './house-details/expenditure/expenditure.component';
import { BillComponent } from './admin/bill/bill.component';
import { WorkerComponent } from './security/worker/worker.component';
import { InsertWorkerComponent } from './admin/insert-worker/insert-worker.component';
import { AdminComponent } from './admin/admin.component';
import { SecurityComponent } from './security/security.component';
import { SecurityNotificationComponent } from './security/security-notification/security-notification.component';
import { CheckNotificationComponent } from './house-details/check-notification/check-notification.component';
import { SendMessageComponent } from './security/send-message/send-message.component';
import { CredentialsComponent } from './credentials/credentials.component';
import { InsertResidentsComponent } from './admin/insert-residents/insert-residents.component';
import { FetchResidentComponent } from './house-details/fetch-resident/fetch-resident.component';
import { HouseDetailsComponent } from './house-details/house-details.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchResidentComponent } from './search-resident/search-resident.component';
import { InsertHouseComponent } from './admin/insert-house/insert-house.component';

const routes: Routes = [
  {path:"workerDetails",component:WorkerProfileComponent},
  { path: "houseDetails", component: HouseDetailsComponent, children: [{path:"receiveNotification",component:CheckNotificationComponent},{ path: "fetchResidents", component: FetchResidentComponent },{path:"search",component:SearchResidentComponent},{path:"bill",component:BillComponent},{path:"monthlyBill",component:ExpenditureComponent}] },
  {path:"signUp",component:CredentialsComponent},
  {path:"admin",component:AdminComponent,children:[{path:"insertHouse",component:InsertHouseComponent},{path: "insertResidents",component:InsertResidentsComponent},{path:"insertWorker",component:InsertWorkerComponent},{path:"bill",component:BillComponent}]},
  {path:"security",component:SecurityComponent,children:[{path:"sendMsg",component:SendMessageComponent},{path:"securityNotification",component:SecurityNotificationComponent},{path:"worker",component:WorkerComponent}]}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
