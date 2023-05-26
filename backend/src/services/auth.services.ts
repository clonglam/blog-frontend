import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { CreatePostInput, ListPostsInput } from "./../schema/post"
import { Prisma, User } from "@prisma/client"
import prisma from "../libs/prisma"
import { databaseResponseTimeHistogram } from "../utils/metrics"
import config from "config"

export async function checkValidPassword(
    password: string,
    userPassword: string
) {
    try {
        const validPassword = await bcrypt.compare(password, userPassword)
        return validPassword
    } catch (e) {
        throw e
    }
}

export async function generateAuthToken(user: User) {
    const token = jwt.sign(
        {
            name: user.name,
            email: user.email,
            isAdmin: user.role === "ADMIN",
        },
        process.env.JWTPRIVATEKEY || "akshfko h12ohasdfasfklh21"
    )

    return token
}

export async function hashPaswword(password: string) {
    const salt = await bcrypt.genSalt(10)

    const hashedPassword = await bcrypt.hash(password, salt)

    return hashedPassword
}
