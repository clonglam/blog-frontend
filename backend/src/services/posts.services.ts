import { CreatePostInput, ListPostsInput } from "./../schema/post"
import { Prisma } from "@prisma/client"
import prisma from "../libs/prisma"
import { databaseResponseTimeHistogram } from "../utils/metrics"

export async function createPost(data: Prisma.PostCreateInput) {
    const metricsLabels = {
        operation: "Create Post",
    }

    const timer = databaseResponseTimeHistogram.startTimer()

    try {
        const result = await prisma.post.create({ data })

        timer({ ...metricsLabels, success: "true" })

        return result
    } catch (e) {
        timer({ ...metricsLabels, success: "false" })
        console.log("error", e)
        throw e
    }
}

export async function getPost(id: number) {
    const metricsLabels = {
        operation: "Get Post",
    }

    const timer = databaseResponseTimeHistogram.startTimer()

    try {
        const post = await prisma.post.findUniqueOrThrow({
            where: { id },
            include: {
                author: true,
            },
        })

        timer({ ...metricsLabels, success: "true" })

        return post
    } catch (e) {
        timer({ ...metricsLabels, success: "false" })
        throw e
    }
}

export async function listPosts({
    pageSize = 10,
    page = 1,
    orderBy = { createdAt: "desc" },
    filter = "",
}: ListPostsInput["query"]) {
    const metricsLabels = {
        operation: "List Posts",
    }

    const timer = databaseResponseTimeHistogram.startTimer()

    try {
        const result = await prisma.post.findMany({
            where: {
                OR: [
                    {
                        title: {
                            contains: filter,
                            mode: "insensitive",
                        },
                    },
                    {
                        content: {
                            contains: filter,
                            mode: "insensitive",
                        },
                    },
                ],
            },
            skip: (page - 1) * pageSize,
            take: pageSize,
            orderBy,
        })
        timer({ ...metricsLabels, success: "true" })
        return result
    } catch (e) {
        timer({ ...metricsLabels, success: "false" })
        throw e
    }
}

export async function deletePost(postId: number) {
    const metricsLabels = {
        operation: "Delete Post",
    }

    const timer = databaseResponseTimeHistogram.startTimer()

    try {
        const result = await prisma.post.delete({
            where: { id: postId },
        })

        timer({ ...metricsLabels, success: "true" })

        return result
    } catch (e) {
        timer({ ...metricsLabels, success: "false" })

        throw e
    }
}

export async function updatePost({
    id,
    data,
}: {
    id: number
    data: Prisma.PostUpdateInput
}) {
    const metricsLabels = {
        operation: "Update Post",
    }

    const timer = databaseResponseTimeHistogram.startTimer()

    try {
        const result = await prisma.post.update({
            where: { id },
            data,
        })

        timer({ ...metricsLabels, success: "true" })

        return result
    } catch (e) {
        timer({ ...metricsLabels, success: "false" })
        throw e
    }
}
