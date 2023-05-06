import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from '@angular/material/input'
import { FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { CustomValidators, CUSTOM_VALIDATORS_ERROR, VALIDATORS_ERROR } from 'src/app/validators/customValidators';
import { MatIconModule } from '@angular/material/icon';
import { CustomErrorStateMatcher } from 'src/app/utils/CustomErrorStateMatcher';
@Component({
  selector: 'app-signin-form',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
  ],
  templateUrl: './signin-form.component.html',
  styleUrls: ['./signin-form.component.scss']
})
export default class SigninFormComponent implements OnInit {

  private formBuilder:FormBuilder = inject(FormBuilder);
  public customValidatorError = CUSTOM_VALIDATORS_ERROR
  public matcher = new CustomErrorStateMatcher();
  public phoneControl = this.formBuilder.nonNullable.control({ value: '', disabled: false },
    [
      Validators.required,
      CustomValidators.phoneValidator,
    ],
    []
  );
  public passwordControl = this.formBuilder.nonNullable.control({ value: '', disabled: false },
    [
      CustomValidators.textEmptyValidator,
      Validators.required
    ],
    []
  );

  public signinFormGroup = this.formBuilder.nonNullable.group({
    phone: this.phoneControl,
    password: this.passwordControl
  });

  public ngOnInit() {

  }

  public onSubmit() {
    console.log(this.signinFormGroup.getRawValue());
  }
}
