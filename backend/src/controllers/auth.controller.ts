import { Request, Response } from "express"
import { LoginInput } from "../schema/auth"
import { getUserByEmail } from "../services/user.services"
import {
    checkValidPassword,
    generateAuthToken,
} from "../services/auth.services"

export async function loginHandler(req: Request<LoginInput>, res: Response) {
    try {
        console.log("req", req.body)
        const user = await getUserByEmail(req.body)
        if (!user) return res.status(400).send("Invalid email or password.")

        const validPassword = await checkValidPassword(
            req.body.password,
            user.password
        )

        if (!validPassword)
            return res.status(400).send("Invalid email or password.")

        const token = await generateAuthToken(user)
        res.send({ user, token })
    } catch (err) {
        return res.status(400).send("Internal Error.")
    }
}
