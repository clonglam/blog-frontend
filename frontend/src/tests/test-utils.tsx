import type { PreloadedState } from "@reduxjs/toolkit"
import type { RenderOptions } from "@testing-library/react"
import { render } from "@testing-library/react"
import React, { PropsWithChildren } from "react"
import { Provider } from "react-redux"

import { setupStore, type AppStore, type RootState } from "../app/store"
// As a basic setup, import your same slice reducers

import { setupListeners } from "@reduxjs/toolkit/dist/query"
import { BrowserRouter } from "react-router-dom"

// This type interface extends the default options for render from RTL, as well
// as allows the user to specify other things such as initialState, store.
interface ExtendedRenderOptions extends Omit<RenderOptions, "queries"> {
    preloadedState?: PreloadedState<RootState>
    store?: AppStore
}

export function renderWithProviders(
    ui: React.ReactElement,
    {
        preloadedState = {},
        store = setupStore(preloadedState),
        ...renderOptions
    }: ExtendedRenderOptions = {}
) {
    setupListeners(store.dispatch)

    function Wrapper({ children }: PropsWithChildren): JSX.Element {
        return <Provider store={store}>{children}</Provider>
    }

    // Return an object with the store and all of RTL's query functions
    return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) }
}

export { renderWithProviders as render }
