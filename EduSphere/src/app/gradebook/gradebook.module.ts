import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { GradebookViewComponent } from './components/gradebook-view/gradebook-view.component';
import { GradebookEditComponent } from './components/gradebook-edit/gradebook-edit.component';
import { AuthGuard } from '../authentication/guards/auth.guard';
import { RoleGuard } from '../core/guards/role.guard';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild([
      { path: 'gradebookview', component: GradebookViewComponent, data: { roles: ['Admin', 'Student'] } },
  { path: 'gradebookedit', component: GradebookEditComponent, data: { roles: ['Teacher'] } }
    ])
  ]
})
export class GradebookModule { }
