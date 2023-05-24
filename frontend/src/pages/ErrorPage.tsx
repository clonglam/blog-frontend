import React from "react"
import { isRouteErrorResponse, useRouteError } from "react-router-dom"
import NavBar from "../components/Navigation"

const ErrorPage = () => {
    const error = useRouteError()

    return (
        <>
            <NavBar />
            <div>
                <text>Oops</text>
                <text>
                    {isRouteErrorResponse(error)
                        ? "This page does not exist."
                        : "An unexpected error occurred."}
                </text>
            </div>
        </>
    )
}

export default ErrorPage
