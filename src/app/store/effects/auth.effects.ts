import { AuthService } from './../../services/auth.service';
import { actionErrorAuth, actionLoadedAuth, ACTIONS_AUTH } from './../actions/auth.actions';
import { RootState } from './../states/root.state';
import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { catchError, concatMap, map, of, tap } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffects {
  private router: Router = inject(Router)
  private toastr: ToastrService = inject(ToastrService)
  private store: Store<RootState> = inject(Store<RootState>);
  private actions$: Actions = inject(Actions);
  private authService: AuthService = inject(AuthService)
  public loadAuthUser$
  public notifyErrorUser$

  constructor() {
    this.loadAuthUser$ = createEffect(
      () => this.actions$.pipe(
        ofType(ACTIONS_AUTH.loadAuth),
        concatMap(
          (effect) => this.authService.signin(effect).pipe(
            map((response) => {
              return actionLoadedAuth(response)
            }),
            catchError((httpErrorResponse) => of(actionErrorAuth({ error: httpErrorResponse })))
          )
        ),
        tap((effect) => {
          if (effect.type != ACTIONS_AUTH.errorAuth) {
            this.toastr.success('Access Succesfuly', 'Success', { progressBar: true, positionClass: 'toast-top-right', timeOut: 2000 })
            this.router.navigate(['panel'])
          }
        })
      ),
    );

    this.notifyErrorUser$ = createEffect(() =>
      this.actions$.pipe(
        ofType(ACTIONS_AUTH.errorAuth),
        tap(async ({ error }) => {
          const _error = error as HttpErrorResponse
          console.error(ACTIONS_AUTH.errorAuth, _error)
          this.toastr.error('posible Error to connect', 'Error', { progressBar: true, positionClass: 'toast-top-right', timeOut: 2000 })
        })
      ), { dispatch: false })
  }



}
