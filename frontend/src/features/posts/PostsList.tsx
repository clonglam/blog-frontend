import { useGetPostsQuery } from "../../services/posts"
import { useNavigate } from "react-router-dom"
import { User } from "../../services/user"
import Avater from "../../components/Avater"
import { format } from "date-fns"

const PostsList = () => {
    const { data: posts, isLoading, error } = useGetPostsQuery()
    const navigate = useNavigate()

    if (isLoading)
        return (
            <div>
                <span aria-label="loading"></span>
                {[...Array(10)].map(item => (
                    <text key={item} aria-aria-label="loading">
                        loading
                    </text>
                ))}
            </div>
        )

    if (error)
        return (
            <>
                <text>There is an error .</text>
            </>
        )

    return (
        <>
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
        </>
    )
}

interface Props {
    id: number
    title: string
    author: User
    createdAt: string
    onClickHandler: () => void
}

const PostItem = ({ id, title, onClickHandler, author, createdAt }: Props) => {
    return (
        <div className="post-item" key={id} onClick={onClickHandler}>
            <div className="post-content">
                <div className="col-10-xs">
                    <h2 className="post-title">{title}</h2>
                    <AuthorAndDateBar author={author} createdAt={createdAt} />

                    <ContentPreview>
                        {`Every React Developer meets one issue during his or her journey. This is how you construct an amazing app architecture. This blog post will teach you how to structure your directories correctly and avoid some`}
                    </ContentPreview>
                </div>

                <div className="col-2-xs">
                    <img
                        alt="post-image"
                        src="https://images.unsplash.com/photo-1684514570779-24e264a337a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1176&q=80"
                    ></img>
                </div>
            </div>

            <TagsAndLikes tags={["ReactJs", "Typescript"]} />
        </div>
    )
}

interface IAuthorAndDateBar {
    author: User
    createdAt: string
}

const AuthorAndDateBar = ({ author, createdAt }: IAuthorAndDateBar) => {
    return (
        <div className="flex items-center pt-1 pb-1">
            <Avater
                src={
                    author?.profile ||
                    "https://images.unsplash.com/photo-1510008581005-bc110d00734d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1631&q=80"
                }
                alt={author?.name || "userImage"}
            />

            <div className="pl-1 flex items-center">
                <text className="author-and-date align-center">
                    <span>{author?.name || "Author"}</span>
                    <span>。</span>
                    <span className="date font-sm">
                        {format(new Date(createdAt), "MMM dd")}
                    </span>
                </text>
            </div>
        </div>
    )
}

const ContentPreview = ({ children }: { children: string }) => {
    if (!children) return null

    const previewText =
        children.length > 80 ? children.slice(0, 160) + "..." : children
    return (
        <div className="block">
            <p className="content-preview">{previewText}</p>
        </div>
    )
}

interface ITagsAndLikes {
    tags: string[]
}
const TagsAndLikes = ({ tags }: ITagsAndLikes) => {
    return (
        <div className="tags-and-likes-container">
            <div className="tags-container">
                {tags.map((t, index) => (
                    <div key={index}>
                        <span>{t}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default PostsList
