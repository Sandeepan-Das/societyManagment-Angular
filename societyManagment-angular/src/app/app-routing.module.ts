import { CredentialsComponent } from './credentials/credentials.component';
import { InsertResidentsComponent } from './house-details/insert-residents/insert-residents.component';
import { FetchResidentComponent } from './house-details/fetch-resident/fetch-resident.component';
import { HouseDetailsComponent } from './house-details/house-details.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchResidentComponent } from './search-resident/search-resident.component';
import { InsertHouseComponent } from './house-details/insert-house/insert-house.component';

const routes: Routes = [
  { path: "houseDetails", component: HouseDetailsComponent, children: [{ path: "fetchResidents", component: FetchResidentComponent },{path: "insertResidents",component:InsertResidentsComponent},{path:"search",component:SearchResidentComponent},{path:"insertHouse",component:InsertHouseComponent}] },
  {path:"signUp",component:CredentialsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
