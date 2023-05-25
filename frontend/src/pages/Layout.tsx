import { Outlet } from "react-router-dom"

import Header from "../components/Header"
import Cookies from "js-cookie"

const Layout = () => {
    const sid = Cookies.get("session") || ""
    if (sid) {
        console.log({ isLoggedIn: true })
    }
    return (
        <>
            <Header />

            <main>
                <Outlet />
            </main>
        </>
    )
}

export default Layout
