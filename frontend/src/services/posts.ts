import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { User } from "./user"

export interface Post {
    id: number
    title: string
    slug: string
    content: string
    published: string
    userId: number
    author: User
    createdAt: string
    updatedAt: string
}

type PostsResponse = Post[]

const baseUrl = import.meta.env.VITE_BASE_URL || "http://localhost:3001/api/"

export const postApi = createApi({
    baseQuery: fetchBaseQuery({ baseUrl }),
    tagTypes: ["Post"],
    endpoints: build => ({
        getPosts: build.query<PostsResponse, void>({
            query: () => "posts",
            providesTags: result =>
                result
                    ? [
                          ...result.map(({ id }) => ({
                              type: "Post" as const,
                              id,
                          })),
                          { type: "Post", id: "LIST" },
                      ]
                    : [{ type: "Post", id: "LIST" }],
        }),

        addPost: build.mutation<Post, Partial<Post>>({
            query: body => ({
                url: `posts`,
                method: "POST",
                body,
            }),
            invalidatesTags: [{ type: "Post", id: "LIST" }],
        }),

        getPost: build.query<Post, string>({
            query: id => `posts/${id}`,
            providesTags: (_result, _error, id) => [{ type: "Post", id }],
            // providesTags: (result, error, id) => [{ type: "Post", id }],
        }),
        updatePost: build.mutation<void, Pick<Post, "id"> & Partial<Post>>({
            query: ({ id, ...patch }) => ({
                url: `posts/${id}`,
                method: "PUT",
                body: patch,
            }),
            async onQueryStarted(
                { id, ...patch },
                { dispatch, queryFulfilled }
            ) {
                const patchResult = dispatch(
                    postApi.util.updateQueryData("getPost", `${id}`, draft => {
                        Object.assign(draft, patch)
                    })
                )
                try {
                    await queryFulfilled
                } catch {
                    patchResult.undo()
                }
            },
            invalidatesTags: (_result, _error, { id }) => [
                { type: "Post", id },
            ],
        }),
        deletePost: build.mutation<{ success: boolean; id: number }, number>({
            query(id) {
                return {
                    url: `posts/${id}`,
                    method: "DELETE",
                }
            },
            invalidatesTags: (_result, _error, id) => [{ type: "Post", id }],
        }),
    }),
})

export const {
    useGetPostQuery,
    useGetPostsQuery,
    useAddPostMutation,
    useUpdatePostMutation,
    useDeletePostMutation,
} = postApi
