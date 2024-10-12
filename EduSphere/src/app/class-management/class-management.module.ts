import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ClassListComponent } from './components/class-list/class-list.component';
import { AuthGuard } from '../authentication/guards/auth.guard';
import { RoleGuard } from '../core/guards/role.guard';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild([
      { path: 'classlist', component: ClassListComponent, data: { roles: ['Admin', 'Teacher'] } },
      { path: '', component: ClassListComponent, data: { roles: ['Admin', 'Teacher'] } }
    ])
  ]
})
export class ClassManagementModule { }
