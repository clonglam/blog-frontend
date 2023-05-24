import { useNavigate } from "react-router-dom"
import PostsList from "../features/posts/PostsList"

const Posts = () => {
    const navigate = useNavigate()

    return (
        <section className="posts" aria-label="posts">
            <text fontSize="xl">Manage Posts</text>

            <PostsList />
        </section>
    )
}

export default Posts
