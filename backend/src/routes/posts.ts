import express from "express"
import {
    createPostSchema,
    deletePostSchema,
    updatePostSchema,
    getPostSchema,
    listPostsSchema,
} from "../schema/post"

import {
    createPostHandler,
    deletePostHandler,
    getPostHandler,
    listPostsHandler,
    updatePostHandler,
} from "../controllers/posts.controller"
import validateResource from "../middleware/validateResource"

const router = express.Router()

router.get("/:slug", validateResource(getPostSchema), getPostHandler)

router.get("/", validateResource(listPostsSchema), listPostsHandler)

router.post("/", createPostHandler)
// router.post("/", validateResource(createPostSchema), createPostHandler)

router.put("/:postId", validateResource(updatePostSchema), updatePostHandler)

router.delete("/:postId", validateResource(deletePostSchema), deletePostHandler)

export default router
