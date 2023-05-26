import * as z from "zod"

const PostBody = z.object({
    title: z.string({ required_error: "title is required" }),
    slug: z.string({
        required_error: "Slug is required",
    }),
    content: z.string({
        required_error: "Content is required",
    }),
    description: z.string(),
    ogImage: z.string(),
    featured: z.boolean(),
    published: z.boolean().optional(),

    userId: z.number({
        required_error: "userId is required",
    }),
    categoryIds: z.array(z.number()),
})

const payload = {
    body: PostBody,
}

const params = {
    params: z.object({
        postId: z.string({
            required_error: "postId is required.",
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

export const getPostSchema = z.object({
    ...params,
})

export const listPostsSchema = z.object({
    ...query,
})

export const createPostSchema = z.object({
    ...payload,
})

export const updatePostSchema = z.object({
    ...payload,
    ...params,
})

export const deletePostSchema = z.object({
    ...params,
    ...payload,
})

export type GetPostInput = z.TypeOf<typeof getPostSchema>
export type ListPostsInput = z.TypeOf<typeof listPostsSchema>
export type CreatePostInput = z.TypeOf<typeof createPostSchema>
export type UpdatePostInput = z.TypeOf<typeof updatePostSchema>
export type DeletePostInput = z.TypeOf<typeof deletePostSchema>
