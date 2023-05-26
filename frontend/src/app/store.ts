import {
    PreloadedState,
    combineReducers,
    configureStore,
} from "@reduxjs/toolkit"
import authReducer from "../features/auth/authSlice"
import { postApi } from "./services/posts"
import { authApi } from "./services/auth"

import { setupListeners } from "@reduxjs/toolkit/dist/query"

const rootReducer = combineReducers({
    [postApi.reducerPath]: postApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    auth: authReducer,
})

export const setupStore = (preloadedState?: PreloadedState<RootState>) =>
    configureStore({
        reducer: rootReducer,
        preloadedState,
        middleware: getDefaultMiddleware =>
            getDefaultMiddleware().concat([
                authApi.middleware,
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
