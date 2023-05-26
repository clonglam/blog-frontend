import { useParams } from "react-router-dom"
import { useGetPostQuery } from "../../../app/services/posts"
import MarkDown from "../components/Markdown"

// Did you know you can use tildes instead of backticks for code in markdown? ✨
const markdown = `Here is some JavaScript code:

~~~js
console.log('It works!')
~~~
`

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
