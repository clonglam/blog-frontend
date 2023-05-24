import {
  PreloadedState,
  combineReducers,
  configureStore,
} from "@reduxjs/toolkit"
import { pokemonApi } from "../services/polemon"
import { postApi } from "../services/posts"

import stateReducer from "../features/state/stateSlice"
import { setupListeners } from "@reduxjs/toolkit/dist/query"

const rootReducer = combineReducers({
  state: stateReducer,
  [pokemonApi.reducerPath]: pokemonApi.reducer,
  [postApi.reducerPath]: postApi.reducer,
})

export const setupStore = (preloadedState?: PreloadedState<RootState>) =>
  configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat([
        pokemonApi.middleware,
        postApi.middleware,
      ]),
  })

export const store = setupStore()

setupListeners(store.dispatch)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = AppStore["dispatch"]
