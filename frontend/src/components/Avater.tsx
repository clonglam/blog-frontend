interface Props {
    alt: string
    src: string
    containerStyle?: JSX.IntrinsicElements["div"]
    imageStyle?: JSX.IntrinsicElements["img"]
}

const Avater = ({ src, containerStyle, alt, imageStyle }: Props) => {
    return (
        <div className="avater-container block" {...containerStyle}>
            <img className="avater-image" src={src} alt={alt} {...imageStyle} />
        </div>
    )
}

export default Avater
