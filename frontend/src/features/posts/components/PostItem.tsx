import { User } from "../../../app/services/user"
import AuthorAndDateBar from "./AuthorAndDateBar"
import ContentPreview from "./ContentPreview"
import TagsAndLikes from "./TagsAndLikes"

interface Props {
    id: number
    title: string
    author: User
    description: string
    createdAt: string
    ogImage: string
    onClickHandler: () => void
}

const PostItem = ({
    title,
    onClickHandler,
    author,
    createdAt,
    description,
    ogImage,
}: Props) => {
    return (
        <div className="post-item" onClick={onClickHandler}>
            <div className="post-content">
                <div className="col-10-xs">
                    <h2 className="post-title">{title}</h2>
                    <AuthorAndDateBar author={author} createdAt={createdAt} />

                    <ContentPreview>{description}</ContentPreview>
                </div>

                <img className="ogimage" alt="post-image" src={ogImage}></img>
            </div>

            <TagsAndLikes tags={["ReactJs", "Typescript"]} />
        </div>
    )
}

export default PostItem
