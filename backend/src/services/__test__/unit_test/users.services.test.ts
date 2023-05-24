import { describe, expect, test, vi, beforeEach, afterEach } from "vitest"
import { createUser } from "../../user.services"
import prisma from "../../../libs/__mocks__/prisma"

vi.mock("../../../libs/prisma")

describe("User Services", () => {
    beforeEach(() => {
        vi.useFakeTimers()
    })

    afterEach(() => {
        vi.useRealTimers()
    })

    test("createUser should return the generated user", async () => {
        const date = new Date(2000, 1, 1, 13)
        vi.setSystemTime(date)

        const newUser = {
            email: "user@prisma.io",
            name: "Prisma Fan",
            password: "P@ssw0rd",
        }

        prisma.user.create.mockResolvedValue({
            ...newUser,
            id: 1,
            role: "USER",
            createdAt: date,
            updatedAt: date,
        })

        const user = await createUser(newUser)

        console.log("user")

        expect(user).toStrictEqual({
            ...newUser,
            id: 1,
            role: "USER",
            createdAt: date,
            updatedAt: date,
        })
    })

    test("getUser should return the selected user", async () => {
        const date = new Date(2000, 1, 1, 13)
        vi.setSystemTime(date)

        const newUser = {
            email: "user@prisma.io",
            name: "Prisma Fan",
            password: "P@ssw0rd",
        }

        prisma.user.create.mockResolvedValue({
            ...newUser,
            id: 1,
            role: "USER",
            createdAt: date,
            updatedAt: date,
        })

        const user = await createUser(newUser)

        console.log("user")

        expect(user).toStrictEqual({
            ...newUser,
            id: 1,
            role: "USER",
            createdAt: date,
            updatedAt: date,
        })
    })
})
