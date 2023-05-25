import { useNavigate } from "react-router-dom"
import PostsList from "../features/posts/PostsList"
import { SectionFilter, SearchInput } from "../features/posts"

import ASide from "../components/ASide"

const BlogPage = () => {
    const navigate = useNavigate()

    return (
        <section className="blog container" aria-label="blog">
            {/* <ASide /> */}
            <h1 className="title">Blog</h1>
            <SectionFilter />
            <SearchInput />
            <PostsList />
        </section>
    )
}

export default BlogPage
