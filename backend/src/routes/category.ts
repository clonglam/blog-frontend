import express from "express"
import {
    createCategorySchema,
    deleteCategorySchema,
    updateCategorySchema,
    getCategorySchema,
    listCategorysSchema,
} from "../schema/category"

import {
    createCategoryHandler,
    deleteCategoryHandler,
    getCategoryHandler,
    listCategorysHandler,
    updateCategoryHandler,
} from "../controllers/categories.controller"
import validateResource from "../middleware/validateResource"

const router = express.Router()

router.get(
    "/:categoryId",
    validateResource(getCategorySchema),
    getCategoryHandler
)

router.get("/", validateResource(listCategorysSchema), listCategorysHandler)

router.post("/", createCategoryHandler)

router.put(
    "/:categoryId",
    validateResource(updateCategorySchema),
    updateCategoryHandler
)

router.delete(
    "/:categoryId",
    validateResource(deleteCategorySchema),
    deleteCategoryHandler
)

export default router
