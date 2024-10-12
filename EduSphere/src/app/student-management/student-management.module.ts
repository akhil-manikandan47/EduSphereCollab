import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StudentListComponent } from './components/student-list/student-list.component';
import { AuthGuard } from '../authentication/guards/auth.guard';
import { RoleGuard } from '../core/guards/role.guard';
import { HttpClientModule } from '@angular/common/http';
import { StudentDetailsComponent } from './components/student-details/student-details.component';
import { AddStudentsComponent } from './components/add-students/add-students.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild([
      { path: 'studentlist', component: StudentListComponent, data: { roles: ['Admin', 'Teacher'] } },
      { path: 'studentdetails', component: StudentDetailsComponent, data: { roles: ['Admin', 'Teacher'] } },
      { path: 'addstudents', component: AddStudentsComponent, data: { roles: ['Admin', 'Teacher'] } }
    ])
  ]
})
export class StudentManagementModule { }
