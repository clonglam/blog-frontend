import { Outlet } from "react-router-dom"

import { useContext, useState } from "react"
import NavBar from "../components/Navigation"
import { ThemeContext } from "../context/ThemeContext"

const Layout = () => {
    return (
        <>
            <NavBar />

            <div className="layout-container container">
                <main className="container">
                    <Outlet />
                </main>

                <aside className="container">navigate Topic</aside>
            </div>
        </>
    )
}

export default Layout
