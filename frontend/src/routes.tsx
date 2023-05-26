import { createBrowserRouter } from "react-router-dom"
import Layout from "./pages/Layout"
import ErrorPage from "./pages/ErrorPage"

import PostDetailPage from "./features/posts/pages/PostDetailPage"
import HomePage from "./pages/HomePage"
import BlogPage from "./features/posts/pages/BlogPage"
import AboutPage from "./pages/AboutPage"
import AddPostPage from "./features/posts/pages/AddPostPage"
import AdminBlog from "./features/posts/pages/AdminBlog"
import Login from "./features/auth/Login"
import PrivateOutlet from "./pages/PrivateOutlet"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            { index: true, element: <HomePage /> },
            { path: "blog", element: <BlogPage /> },
            { path: "blog/:slug", element: <PostDetailPage /> },
            { path: "about", element: <AboutPage /> },
            { path: "login", element: <Login /> },

            {
                path: "/admin",
                element: <PrivateOutlet />,
                children: [
                    { path: "", element: <Login /> },
                    { path: "blog", element: <AddPostPage /> },
                    { path: "blog/create", element: <AddPostPage /> },
                ],
            },
        ],
    },
    // {
    //     path: "/admin",
    //     element: <AdminOutlet />,
    //     children: [{ path: "posts", element: <AdminPostsPage /> }],
    // },
])

export default router
