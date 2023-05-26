import { useParams } from "react-router-dom"
import { useGetPostQuery } from "../../../app/services/posts"
import MarkDown from "../components/Markdown"

const PostDetail = () => {
    const { slug } = useParams()
    console.log("slug", slug)
    const { data: post, isLoading, error } = useGetPostQuery(slug!)

    if (isLoading) return <p>loading...</p>
    if (error) return <p>Error</p>

    return (
        <div className="container">
            <MarkDown markdown={{ content: post?.content || "" }} />
        </div>
    )
}

export default PostDetail
