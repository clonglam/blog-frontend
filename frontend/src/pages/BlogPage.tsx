import { SearchInput, SectionFilter } from "../features/posts"
import PostsList from "../features/posts/PostsList"

const BlogPage = () => {
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
