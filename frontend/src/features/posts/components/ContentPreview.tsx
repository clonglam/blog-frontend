import React from "react"

type Props = {
    children: string
}

const ContentPreview = ({ children }: Props) => {
    if (!children) return null

    const previewText =
        children.length > 80 ? children.slice(0, 160) + "..." : children
    return (
        <div className="block">
            <p className="content-preview">{previewText}</p>
        </div>
    )
}

export default ContentPreview
