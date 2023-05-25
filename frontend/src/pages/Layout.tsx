import { Outlet } from "react-router-dom"

import NavBar from "../components/Navigation"
import Cookies from "js-cookie"

const Layout = () => {
    const sid = Cookies.get("session") || ""
    if (sid) {
        console.log({ isLoggedIn: true })
    }
    return (
        <>
            <NavBar />

            <Outlet />
        </>
    )
}

export default Layout
