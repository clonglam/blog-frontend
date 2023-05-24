import { describe, expect, test, vi, beforeEach, afterEach } from "vitest"
import { createPost, getPost, listPosts } from "../../posts.services"
import prisma from "../../../libs/__mocks__/prisma"

vi.mock("../../../libs/prisma")

describe("Post Services", () => {
    beforeEach(() => {
        vi.useFakeTimers()
    })

    afterEach(() => {
        vi.useRealTimers()
    })

    test("create Post should return the created post", async () => {
        const date = new Date(2000, 1, 1, 13)
        vi.setSystemTime(date)

        const newPost = {
            title: "Post Title",
            slug: "post-slug",
            content: "PostContent",
            author: {
                connect: { id: 32 },
            },
        }

        prisma.post.create.mockResolvedValue({
            id: 1,
            title: "Post Title",
            slug: "post-slug",
            content: "PostContent",
            userId: 32,
            published: false,
            createdAt: date,
            updatedAt: date,
        })

        const user = await createPost(newPost)

        expect(user).toStrictEqual({
            id: 1,
            title: "Post Title",
            slug: "post-slug",
            content: "PostContent",
            userId: 32,
            published: false,
            createdAt: date,
            updatedAt: date,
        })
    })

    test("getPosts should return the selected post", async () => {
        const date = new Date(2000, 1, 1, 13)
        vi.setSystemTime(date)

        const mockPublishedPost = {
            id: 1,
            content: "content",
            published: true,
            slug: "title",
            title: "title",
            userId: 1,
            createdAt: date,
            updatedAt: date,
        }
        prisma.post.findMany.mockResolvedValue([mockPublishedPost])

        const user = await listPosts({})

        console.log("user")

        expect(user).toStrictEqual([mockPublishedPost])
    })

    test("getPostByID should return the selected post", async () => {
        prisma.post.findUniqueOrThrow.mockImplementation(() => {
            throw new Error("There was an error.")
        })

        await expect(getPost(1)).rejects.toThrow()
        await expect(getPost(1)).rejects.toThrowError("There was an error")
    })
})
