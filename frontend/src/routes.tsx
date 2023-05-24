import { createBrowserRouter } from "react-router-dom"
import Layout from "./pages/Layout"
import ErrorPage from "./pages/ErrorPage"

import PostsPage from "./pages/PostsPage"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            { index: true, element: <PostsPage /> },
            { path: "posts", element: <PostsPage /> },

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
