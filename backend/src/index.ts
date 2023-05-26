import config from "config"
import helmet from "helmet"
import Debug from "debug"
import express from "express"
import path from "path"
import session from "express-session"

import passport from "passport"

import routers from "./startup/routes"
import cookieParser from "cookie-parser"
import cors from "cors"
const debug = Debug("app:startup")
const app = express()

const port = Number(process.env.PORT) || 3001

app.use(helmet())
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, "public")))
app.use(
    session({
        secret: "keyboard cat",
        resave: false, // don't save session if unmodified
        saveUninitialized: false, // don't create session until something stored
        // store: new SQLiteStore({ db: "sessions.db", dir: "./var/db" }),
        cookie: {
            secure: process.env.ENVIRONMENT === "production",
            httpOnly: true,
            sameSite: process.env.ENVIRONMENT === "production" ? "none" : "lax",
        },
    })
)

app.use(passport.authenticate("session"))

// app.use(function (req, res, next) {
//     var msgs = req.session.messages || []
//     res.locals.messages = msgs
//     res.locals.hasMessages = !!msgs.length
//     req.session.messages = []
//     next()
// })

app.use(express.static("public"))

// db()

app.listen(port, () => {
    debug("Application started")
    console.log(`Server started at http://localhost:${port}`)
    routers(app, port)
})

export default app
