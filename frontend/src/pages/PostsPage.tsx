import { useNavigate } from "react-router-dom"
import PostsList from "../features/posts/PostsList"
import SectionNavigation from "../components/Navigation/SectionNavigation"

const Posts = () => {
    const navigate = useNavigate()

    return (
        <section className="posts" aria-label="posts">
            <SectionNavigation />

            <div className="posts-lists">
                <PostsList />
            </div>
        </section>
    )
}

export default Posts
