// import { UserService } from './../services/user.service';
import { Observable, of, map, tap } from 'rxjs';
import { AsyncValidatorFn } from "@angular/forms";
import { AbstractControl, ValidationErrors } from '@angular/forms';

export default class AsyncCustomValidators {

  // public static findDocument(service: UserService): AsyncValidatorFn {
  //   return (AbstractControl: AbstractControl<string>): Observable<ValidationErrors | null> => {
  //     return service.getUserDocument(AbstractControl.value).pipe(
  //       map((res)=> (res.data.length > 0) ? { asyncFindDocument: true } : null)
  //     )
  //   }
  // }
}

