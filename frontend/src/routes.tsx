import { createBrowserRouter } from "react-router-dom"
import Layout from "./pages/Layout"
import ErrorPage from "./pages/ErrorPage"

import PostDetailPage from "./features/posts/pages/PostDetailPage"
import HomePage from "./pages/HomePage"
import BlogPage from "./features/posts/pages/BlogPage"
import AboutPage from "./pages/AboutPage"
import AddPostPage from "./features/posts/pages/AddPostPage"
import AdminBlog from "./features/posts/pages/AdminBlog"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            { index: true, element: <HomePage /> },
            { path: "blog", element: <BlogPage /> },
            { path: "/blog/:slug", element: <PostDetailPage /> },
            { path: "/about", element: <AboutPage /> },
            { path: "/admin/blog/create", element: <AddPostPage /> },
            { path: "/admin/blog", element: <AdminBlog /> },

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
