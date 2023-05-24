import { MdBook } from "react-icons/md"

import { useGetPostsQuery } from "../../services/posts"
import { useNavigate } from "react-router-dom"
import { User } from "../../services/user"

const PostsList = () => {
    const { data: posts, isLoading, error } = useGetPostsQuery()
    const navigate = useNavigate()

    if (isLoading)
        return (
            <div aria-label="posts-lists">
                <span aria-label="loading"></span>
                {[...Array(10)].map(item => (
                    <text key={item} aria-aria-label="loading">
                        {" "}
                        loading
                    </text>
                ))}
            </div>
        )

    if (error)
        return (
            <div aria-label="posts-lists" className="posts-lists">
                <text>There is an error .</text>
            </div>
        )

    return (
        <div aria-label="posts-lists" className="posts-lists">
            {posts?.map(({ id, title, slug, author }) => (
                <PostItem
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

interface Props {
    id: number
    title: string
    author: User
    onClickHandler: () => void
}

const PostItem = ({ id, title, onClickHandler, author }: Props) => {
    return (
        <div className="post-item" key={id} onClick={onClickHandler}>
            <div className="post-meta">
                <text>{author?.name || "author Name"}</text>
                <text> Mar 9 </text>
            </div>

            <div className="post-content">
                <div className="col-10-xs">
                    <text>{title}</text>
                    <text>
                        {`Every React Developer meets one issue during his or her journey. This is how you construct an amazing app architecture. This blog post will teach you how to structure your directories correctly and avoid some`}
                    </text>
                </div>

                <div className="col-2-xs">
                    <img
                        alt="post-image"
                        src="https://images.unsplash.com/photo-1684514570779-24e264a337a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1176&q=80"
                    ></img>
                </div>
            </div>
        </div>
    )
}
// interface IPostContent {
//     title: string
//     content: string
// }
// const PostContent = ()=>{
//     return(

//                     <text>{title}</text>
//                     <ListItemAvatar color="green.500">
//                         <MdBook />
//                     </ListItemAvatar>{" "}
//                     {title}
//                 </PostContent>
//     )
// }

export default PostsList
