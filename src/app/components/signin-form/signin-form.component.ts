import { actionLoadAuth } from './../../store/actions/auth.actions';
import { RootState } from './../../store/states/root.state';
import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from '@angular/material/input';
import { FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { CustomValidators, CUSTOM_VALIDATORS_ERROR, VALIDATORS_ERROR } from 'src/app/validators/customValidators';
import { MatIconModule } from '@angular/material/icon';
import { CustomErrorStateMatcher } from 'src/app/utils/CustomErrorStateMatcher';
import { Store } from '@ngrx/store';
import { MatSnackBar, MatSnackBarDismiss } from '@angular/material/snack-bar';
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
export default class SigninFormComponent {

  private formBuilder: FormBuilder = inject(FormBuilder);
  private store: Store<RootState> = inject(Store<RootState>);

  public customValidatorError = CUSTOM_VALIDATORS_ERROR;
  public matcher = new CustomErrorStateMatcher();

  public phoneControl = this.formBuilder.nonNullable.control({ value: '+593987469359', disabled: false },
    [Validators.required,CustomValidators.phoneValidator],
  );
  public passwordControl = this.formBuilder.nonNullable.control({ value: '123456789', disabled: false },
    [
      CustomValidators.textEmptyValidator,
      Validators.required
    ],
  );

  public signinFormGroup = this.formBuilder.nonNullable.group({
    phone: this.phoneControl,
    password: this.passwordControl
  });


  public onSubmit() {
    this.store.dispatch(actionLoadAuth(this.signinFormGroup.getRawValue()))
  };
}
