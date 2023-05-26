import { useNavigate } from "react-router-dom"
import Skelton from "../../components/Skelton"
import { useGetPostsQuery } from "../../app/services/posts"
import PostItem from "./components/PostItem"

const PostsList = () => {
    const { data: posts, isLoading, error } = useGetPostsQuery()
    const navigate = useNavigate()

    if (isLoading)
        return (
            <div key="loading">
                {[...Array(10)].map(item => (
                    <div className="post-item" key={item}>
                        <Skelton width="100%" />
                    </div>
                ))}
            </div>
        )

    if (error) return <p>There is an error .</p>

    return (
        <div className="posts-lists">
            {posts?.map(
                ({
                    id,
                    title,
                    slug,
                    author,
                    createdAt,
                    description,
                    ogImage,
                }) => (
                    <PostItem
                        ogImage={ogImage}
                        createdAt={createdAt}
                        key={id}
                        id={id}
                        title={title}
                        author={author}
                        description={description}
                        onClickHandler={() => navigate(slug)}
                    />
                )
            )}
        </div>
    )
}

export default PostsList
