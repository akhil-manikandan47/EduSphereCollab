import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { CustomSidenavComponent } from "./custom-sidenav/custom-sidenav.component";
import { ConfirmationService } from 'primeng/api';
import { MatMenuModule } from '@angular/material/menu';
import { DarkThemeService } from './services/dark-theme.service';
import { MaterialModule } from './material.module';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatMenuModule, CommonModule, MaterialModule, CustomSidenavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [ConfirmationService, DarkThemeService]
})
export class AppComponent {
  title = 'ExpenseHive';

  collapsed = signal(true);

  sidenavWidth = computed(() => this.collapsed() ? '65px' : '250px');

  constructor(
    private router: Router, 
    private darkThemeService: DarkThemeService, 
    private confirmationService: ConfirmationService
  ) {}

  toggleDarkMode() {
    this.darkThemeService.toggleDarkTheme();
  }

  goToSettings() {
    this.router.navigate(['/settings']);
  }

  // confirmLogout() {
  //   this.confirmationService.confirm({
  //     message: 'Are you sure you want to log out?',
  //     header: 'Logout Confirmation',
  //     icon: 'pi pi-exclamation-triangle',
  //     accept: () => {
  //       // Perform logout action here
  //       this.router.navigate(['/authentication/login']);
  //     }
  //   });
  // }

  confirmLogout(){
    this.router.navigate(['/auth/login']);
  }
}
