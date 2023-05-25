import { useNavigate } from "react-router-dom"
import PostsList from "../features/posts/PostsList"
import SectionNavigation from "../components/Navigation/SectionNavigation"
import ASide from "../components/ASide"

const BlogPage = () => {
    const navigate = useNavigate()

    return (
        <div className="layout-container container">
            <ASide />

            <main className="container">
                <section className="posts" aria-label="posts">
                    <h1>Blog</h1>
                    <SectionNavigation />

                    <div className="posts-lists">
                        <PostsList />
                    </div>
                </section>
            </main>
        </div>
    )
}

export default BlogPage
