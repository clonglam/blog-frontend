import bcrypt from "bcrypt"
import { User } from "@prisma/client"

import {
    CreateUserInput,
    DeleteUserInput,
    ListUsersInput,
    GetUserInput,
    UpdateUserInput,
} from "../schema/user"

import { Request, Response } from "express"

import {
    createUser,
    deleteUser,
    getUser,
    listUsers,
    updateUser,
} from "../services/user.services"

const hasePassword = async (password: string) => {
    const salt = await bcrypt.genSalt(10)
    return await bcrypt.hash(password, salt)
}
export async function createUserHandler(
    req: Request<{}, {}, CreateUserInput["body"]>,
    res: Response
) {
    try {
        const { password, ...rest } = req.body
        const hasedPassword = await hasePassword(password)

        const user = await createUser({ ...rest, password: hasedPassword })

        return res.send(user)
    } catch (err) {
        return res.sendStatus(400)
    }
}

export async function listUsersHandler(
    req: Request<{}, {}, ListUsersInput["query"]>,
    res: Response
) {
    try {
        const users = await listUsers(req)
        return res.send(users)
    } catch (err) {
        return res.sendStatus(400)
    }
}

export async function getUserHandler(
    req: Request<GetUserInput["params"], {}, {}>,
    res: Response<User | null>
) {
    try {
        const user = await getUser(req.params)
        return res.send(user)
    } catch (err) {
        return res.sendStatus(400)
    }
}

export async function updateUserHandler(
    req: Request<UpdateUserInput["params"], UpdateUserInput["body"]>,
    res: Response<User>
) {
    try {
        const user = await updateUser(req.params, req.body)
        return res.send(user)
    } catch (err) {
        return res.sendStatus(400)
    }
}

export async function deleteUserHandler(
    req: Request<DeleteUserInput["params"]>,
    res: Response
) {
    try {
        const user = await deleteUser(req.params)
        return res.send(user)
    } catch (err) {
        return res.sendStatus(400)
    }
}
