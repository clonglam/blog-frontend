import { Outlet } from "react-router-dom"

import { useContext, useState } from "react"
import NavBar from "../components/Navigation"
import { ThemeContext } from "../context/ThemeContext"

const Layout = () => {
    return (
        <>
            <NavBar />

            <Outlet />
        </>
    )
}

export default Layout
