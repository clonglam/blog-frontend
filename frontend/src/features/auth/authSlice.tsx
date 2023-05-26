import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import type { RootState } from "../../app/store"
import { User } from "../../app/services/user"

type AuthState = {
    user: User | null
    token: string | null
}

const slice = createSlice({
    name: "auth",
    initialState: { user: null, token: null } as AuthState,
    reducers: {
        setCredentials: (
            state,
            {
                payload: { user, token },
            }: PayloadAction<{ user: User; token: string }>
        ) => {
            console.log("user", user)
            console.log("token", token)
            state.user = user
            state.token = token
        },
    },
})

export const { setCredentials } = slice.actions

export default slice.reducer

export const selectCurrentUser = (state: RootState) => state.auth.user
