import { Navigate, Outlet, useLocation } from "react-router-dom"

import React from "react"

export function PrivateOutlet() {
    const user = false
    const location = useLocation()

    console.log("auth", user)
    return user ? (
        <Outlet />
    ) : (
        <Navigate to="/login" state={{ from: location }} />
    )
}

export default PrivateOutlet
