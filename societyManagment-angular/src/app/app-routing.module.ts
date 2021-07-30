import { InsertResidentsComponent } from './house-details/insert-residents/insert-residents.component';
import { FetchResidentComponent } from './house-details/fetch-resident/fetch-resident.component';
import { HouseDetailsComponent } from './house-details/house-details.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchResidentComponent } from './house-details/search-resident/search-resident.component';

const routes: Routes = [
  { path: "houseDetails", component: HouseDetailsComponent, children: [{ path: "fetchResidents", component: FetchResidentComponent },{path: "insertResidents",component:InsertResidentsComponent},{path:"search",component:SearchResidentComponent}] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
