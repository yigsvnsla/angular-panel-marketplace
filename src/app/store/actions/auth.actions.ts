import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from "@ngrx/store";
import { AuthLoadedModel, AuthLoadModel } from "../models/auth.model";

export const ACTIONS_AUTH = {
  loadAuth: '[App Auth] Auth load ',
  loadedAuth: '[App Auth] Auth loaded ',
  errorAuth: '[App Auth] Error Auth load ',
} as const

export const actionLoadAuth = createAction(ACTIONS_AUTH.loadAuth, props<AuthLoadModel>())
export const actionLoadedAuth = createAction(ACTIONS_AUTH.loadedAuth, props<AuthLoadedModel>())
export const actionErrorAuth = createAction(ACTIONS_AUTH.errorAuth, props<{ error: HttpErrorResponse }>())
