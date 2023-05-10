import { actionLoadedAuthUser, actionLoadAuthUser, actionErrorAuthUser, actionLoadUser, actionLoadedUser } from '../actions/user.actions';
import { createReducer, on } from "@ngrx/store";
import { StateUser } from "../states/user.state";

const stateUser: StateUser = {
  loading: false,

}

export const reducerUser = createReducer(
  stateUser,
  on(
    actionLoadAuthUser,
    actionLoadUser,
    (oldState, newState) => ({ ...oldState, loading: true })
  ),
  on(
    actionLoadedAuthUser,
    (currentState, { jwt, user }) => ({ ...user})
  ),
  on(
    actionErrorAuthUser,
    (currentState, { error }) => ({ ...currentState, loading: false })
  ),
  on(
    actionLoadedUser,
    (currentState, { user }) => {
      return user
    }
  )
  // on(
  //   actionErrorUser,
  //   (currentState, { error }) => ({ ...currentState, error, loading: false })
  // )
)
