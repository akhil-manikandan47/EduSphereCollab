import { Injectable, signal } from '@angular/core';
import { StudentAttendanceComponent } from 'src/app/attendance-management/components/student-attendance/student-attendance.component';
import { TeacherAttendanceComponent } from 'src/app/attendance-management/components/teacher-attendance/teacher-attendance.component';
import { Widget } from 'src/app/models';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  widgets = signal<Widget[]>([
    {
      id: 1,
      label: 'Results',
      content: TeacherAttendanceComponent,
      backgroundColor: 'blue',
      color: 'white',
    },
    {
      id: 2,
      label: 'Students',
      content: StudentAttendanceComponent,
      backgroundColor: 'blue',
      color: 'white',
    }
  ])
  

  constructor() { }
}
