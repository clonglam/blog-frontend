import * as z from "zod"

const CategoryBody = z.object({
    name: z.string({ required_error: "title is required" }),
    slug: z.string({
        required_error: "Slug is required",
    }),
    postIds: z.array(z.number()),
})

const payload = {
    body: CategoryBody,
}

const params = {
    params: z.object({
        categoryId: z.string({
            required_error: "categoryId is required.",
        }),
    }),
}

const query = {
    query: z.object({
        orderBy: z
            .object({ createdAt: z.enum(["asc", "desc"]).optional() })
            .optional(),
        published: z.boolean().optional(),
        filter: z.string().optional(),

        page: z.number().optional(),
        pageSize: z.number().optional(),
    }),
}

export const getCategorySchema = z.object({
    ...params,
})

export const listCategorysSchema = z.object({
    ...query,
})

export const createCategorySchema = z.object({
    ...payload,
})

export const updateCategorySchema = z.object({
    ...payload,
    ...params,
})

export const deleteCategorySchema = z.object({
    ...params,
    ...payload,
})

export type GetCategoryInput = z.TypeOf<typeof getCategorySchema>
export type ListCategorysInput = z.TypeOf<typeof listCategorysSchema>
export type CreateCategoryInput = z.TypeOf<typeof createCategorySchema>
export type UpdateCategoryInput = z.TypeOf<typeof updateCategorySchema>
export type DeleteCategoryInput = z.TypeOf<typeof deleteCategorySchema>
