// auth.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  constructor() {
    // Check if user is authenticated (this could be from a token or session)
    this.checkAuthenticationStatus();
  }

  private checkAuthenticationStatus(): void {
    // Logic to check if user is authenticated
    // For example, check if a token exists in localStorage
    const token = localStorage.getItem('authToken');
    this.isAuthenticatedSubject.next(!!token);
  }

  isAuthenticated(): boolean {
    return this.isAuthenticatedSubject.value;
  }

  // Method to simulate user login
  login(token: string): void {
    localStorage.setItem('authToken', token);
    this.isAuthenticatedSubject.next(true);
  }

  // Method to simulate user logout
  logout(): void {
    localStorage.removeItem('authToken');
    this.isAuthenticatedSubject.next(false);
  }

  // Example method to get user role (modify as needed)
  getUserRole(): string {
    // Replace with actual role fetching logic
    return localStorage.getItem('userRole') || 'guest';
  }
}
