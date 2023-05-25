import { createBrowserRouter } from "react-router-dom"
import Layout from "./pages/Layout"
import ErrorPage from "./pages/ErrorPage"

import PostDetailPage from "./pages/PostDetailPage"
import HomePage from "./pages/HomePage"
import BlogPage from "./pages/BlogPage"
import AboutPage from "./pages/AboutPage"
import AddPostPage from "./features/posts/pages/AddPostPage"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            { index: true, element: <HomePage /> },
            { path: "blog", element: <BlogPage /> },
            { path: "/blog/:slug", element: <PostDetailPage /> },
            { path: "/admin/blog/create", element: <AddPostPage /> },
            { path: "/about", element: <AboutPage /> },

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
