import { createSelector } from "@ngrx/store";
import { RootState } from "../states/root.state";

const stateAuth = (store: RootState) => (store.stateAuth)

export const selectorUserLoading = createSelector(
  stateAuth,
  (state) => state.loading
)

export const selectorUserToken = createSelector(
  stateAuth,
  (state) => state.authToken
)
