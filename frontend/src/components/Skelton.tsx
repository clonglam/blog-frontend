import React from "react"

type Props = {
    width?: string
    height?: string
    style?: React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLDivElement>,
        HTMLDivElement
    >
}

const Skelton = ({ width = "100px", height = "100px", style }: Props) => {
    return <div {...style} style={{ width, height }} className="skelton"></div>
}

export default Skelton
