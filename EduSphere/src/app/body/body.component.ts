import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { Router, RouterOutlet, NavigationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { CustomSidenavComponent } from '../custom-sidenav/custom-sidenav.component';
import { DarkThemeService } from '../services/dark-theme.service';
import { ConfirmationService } from 'primeng/api';
import { MaterialModule } from '../material.module';
import { FormsModule } from '@angular/forms';
import { PrimengModule } from '../primeng.module';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [RouterOutlet, CommonModule, CustomSidenavComponent, MaterialModule, FormsModule, PrimengModule],
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent {
  title = 'ExpenseHive';

  collapsed = signal(true);
  currentPageTitle: string = ''; // Variable to store the dynamic title

  sidenavWidth = computed(() => this.collapsed() ? '65px' : '250px');

  constructor(
    private router: Router,
    private darkThemeService: DarkThemeService,
    private confirmationService: ConfirmationService
  ) {
    // Subscribe to route changes
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd), // Filter to only listen to NavigationEnd events
      map(() => this.getCurrentPageTitle()) // Call the method to get the current page title
    ).subscribe(title => {
      this.currentPageTitle = title; // Update the current page title
    });
  }

  toggleDarkMode() {
    this.darkThemeService.toggleDarkTheme();
  }

  goToSettings() {
    this.router.navigate(['./body/profile-management/profile-view']);
  }

  confirmLogout() {
    this.router.navigate(['/auth/login']);
  }

  // Method to get the current page title based on route
  getCurrentPageTitle(): string {
    const route = this.router.url;
    switch (route) {
      case '/body/admin/dashboard':
        return 'Dashboard';
      case '/body/profile-management/profile-view':
        return 'Profile';
      case '/body/forms':
        return 'Forms';
      case '/body/attendance-management/student':
        return 'Attendance Management(Students)';
      case '/body/attendance-management/teacher':
        return 'Attendance Management(Teachers)';
      case '/body/schedule-management/schedulelist':
        return 'Schedule Management';
      case '/body/assignment-management/assignmentlist':
        return 'Assignment Management';
      case '/body/student-management/studentlist':
        return 'Student Details';
        case '/body/class-management/classlist':
        return 'Class Management';
        case '/body/gradebook/gradebookview':
        return 'Gradebook';
        case '/body/teacher-management/teacherlist':
        return 'List Of Teachers';
      default:
        return 'Home'; // Default title if route doesn't match
    }
  }
}
