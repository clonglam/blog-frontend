import express, { Express } from "express"
import cors from "cors"
import morgan from "morgan"
import bodyParser from "body-parser"
import cookieParser from "cookie-parser"
import swaggerDocs from "../utils/swagger"

import healthCheck from "../routes/healthCheck"
import homeRoutes from "../routes/index"

import posts from "../routes/posts"
import users from "../routes/users"
import auth from "../routes/auth"
// import customers from "../routes/customers"
// import auth from "../routes/auth"
// import genres from "../routes/genres"

export default function (app: Express, port: number) {
    app.use(express.json())
    app.use(morgan("tiny"))

    // app.use(cookieParser())
    // app.use(bodyParser.json())
    // app.use(bodyParser.urlencoded({ extended: true }))

    // app.use("/api/", auth)
    app.use("/api", auth)
    app.use("/api", homeRoutes)
    app.use("/api/healthcheck", healthCheck)
    app.use("/api/posts", posts)
    app.use("/api/users", users)
    swaggerDocs(app, port)
    // app.use("/api/genres", genres)
    // app.use("/api/movies", movies)
    // app.use("/api/customers", customers)
    // app.use("/api/payment", checkout)

    // swaggerDocs(app, port)
}
