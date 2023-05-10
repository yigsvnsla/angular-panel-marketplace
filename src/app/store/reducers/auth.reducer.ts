import { actionLoadedAuth } from './../actions/auth.actions';
import { createReducer, on } from "@ngrx/store";
import { actionLoadAuth } from "../actions/auth.actions";
import { StateAuth } from "../states/auth.state";


const stateAuth: StateAuth = {
  loading: false,
  refreshToken: "",
  authToken: ""
}

export const reducerAuth = createReducer(
  stateAuth,
  on(
    actionLoadAuth,
    (oldState, newState) => ({ ...oldState, loading: true })
  ),
  on(
    actionLoadedAuth,
    (oldState, newState) => ({ ...oldState, ...newState, loading: false })
  ),
)
