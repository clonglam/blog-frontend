import { useNavigate } from "react-router-dom"
import Skelton from "../../components/Skelton"
import { useGetPostsQuery } from "../../services/posts"
import PostItem from "./components/PostItem"

const PostsList = () => {
    const { data: posts, isLoading, error } = useGetPostsQuery()
    const navigate = useNavigate()

    if (isLoading)
        return (
            <div key="loading">
                <span aria-label="loading"></span>
                {[...Array(10)].map(item => (
                    <p key={item} aria-label="loading">
                        loading
                    </p>
                ))}
            </div>
        )

    if (error)
        return (
            <>
                <p>There is an error .</p>
            </>
        )

    return (
        <div className="posts-lists">
            <Skelton />
            {posts?.map(({ id, title, slug, author, createdAt }) => (
                <PostItem
                    createdAt={createdAt}
                    key={id}
                    id={id}
                    title={title}
                    author={author}
                    onClickHandler={() => navigate(slug)}
                />
            ))}
        </div>
    )
}

export default PostsList
