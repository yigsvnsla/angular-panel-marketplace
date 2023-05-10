import { ActionReducerMap, MetaReducer } from "@ngrx/store"
import { reducerAuth } from "../reducers/auth.reducer"
import { StateAuth } from "./auth.state"

export interface RootState {
  stateAuth:StateAuth
}

export const ROOT_REDUCERS: ActionReducerMap<RootState> = {
  stateAuth: reducerAuth
}

// export const META_REDUCERS: MetaReducer<RootState>[] = [metaReducer, hydrationMetaReducer]
