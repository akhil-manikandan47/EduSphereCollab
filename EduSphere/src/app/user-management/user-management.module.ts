import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserListComponent } from './components/user-list/user-list.component';
import { AuthGuard } from '../authentication/guards/auth.guard';
import { RoleGuard } from '../core/guards/role.guard';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild([
      { path: '', component: UserListComponent, data: { roles: ['Admin'] } }
    ])
  ]
})
export class UserManagementModule { }
