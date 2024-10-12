import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AssignmentDetailsComponent } from './components/assignment-details/assignment-details.component';
import { AssignmentListComponent } from './components/assignment-list/assignment-list.component';
import { AuthGuard } from '../authentication/guards/auth.guard';
import { RoleGuard } from '../core/guards/role.guard';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild([
      { path: 'assignmentlist', component: AssignmentListComponent, data: { roles: ['Student', 'Teacher'] } },
  { path: 'details/:id', component: AssignmentDetailsComponent, data: { roles: ['Student', 'Teacher'] } }

    ])
  ]
})
export class AssignmentManagementModule { }
