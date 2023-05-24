import { PaletteMode } from "@mui/material"
import type { PayloadAction } from "@reduxjs/toolkit"
import { createSlice } from "@reduxjs/toolkit"

import type { RootState } from "../../app/store"

// Define a type for the slice state
interface CounterState {
  isMenuOpen: boolean
  colorMode: PaletteMode
  openedSubMenu: string[]
}

// Define the initial state using that type
const initialState: CounterState = {
  isMenuOpen: true,
  openedSubMenu: [],
  colorMode: "dark",
}

export const stateSlice = createSlice({
  name: "state",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    toggleSideMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen
    },
    toggleColorMode: (state) => {
      state.colorMode = state.colorMode === "dark" ? "light" : "dark"
    },
    toggleSubMenu: (state, { payload }: PayloadAction<string>) => {
      state.openedSubMenu.includes(payload)
        ? (state.openedSubMenu = state.openedSubMenu.filter(
            (key) => key !== payload
          ))
        : (state.openedSubMenu = [...state.openedSubMenu, payload])
    },
  },
})

export const { toggleSideMenu, toggleColorMode, toggleSubMenu } =
  stateSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectMenuState = (state: RootState): boolean =>
  state.state.isMenuOpen

export const selectSubMenuState = (state: RootState): string[] =>
  state.state.openedSubMenu

export const selectColorMode = (state: RootState): PaletteMode =>
  state.state.colorMode

export default stateSlice.reducer
