import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { AuthGuard } from './authentication/guards/auth.guard';
import { RoleGuard } from './core/guards/role.guard';
import { UnauthorizedComponent } from './authentication/components/unauthorized/unauthorized.component';
import { NotFoundComponent } from './authentication/components/not-found/not-found.component';
import { FacultyPanelComponent } from './faculty-panel/faculty-panel.component';

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule)
  },
  { path: '', 
    redirectTo: 'auth', 
    pathMatch: 'full' },
  {
    path: 'body',
    component: BodyComponent,
    // canActivate: [AuthGuard],
    children: [
      {
        path: 'admin',
        loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
        // canActivate: [RoleGuard],
        data: { roles: ['admin'] }
      },
      {
        path: 'assignment-management',
        loadChildren: () => import('./assignment-management/assignment-management.module').then(m => m.AssignmentManagementModule),
        // canActivate: [RoleGuard],
        data: { roles: ['student', 'teacher'] }
      },
      {
        path: 'attendance-management',
        loadChildren: () => import('./attendance-management/attendance-management.module').then(m => m.AttendanceManagementModule),
        // canActivate: [RoleGuard],
        data: { roles: ['admin', 'teacher'] }
      },
      {
        path: 'student-management',
        loadChildren: () => import('./student-management/student-management.module').then(m => m.StudentManagementModule),
        // canActivate: [RoleGuard],
        data: { roles: ['admin', 'teacher'] }
      },
      {
        path: 'teacher-management',
        loadChildren: () => import('./teacher-management/teacher-management.module').then(m => m.TeacherManagementModule),
        // canActivate: [RoleGuard],
        data: { roles: ['admin'] }
      },
      {
        path: 'user-management',
        loadChildren: () => import('./user-management/user-management.module').then(m => m.UserManagementModule),
        // canActivate: [RoleGuard],
        data: { roles: ['admin'] }
      },
      {
        path: 'schedule-management',
        loadChildren: () => import('./schedule-management/schedule-management.module').then(m => m.ScheduleManagementModule),
        // canActivate: [RoleGuard],
        data: { roles: ['admin', 'student', 'teacher'] }
      },
      {
        path: 'class-management',
        loadChildren: () => import('./class-management/class-management.module').then(m => m.ClassManagementModule),
        // canActivate: [RoleGuard],
        data: { roles: ['admin', 'teacher'] }
      },
      {
        path: 'profile-management',
        loadChildren: () => import('./profile-management/profile-management.module').then(m => m.ProfileManagementModule),
        // canActivate: [RoleGuard],
        data: { roles: ['admin', 'student', 'teacher'] }
      },
      {
        path: 'gradebook',
        loadChildren: () => import('./gradebook/gradebook.module').then(m => m.GradebookModule),
        // canActivate: [RoleGuard],
        data: { roles: ['teacher', 'admin', 'student'] }
      },
      {
        path: 'club-management',
        loadChildren: () => import('./club-management/club-management.module').then(m => m.ClubManagementModule),
        // canActivate: [RoleGuard],
        data: { roles: ['admin'] }
      },
      {
        path: 'department-management',
        loadChildren: () => import('./department-management/department-management.module').then(m => m.DepartmentManagementModule),
        // canActivate: [RoleGuard],
        data: { roles: ['admin'] }
      },
      {
        path: 'unauthorized',
        component: UnauthorizedComponent
      },
      {
        path: 'notfound',
        component: NotFoundComponent
      },
      { path: '**', 
        redirectTo: 'notfound' },
      {
        path: 'panel',
        component: FacultyPanelComponent
      },
      { path: '',
        redirectTo: '/panel',
        pathMatch: 'full' },

    ]
  }
];
