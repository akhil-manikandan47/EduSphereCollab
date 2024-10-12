// role.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from 'src/app/authentication/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard  {

  // constructor(private authService: AuthService, private router: Router) {}

  // canActivate(route: ActivatedRouteSnapshot): boolean {
  //   const expectedRoles = (route.data['roles'] || []) as Array<string>;
  //   const currentRole = this.authService.getUserRole();

  //   if (expectedRoles.includes(currentRole)) {
  //     return true;
  //   } else {
  //     this.router.navigate(['/unauthorized']);
  //     return false;
  //   }
  // }
}
