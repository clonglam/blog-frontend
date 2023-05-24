import config from "config"
import helmet from "helmet"
import Debug from "debug"
import express from "express"
import db from "./startup/db"

import routers from "./startup/routes"
const debug = Debug("app:startup")
const app = express()

const port = Number(process.env.PORT) || 3001

app.use(helmet())
app.use(express.static("public"))

db()

app.listen(port, () => {
    debug("Application started")
    console.log(`Server started at http://localhost:${port}`)
    routers(app, port)
})

export default app
