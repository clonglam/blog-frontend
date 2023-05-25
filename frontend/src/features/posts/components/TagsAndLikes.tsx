import React from "react"

interface Props {
    tags: string[]
}
const TagsAndLikes = ({ tags }: Props) => {
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
export default TagsAndLikes
