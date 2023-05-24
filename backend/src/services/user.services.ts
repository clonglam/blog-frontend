import prisma from "../libs/prisma"
import {
    CreateUserInput,
    DeleteUserInput,
    GetUserInput,
    ListUsersInput,
    UpdateUserInput,
} from "../schema/user"
import { databaseResponseTimeHistogram } from "../utils/metrics"

export async function createUser(input: CreateUserInput["body"]) {
    const metricsLabels = {
        operation: "Create User",
    }

    const timer = databaseResponseTimeHistogram.startTimer()

    try {
        const result = await prisma.user.create({
            data: input,
        })

        timer({ ...metricsLabels, success: "true" })

        return result
    } catch (e) {
        timer({ ...metricsLabels, success: "false" })
        console.log("error", e)
        throw e
    }
}

export async function getUser({ userId }: GetUserInput["params"]) {
    const metricsLabels = {
        operation: "Get User",
    }

    const timer = databaseResponseTimeHistogram.startTimer()
    const id = parseInt(userId)

    try {
        const user = await prisma.user.findUnique({
            where: { id },
            include: {
                Post: true,
            },
        })

        timer({ ...metricsLabels, success: "true" })

        return user
    } catch (e) {
        timer({ ...metricsLabels, success: "false" })
        throw e
    }
}

export async function listUsers({}: ListUsersInput) {
    const metricsLabels = {
        operation: "List Users",
    }

    const timer = databaseResponseTimeHistogram.startTimer()

    try {
        const result = await prisma.user.findMany({
            orderBy: {
                id: "asc",
            },
        })
        timer({ ...metricsLabels, success: "true" })
        return result
    } catch (e) {
        timer({ ...metricsLabels, success: "false" })
        throw e
    }
}

export async function deleteUser({ userId }: DeleteUserInput["params"]) {
    const metricsLabels = {
        operation: "Delete User",
    }

    const data = {
        id: parseInt(userId),
    }

    const timer = databaseResponseTimeHistogram.startTimer()

    try {
        const result = await prisma.user.delete({
            where: data,
        })

        timer({ ...metricsLabels, success: "true" })

        return result
    } catch (e) {
        timer({ ...metricsLabels, success: "false" })

        throw e
    }
}

export async function updateUser(
    { userId }: UpdateUserInput["params"],
    body: UpdateUserInput["body"]
) {
    const metricsLabels = {
        operation: "Update User",
    }

    const id = parseInt(userId)

    const timer = databaseResponseTimeHistogram.startTimer()

    try {
        const result = await prisma.user.update({
            where: { id },
            data: body,
        })

        timer({ ...metricsLabels, success: "true" })

        return result
    } catch (e) {
        timer({ ...metricsLabels, success: "false" })
        throw e
    }
}
