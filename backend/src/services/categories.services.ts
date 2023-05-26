import { CreateCategoryInput, ListCategorysInput } from "../schema/category"
import { Prisma } from "@prisma/client"
import prisma from "../libs/prisma"
import { databaseResponseTimeHistogram } from "../utils/metrics"

export async function createCategory(data: Prisma.CategoryCreateInput) {
    const metricsLabels = {
        operation: "Create Category",
    }

    const timer = databaseResponseTimeHistogram.startTimer()

    try {
        const result = await prisma.category.create({ data })

        timer({ ...metricsLabels, success: "true" })

        return result
    } catch (e) {
        timer({ ...metricsLabels, success: "false" })
        console.log("error", e.message)
        throw e
    }
}

export async function getCategory(categoryId: number) {
    const metricsLabels = {
        operation: "Get Category",
    }

    const timer = databaseResponseTimeHistogram.startTimer()

    try {
        const category = await prisma.category.findUniqueOrThrow({
            where: { id: categoryId },
            include: {
                posts: {
                    include: {
                        post: {
                            include: {
                                author: {
                                    select: { name: true },
                                },
                            },
                        },
                    },
                },
            },
        })

        timer({ ...metricsLabels, success: "true" })

        return category
    } catch (e) {
        timer({ ...metricsLabels, success: "false" })
        throw e
    }
}

export async function listCategorys({
    pageSize = 10,
    page = 1,
    orderBy = { createdAt: "desc" },
    filter = "",
}: ListCategorysInput["query"]) {
    const metricsLabels = {
        operation: "List Categorys",
    }

    const timer = databaseResponseTimeHistogram.startTimer()

    console.log("list category")
    try {
        const result = await prisma.category.findMany({
            where: {
                OR: [
                    {
                        name: {
                            contains: filter,
                            mode: "insensitive",
                        },
                    },
                    {
                        slug: {
                            contains: filter,
                            mode: "insensitive",
                        },
                    },
                ],
            },
            include: {
                posts: {
                    include: {
                        post: true,
                    },
                },
            },
            skip: (page - 1) * pageSize,
            take: pageSize,
        })
        timer({ ...metricsLabels, success: "true" })
        return result
    } catch (e) {
        console.log(e)
        timer({ ...metricsLabels, success: "false" })
        throw e
    }
}

export async function deleteCategory(slug: string) {
    const metricsLabels = {
        operation: "Delete Category",
    }

    const timer = databaseResponseTimeHistogram.startTimer()

    try {
        const result = await prisma.category.delete({
            where: { slug },
        })

        timer({ ...metricsLabels, success: "true" })

        return result
    } catch (e) {
        timer({ ...metricsLabels, success: "false" })

        throw e
    }
}

export async function updateCategory({
    categoryId,
    data,
}: {
    categoryId: number
    data: Prisma.CategoryUpdateInput
}) {
    const metricsLabels = {
        operation: "Update Category",
    }

    const timer = databaseResponseTimeHistogram.startTimer()

    try {
        const result = await prisma.category.update({
            where: { id: categoryId },
            data,
        })

        timer({ ...metricsLabels, success: "true" })

        return result
    } catch (e) {
        timer({ ...metricsLabels, success: "false" })
        throw e
    }
}
