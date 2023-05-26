import {
    CreatePostInput,
    DeletePostInput,
    ListPostsInput,
    GetPostInput,
    UpdatePostInput,
} from "../schema/post"
import { Request, Response } from "express"
import {
    createPost,
    deletePost,
    getPost,
    listPosts,
    updatePost,
} from "../services/posts.services"
import { Post, Prisma } from "@prisma/client"
import prisma from "../libs/prisma"
import session from "express-session"

export async function createPostHandler(
    req: Request<{}, {}, CreatePostInput["body"]>,
    res: Response
) {
    const { userId, categoryIds, ...rest } = req.body

    const data = {
        ...rest,
        author: {
            connect: { id: userId },
        },
    }

    try {
        const postRes = await createPost(data)
        return res.send(postRes)
    } catch (err) {
        if (err.code === "P2002")
            return res.status(400).send("slug should be unique")
        return res.status(400).send(err.message)
    }
}

export async function listPostsHandler(
    req: Request<{}, {}, ListPostsInput["query"]>,
    res: Response
) {
    try {
        const posts = await listPosts(req.query)

        return res.send(posts)
    } catch (err) {
        return res.sendStatus(400)
    }
}

export async function getPostHandler(
    req: Request<GetPostInput["params"], {}, {}>,
    res: Response<Post | null>
) {
    try {
        const post = await getPost(parseInt(req.params.postId))
        return res.send(post)
    } catch (err) {
        return res.sendStatus(400)
    }
}

export async function updatePostHandler(
    req: Request<UpdatePostInput["params"], UpdatePostInput["body"]>,
    res: Response<Post>
) {
    const { userId, categoryIds, ...rest } = req.body
    const input = {
        postId: parseInt(req.params.postId),
        data: {
            ...rest,
            author: {
                connect: {
                    id: 1,
                },
            },
        } as Prisma.PostUpdateInput,
    }

    try {
        const post = await updatePost(input)
        return res.send(post)
    } catch (err) {
        return res.sendStatus(400)
    }
}

export async function deletePostHandler(
    req: Request<DeletePostInput["params"]>,
    res: Response
) {
    try {
        const post = await deletePost(parseInt(req.params.postId))
        return res.send(post)
    } catch (err) {
        return res.sendStatus(400)
    }
}
