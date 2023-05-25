import { Link } from "react-router-dom"

const ASide = () => {
    return (
        <aside className="container">
            <AuthorShort />
            <div>
                <h2>Selected Topics</h2>
                <div>
                    {[...Array(5)].map((item, index) => (
                        <Link to="/" key={item}>
                            <p className="pt-1 pb-1">{`Topics ${index}`}</p>
                        </Link>
                    ))}
                </div>
            </div>
        </aside>
    )
}

const AuthorShort = () => {
    return (
        <div className="author-short">
            <div className="image-container">
                <img src={"/profile.jpg"}></img>
            </div>
            AuthorShort
        </div>
    )
}
export default ASide
