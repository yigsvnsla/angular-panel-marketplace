import { AbstractControl, ValidationErrors } from '@angular/forms';
import * as libphonenumber from 'libphonenumber-js';

export const VALIDATORS_ERROR = {
  required: 'required'
} as const

export const CUSTOM_VALIDATORS_ERROR = {
  textEmpty: 'textEmpty',
  notIsValidPhoneNumber: 'notIsValidPhoneNumber',
  notMatchPassword: 'notMatchPassword',
  notMatchEmail: 'notMatchEmail',
  notMatchUsername: 'notMatchUsername',
  notMatchDni: 'notMatchDni',
  notMatchRuc: 'notMatchRuc',
} as const

export class CustomValidators {



  public static textEmptyValidator(AbstractControl: AbstractControl<string>): ValidationErrors | null {
    const value = AbstractControl.value
    if (value == '' || RegExp(/ /).test(value)) return { [CUSTOM_VALIDATORS_ERROR.textEmpty]: true };
    return null;
  }

  public static phoneValidator(AbstractControl: AbstractControl<string>): ValidationErrors | null {
    const value = AbstractControl.value
    if (value == '' || RegExp(/ /).test(value)) return { [CUSTOM_VALIDATORS_ERROR.textEmpty]: true }
    if (RegExp(/^[0-9]{10}$/).test(value)) {
      const formatNumber = libphonenumber.formatNumber(value, 'EC', 'INTERNATIONAL')
      const formatPhone = formatNumber.replace(/ /g, '')
      AbstractControl.setValue(formatPhone,{})
      return null
    }
    if (libphonenumber.isValidPhoneNumber(value)) return null;
    return { [CUSTOM_VALIDATORS_ERROR.notIsValidPhoneNumber]: true }
  }

  public static passwordValidator(AbstractControl: AbstractControl<string>): ValidationErrors | null {
    const value = AbstractControl.value
    if (value == '' || RegExp(/ /).test(value)) return { [CUSTOM_VALIDATORS_ERROR.textEmpty]: true }

    const pwd_low = RegExp(/([a-zA-Z0-9]){8,}/).test(value) // Password lvl 1
    const pwd_medium = RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/).test(value);// Password lvl 2
    const pwd_hard = RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/).test(value); // Password lvl 3

    if (pwd_low) Object.assign(AbstractControl, { passwordStatus: 'low' });
    if (pwd_medium) Object.assign(AbstractControl, { passwordStatus: 'medium' });
    if (pwd_hard) Object.assign(AbstractControl, { passwordStatus: 'hard' });
    if (!pwd_low && !pwd_medium && !pwd_hard) return { [CUSTOM_VALIDATORS_ERROR.notMatchPassword]: true }
    return null;
  }

  public static emailValidator(AbstractControl: AbstractControl<string>): ValidationErrors | null {
    const value = AbstractControl.value
    if (value == '' || RegExp(/ /).test(value)) return { [CUSTOM_VALIDATORS_ERROR.textEmpty]: true }
    if (!RegExp(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/).test(value)) return { [CUSTOM_VALIDATORS_ERROR.notMatchEmail]: true }
    else return null
  }

  public static usernameValidator(AbstractControl: AbstractControl<string>): ValidationErrors | null {
    const value = AbstractControl.value
    if (value == '' || RegExp(/ /).test(value)) return { [CUSTOM_VALIDATORS_ERROR.textEmpty]: true }
    if (!RegExp(/^[^\s]+( [^\s]+)+$/).test(value)) return { [CUSTOM_VALIDATORS_ERROR.notMatchUsername]: true }
    else return null
  }

  public static dniValidator(AbstractControl: AbstractControl<string>): ValidationErrors | null {
    const value = AbstractControl.value
    const isDni = RegExp(/(^\d{10}$)/).test(value)
    if (!isDni) return { [CUSTOM_VALIDATORS_ERROR.notMatchDni]: true }
    else return null
  }

  public static rucValidator(AbstractControl: AbstractControl<string>): ValidationErrors | null {
    const value = AbstractControl.value
    const isRuc = RegExp(/(^\d{13}$)/).test(value)
    if (!isRuc) return { notMatchRuc: true }
    else return null
  }

}
