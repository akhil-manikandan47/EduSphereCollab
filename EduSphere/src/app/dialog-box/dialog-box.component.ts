import { Component, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { errorMessages, regExps } from '../utils/form-validator';
import { MaterialModule } from '../material.module';

export interface UsersData {
  name: string;
  id: number;
}

@Component({
  selector: 'app-dialog-box',
  standalone: true,
  imports: [MaterialModule, FormsModule, ReactiveFormsModule],
  templateUrl: './dialog-box.component.html',
  styleUrl: './dialog-box.component.scss'
})
export class DialogBoxComponent {
  action: string;
  local_data: any;
  countries!: string[];
  cancel: string = 'Cancel';

  tableForm!: FormGroup;
  errors = errorMessages;

  constructor(
    public dialogRef: MatDialogRef<DialogBoxComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: UsersData,
    private formBuilder: FormBuilder,) {
    this.local_data = { ...data };
    this.action = this.local_data.action;
    this.creatForm();
    this.tableForm.patchValue(this.local_data);
  }

  creatForm(): void {
    this.tableForm = this.formBuilder.group({
      country: ['', [Validators.required, Validators.pattern(regExps['str'])]],
      cases: ['', [Validators.required, Validators.pattern(regExps['num'])]],
      todayCases: ['', [Validators.required, Validators.pattern(regExps['num'])]],
      deaths: ['', [Validators.required, Validators.pattern(regExps['num'])]],
      todayDeaths: ['', [Validators.required, Validators.pattern(regExps['num'])]],
      recovered: ['', [Validators.required, Validators.pattern(regExps['num'])]],
      active: ['', [Validators.required, Validators.pattern(regExps['num'])]],
    });
  }

  closeDialog() {
    this.dialogRef.close({ data: { action: 'Cancel' } });
  }

  onSubmit(): void {
    this.dialogRef.close({ data: { action: this.action, data: this.tableForm.value } });
  }
}
