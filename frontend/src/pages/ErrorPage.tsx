import React from "react"
import { isRouteErrorResponse, useRouteError } from "react-router-dom"
import NavBar from "../components/Header"

const ErrorPage = () => {
    const error = useRouteError()

    return (
        <>
            <NavBar />
            <div>
                <p>Oops</p>
                <p>
                    {isRouteErrorResponse(error)
                        ? "This page does not exist."
                        : "An unexpected error occurred."}
                </p>
            </div>
        </>
    )
}

export default ErrorPage
