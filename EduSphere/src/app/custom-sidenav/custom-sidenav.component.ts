import { Component, computed, Input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuItemComponent } from "../menu-item/menu-item.component";
import { MaterialModule } from '../material.module';
import { TooltipPosition } from '@angular/material/tooltip';

export type MenuItem = {
  label: string;
  icon: string;
  route?: string;
  tooltip?: string;
  subItems?: MenuItem[];
}

@Component({
  selector: 'app-custom-sidenav',
  standalone: true,
  imports: [MaterialModule, CommonModule, RouterModule, MenuItemComponent],
  templateUrl: './custom-sidenav.component.html',
  styleUrl: './custom-sidenav.component.scss'
})
export class CustomSidenavComponent {

  sideNavCollapsed = signal(true);

  @Input() set collapsed(val: boolean) {
    this.sideNavCollapsed.set(val);
  }

  positionOptions: TooltipPosition[] = ['after', 'before', 'above', 'below', 'left', 'right'];

  menuItems = signal<MenuItem[]>([
    {
      label: 'Dashboard',
      icon: 'dashboard',
      route: 'admin/dashboard',
      tooltip: 'Dashboard',
    },
    {
      label: 'Management',
      icon: 'movie',
      subItems: [
        {
          label: 'Class',
          icon: 'meeting_room',
          route: 'class-management/classlist',
          tooltip: 'Class',
        },
        {
          label: 'Student',
          icon: 'cast_for_education',
          route: 'student-management/studentlist',
          tooltip: 'Student Details',
        },
        {
          label: 'Teacher',
          icon: 'cast_for_education',
          route: 'teacher-management/teacherlist',
          tooltip: 'Teacher Details',
        },
        {
          label: 'Attendance Management',
          icon: 'person',
          tooltip: 'Attendance Management',
          subItems: [
            {
              label: 'Student Attendance',
              icon: 'school',
              route: 'attendance-management/student',
              tooltip: 'Attendance(Students)',
            },
            {
              label: 'Teacher Attendance',
              icon: 'local_library',
              route: 'attendance-management/teacher',
              tooltip: 'Attendance(Teachers)',
            }
          ]
        },
        {
          label: 'Schedule',
          icon: 'schedule',
          route: 'schedule-management/schedulelist',
          tooltip: 'Schedule',
        },
        {
          label: 'Assignments',
          icon: 'assignment_add',
          route: 'assignment-management/assignmentlist',
          tooltip: 'Assignments'
        },
      ]
    },
    {
      label: 'Grade Sheets',
      icon: 'fact_check',
      route: 'gradebook/gradebookview',
      tooltip: 'Grade Sheets',
    }
  ]
  );// profilePicSize = computed(() => this.sideNavCollapsed() ? '32' : '100');
}
