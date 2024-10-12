import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClubListComponent } from './components/club-list/club-list.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../material.module';
import { RouterModule } from '@angular/router';
import { ClubDetailsComponent } from './components/club-details/club-details.component';
import { AddClubDetailsComponent } from './components/add-club-details/add-club-details.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule,
    RouterModule.forChild([
      { path: '', component: ClubListComponent, data: { roles: ['Admin'] } },
      { path: 'clublist', component: ClubListComponent},
      { path: 'clubdetails', component: ClubDetailsComponent},
      { path: 'addclubdetails', component: AddClubDetailsComponent}
    ])
  ]
})
export class ClubManagementModule { }
