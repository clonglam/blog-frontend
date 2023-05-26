import session from "express-session"
import bcrypt from "bcrypt"
import prisma from "../libs/prisma"
import express from "express"
import { createUser } from "../services/user.services"
import { loginHandler } from "../controllers/auth.controller"
import { User } from "@prisma/client"
import _ from "lodash"
import { generateAuthToken, hashPaswword } from "../services/auth.services"

const router = express.Router()

/** POST /login/password
 *
 * This route authenticates the user by verifying a username and password.
 *
 * A username and password are submitted to this route via an HTML form, which
 * was rendered by the `GET /login` route.  The username and password is
 * authenticated using the `local` strategy.  The strategy will parse the
 * username and password from the request and call the `verify` function.
 *
 * Upon successful authentication, a login session will be established.  As the
 * user interacts with the app, by clicking links and submitting forms, the
 * subsequent requests will be authenticated by verifying the session.
 *
 * When authentication fails, the user will be re-prompted to login and shown
 * a message informing them of what went wrong.
 *
 * @openapi
 * /login:
 *   post:
 *     summary: Log in using a username and password
 *     requestBody:
 *       content:
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: number
 *     responses:
 *       "302":
 *         description: Redirect.
 */
router.post("/login", loginHandler)

/* POST /logout
 *
 * This route logs the user out.
 */
router.post("/logout", function (req, res, next) {
    req.logout(function (err) {
        if (err) {
            return next(err)
        }
        res.redirect("/")
    })
})

/* GET /signup
 *
 * This route prompts the user to sign up.
 *
 * The 'signup' view renders an HTML form, into which the user enters their
 * desired username and password.  When the user submits the form, a request
 * will be sent to the `POST /signup` route.
 */
// router.get("/signup", function (req, res, next) {
//     res.render("signup")
// })

/* POST /signup
 *
 * This route creates a new user account.
 *
 * A desired username and password are submitted to this route via an HTML form,
 * which was rendered by the `GET /signup` route.  The password is hashed and
 * then a new user record is inserted into the database.  If the record is
 * successfully created, the user is logged in.
 */
router.post("/signup", async function (req, res, next) {
    let user = await prisma.user.findFirst({ where: { email: req.body.email } })
    if (user) return res.status(400).send("User already registered.")

    const newUser: User = req.body
    newUser.password = await hashPaswword(newUser.password)

    const createdUser = await createUser(newUser)

    const token = await generateAuthToken(createdUser)
    console.log("token: ", token)

    // req.session.user = {
    //     username: createdUser.email,
    // }

    res.header("x-auth-token", token).send(
        _.assign(_.pick(user, ["_id", "name", "email"]), { token: token })
    )
    // user = new User(_.pick(req.body, ["name", "email", "password"]))

    // var salt = crypto.randomBytes(16)
    // crypto.pbkdf2(
    //     req.body.password,
    //     salt,
    //     310000,
    //     32,
    //     "sha256",
    //     function (err, hashedPassword) {
    //         if (err) {
    //             return next(err)
    //         }
    //         db.run(
    //             "INSERT INTO users (username, hashed_password, salt) VALUES (?, ?, ?)",
    //             [req.body.username, hashedPassword, salt],
    //             function (err) {
    //                 if (err) {
    //                     return next(err)
    //                 }
    //                 var user = {
    //                     id: this.lastID,
    //                     username: req.body.username,
    //                 }
    //                 req.login(user, function (err) {
    //                     if (err) {
    //                         return next(err)
    //                     }
    //                     res.redirect("/")
    //                 })
    //             }
    //         )
    //     }
    // )
})

export default router
