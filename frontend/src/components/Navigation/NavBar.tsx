import { Link } from "react-router-dom"
import ThemeTogger from "./ThemeTogger"
import SearchInput from "./SearchInput"

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="container">
                <Link to="/">
                    <text className="site-title">Blog</text>
                </Link>

                <SearchInput />
                <ThemeTogger />
            </div>
        </nav>
    )
}

export default NavBar
