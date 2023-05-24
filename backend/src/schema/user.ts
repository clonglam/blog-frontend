import * as z from "zod"

const userRole = z.enum(["USER", "ADMIN"])
type UserRole = z.infer<typeof userRole>

const UserBody = z.object({
    email: z.string({ required_error: "Email is required" }),
    name: z.string({
        required_error: "Name is required",
    }),
    password: z.string({
        required_error: "Password is required",
    }),
    role: userRole.optional(),
})

const payload = {
    body: UserBody,
}

const params = {
    params: z.object({
        userId: z.string({
            required_error: "userId is required.",
        }),
    }),
}

const query = {
    query: z.object({
        page: z.optional(z.number({})),
        collections: z.string().optional(),
    }),
}

export const getUserSchema = z.object({
    ...params,
})

export const listUsersSchema = z.object({
    ...query,
})

export const createUserSchema = z.object({
    ...payload,
})

export const updateUserSchema = z.object({
    ...payload,
    ...params,
})

export const deleteUserSchema = z.object({
    ...params,
    ...payload,
})

export type GetUserInput = z.TypeOf<typeof getUserSchema>
export type ListUsersInput = z.TypeOf<typeof listUsersSchema>
export type CreateUserInput = z.TypeOf<typeof createUserSchema>
export type UpdateUserInput = z.TypeOf<typeof updateUserSchema>
export type DeleteUserInput = z.TypeOf<typeof deleteUserSchema>
