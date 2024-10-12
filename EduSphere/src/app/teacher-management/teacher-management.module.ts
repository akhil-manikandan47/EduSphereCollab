import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TeacherListComponent } from './components/teacher-list/teacher-list.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../material.module';
import { TeacherDetailsComponent } from './components/teacher-details/teacher-details.component';
import { AddTeacherDetailsComponent } from './components/add-teacher-details/add-teacher-details.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule,
    RouterModule.forChild([
      { path: '', component: TeacherListComponent, data: { roles: ['Admin'] } },
      { path: 'teacherlist', component: TeacherListComponent},
      { path: 'teacherdetails', component: TeacherDetailsComponent},
      { path: 'addteacherdetails', component: AddTeacherDetailsComponent}
    ])
  ]
})
export class TeacherManagementModule { }
