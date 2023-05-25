import Navigation_mobile from "./components/Navigation_mobile"
import ThemeTogger from "./components/ThemeTogger"
import BrandingElement from "./components/BrandingElement"
import Navigation_desktop from "./components/Navigation_desktop"

export type RouterPathLabel = {
    path: string
    label: string
}

const NavBar = () => {
    const navigation: RouterPathLabel[] = [
        { label: "Home", path: "/" },
        { label: "About", path: "/about" },
        { label: "Blog", path: "/blog" },
    ]

    return (
        <div className="container">
            <BrandingElement />

            <div className="header-right">
                <Navigation_desktop navigation={navigation} />
                <ThemeTogger />

                <Navigation_mobile navigation={navigation} />
            </div>
        </div>
    )
}

export default NavBar
