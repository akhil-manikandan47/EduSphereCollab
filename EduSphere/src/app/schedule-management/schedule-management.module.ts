import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ScheduleListComponent } from './components/schedule-list/schedule-list.component';
import { AuthGuard } from '../authentication/guards/auth.guard';
import { RoleGuard } from '../core/guards/role.guard';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild([
      { path: 'schedulelist', component: ScheduleListComponent, data: { roles: ['Admin'] } }
    ])
  ]
})
export class ScheduleManagementModule { }
