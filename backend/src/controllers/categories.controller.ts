import {
    CreateCategoryInput,
    DeleteCategoryInput,
    ListCategorysInput,
    GetCategoryInput,
    UpdateCategoryInput,
} from "../schema/category"
import { Request, Response } from "express"
import {
    createCategory,
    deleteCategory,
    getCategory,
    listCategorys,
    updateCategory,
} from "../services/categories.services"
import { Category, Prisma } from "@prisma/client"
import prisma from "../libs/prisma"

export async function createCategoryHandler(
    req: Request<{}, {}, CreateCategoryInput["body"]>,
    res: Response
) {
    const { postIds, ...rest } = req.body

    const data = {
        ...rest,
    }

    try {
        const categoryRes = await createCategory(data)
        return res.send(categoryRes)
    } catch (err) {
        if (err.code === "P2002")
            return res.status(400).send("slug should be unique")
        return res.status(400).send(err.message)
    }
}

export async function listCategorysHandler(
    req: Request<{}, {}, ListCategorysInput["query"]>,
    res: Response
) {
    try {
        const categorys = await listCategorys(req.query)

        return res.send(categorys)
    } catch (err) {
        return res.sendStatus(400)
    }
}

export async function getCategoryHandler(
    req: Request<GetCategoryInput["params"], {}, {}>,
    res: Response<Category | null>
) {
    try {
        const category = await getCategory(parseInt(req.params.categoryId))
        return res.send(category)
    } catch (err) {
        return res.sendStatus(400)
    }
}

export async function updateCategoryHandler(
    req: Request<
        UpdateCategoryInput["params"],
        {},
        UpdateCategoryInput["body"]
    >,
    res: Response<Category>
) {
    const { postIds, ...rest } = req.body

    const input = {
        categoryId: parseInt(req.params.categoryId),
        data: {
            ...rest,
        } as Prisma.CategoryUpdateInput,
    }

    try {
        const category = await updateCategory(input)

        return res.send(category)
    } catch (err) {
        return res.sendStatus(400)
    }
}

export async function deleteCategoryHandler(
    req: Request<DeleteCategoryInput["params"]>,
    res: Response
) {
    try {
        const category = await deleteCategory(req.params.categoryId)
        return res.send(category)
    } catch (err) {
        return res.sendStatus(400)
    }
}
