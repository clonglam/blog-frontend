import { User } from "../../../services/user"
import AuthorAndDateBar from "./AuthorAndDateBar"
import ContentPreview from "./ContentPreview"
import TagsAndLikes from "./TagsAndLikes"

interface Props {
    id: number
    title: string
    author: User
    createdAt: string
    onClickHandler: () => void
}

const PostItem = ({ title, onClickHandler, author, createdAt }: Props) => {
    return (
        <div className="post-item" onClick={onClickHandler}>
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

export default PostItem
