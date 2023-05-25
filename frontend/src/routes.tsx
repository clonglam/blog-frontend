import { createBrowserRouter } from "react-router-dom"
import Layout from "./pages/Layout"
import ErrorPage from "./pages/ErrorPage"

import PostsPage from "./pages/BlogPage"
import PostDetailPage from "./pages/PostDetailPage"
import HomePage from "./pages/HomePage"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            { index: true, element: <HomePage /> },
            { path: "posts", element: <PostsPage /> },
            { path: "/posts/:slug", element: <PostDetailPage /> },

            // {
            //   path: "/",
            //   element: <PrivateOutlet />,
            //   children: [{ path: "userprofile", element: <UserProfile /> }],
            // },
        ],
    },
    // {
    //     path: "/admin",
    //     element: <AdminOutlet />,
    //     children: [{ path: "posts", element: <AdminPostsPage /> }],
    // },
])

export default router
