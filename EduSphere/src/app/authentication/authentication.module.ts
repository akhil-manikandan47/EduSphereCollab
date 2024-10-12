import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { RegistrationComponent } from './components/registration/registration.component';
import { ConfirmOtpComponent } from './components/confirm-otp/confirm-otp.component';
import { HttpClientModule } from '@angular/common/http';
import { UnauthorizedComponent } from './components/unauthorized/unauthorized.component';
import { NotFoundComponent } from './components/not-found/not-found.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'login', component: LoginComponent },
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'register', component: RegistrationComponent, canActivate: [AuthGuard] },
      { path: 'confirmotp', component: ConfirmOtpComponent, canActivate: [AuthGuard] },
      { path: 'unauthorized', component: UnauthorizedComponent, canActivate: [AuthGuard] },
      { path: 'notfound', component: NotFoundComponent, canActivate: [AuthGuard] }
    ]),
    HttpClientModule
  ]
})
export class AuthenticationModule { }
