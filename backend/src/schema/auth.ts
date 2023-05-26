import * as z from "zod"

const LoginBody = z.object({
    email: z.string({ required_error: "Email is required" }),

    password: z.string({
        required_error: "Password is required",
    }),
})

const payload = {
    body: LoginBody,
}

export const loginSchema = z.object({
    ...payload,
})

export type LoginInput = z.TypeOf<typeof loginSchema>
