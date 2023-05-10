import { HttpErrorResponse } from "@angular/common/http"
import { createAction, props } from "@ngrx/store"
import { IMeResponse } from "../../interfaces/me.interface"
import { ISigInResponse, ISingInRequest } from "../../interfaces/sign-in.interface"

export enum ActionsUsersKeys {
  loadUser = '[App User] load User',
  loadedUser = '[App User] loaded User',
  errorUser = '[App User] Error loading User',
  loadAuthUser = '[App User] Auth load User',
  loadedAuthUser = '[App User] Auth loaded User',
  errorAuthUser = '[App User] Error Auth load User',
}

export const actionLoadAuthUser = createAction(ActionsUsersKeys.loadAuthUser, props<ISingInRequest>())

export const actionLoadedAuthUser = createAction(ActionsUsersKeys.loadedAuthUser, props<ISigInResponse>())

export const actionErrorAuthUser = createAction(ActionsUsersKeys.errorAuthUser , props<{ error: HttpErrorResponse }>())

export const actionLoadUser = createAction(ActionsUsersKeys.loadUser)

export const actionLoadedUser = createAction(ActionsUsersKeys.loadedUser, props<{user:IMeResponse}>())

export const actionErrorUser = createAction(ActionsUsersKeys.errorUser, props<{ error: HttpErrorResponse }>())
