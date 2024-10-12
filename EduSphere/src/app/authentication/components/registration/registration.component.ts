import { Component } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { PrimengModule } from '../../../primeng.module';
import { userregister } from '../../../models';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, PrimengModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss'
})
export class RegistrationComponent {

  constructor(private builder: FormBuilder){}

  _regForm = this.builder.group({
    userName: this.builder.control('', Validators.compose([Validators.required, Validators.minLength(5)])),
    password: this.builder.control('', Validators.required),
    confirmPassword: this.builder.control('', Validators.required),
    name: this.builder.control('', Validators.required),
    email: this.builder.control('', Validators.required),
    phone: this.builder.control('', Validators.required),
  })

  proceedRegister(){
    if (this._regForm.valid) {
      let _obj: userregister = {
        userName: this._regForm.value.userName as string,
        name: this._regForm.value.name as string,
        phone: this._regForm.value.phone as string,
        email: this._regForm.value.email as string,
        password: this._regForm.value.password as string,
      }
      console.log(this._regForm.value);
      
    }
  }

}
