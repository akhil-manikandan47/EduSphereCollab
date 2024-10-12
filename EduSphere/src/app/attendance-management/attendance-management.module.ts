import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StudentAttendanceComponent } from './components/student-attendance/student-attendance.component';
import { TeacherAttendanceComponent } from './components/teacher-attendance/teacher-attendance.component';
import { AuthGuard } from '../authentication/guards/auth.guard';
import { RoleGuard } from '../core/guards/role.guard';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild([
      { path: 'student', component: StudentAttendanceComponent, data: { roles: ['Admin', 'Teacher'] } },
      { path: 'teacher', component: TeacherAttendanceComponent, data: { roles: ['Admin'] } }

    ])
  ]
})
export class AttendanceManagementModule { }
