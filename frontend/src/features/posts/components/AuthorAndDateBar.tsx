import React from "react"
import { User } from "../../../services/user"
import Avater from "../../../components/Avater"
import { format } from "date-fns"

interface Props {
    author: User
    createdAt: string
}

const AuthorAndDateBar = ({ author, createdAt }: Props) => {
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
                <p className="author-and-date align-center">
                    <span>{author?.name || "Author"}</span>
                    <span>。</span>
                    <span className="date font-sm">
                        {format(new Date(createdAt), "MMM dd")}
                    </span>
                </p>
            </div>
        </div>
    )
}
export default AuthorAndDateBar
