import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../material.module';
import { RouterModule } from '@angular/router';
import { DepartmentListComponent } from './components/department-list/department-list.component';
import { AddDepartmentDetailsComponent } from './components/add-department-details/add-department-details.component';
import { DepartmentDetailsComponent } from './components/department-details/department-details.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule,
    RouterModule.forChild([
      { path: '', component: DepartmentListComponent, data: { roles: ['Admin'] } },
      { path: 'departmentlist', component: DepartmentListComponent},
      { path: 'departmentdetails', component: DepartmentDetailsComponent},
      { path: 'adddepartmentdetails', component: AddDepartmentDetailsComponent}
    ])
  ]
})
export class DepartmentManagementModule { }
