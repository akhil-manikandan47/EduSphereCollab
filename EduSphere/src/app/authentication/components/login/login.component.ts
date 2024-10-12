import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/material.module';
import { PrimengModule } from 'src/app/primeng.module';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule,FormsModule, PrimengModule, MaterialModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  logo = ''
  
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    this.router.navigateByUrl('/body/admin/dashboard');
  }

}