import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import ThemeTogger from "./ThemeTogger"
import { useState } from "react"
import Navigation_mobile from "./Navigation_mobile"

type NavigationType = {
    link: string
    label: string
}

const NavBar = () => {
    const [openNav, setOpenNav] = useState(false)

    console.log("openNav", openNav)

    const navigation: NavigationType[] = [
        { label: "Home", link: "/" },
        { label: "About", link: "/about" },
        { label: "Blog", link: "/blog" },
    ]

    return (
        <header>
            <div className="container">
                <Link to="/">
                    <p className="branding-text">Clong</p>
                </Link>

                <div className="header-right">
                    <Navigation_Desktop navigation={navigation} />
                    <ThemeTogger />

                    <Navigation_mobile navigation={navigation} />
                </div>
            </div>
        </header>
    )
}

interface INavigation {
    navigation: NavigationType[]
}
interface INavigationMobile {
    navigation: NavigationType[]
    isOpen: boolean
    openHandler: () => void
    closeHandler: () => void
}

const Navigation_Desktop = ({ navigation }: INavigation) => {
    return (
        <div className="navigation-desktop">
            <nav className="navbar ">
                {navigation.map(({ link, label }, index) => (
                    <Link key={index} to={link} className="nav-item">
                        {label}
                    </Link>
                ))}
            </nav>
        </div>
    )
}

// const Navigation_mobile = ({
//     navigation,
//     isOpen,
//     openHandler,
//     closeHandler,
// }: INavigationMobile) => {
//     console.log("oipen", isOpen)
//     return (
//         <>
//             <button
//                 className="mobile-nav-toggler btn-link"
//                 onClick={openHandler}
//             >
//                 Menu
//             </button>

//             <div className={`${isOpen && "open"} mobile-container`}>
//                 <div className={`${isOpen && "open"} navigation-mobile`}>
//                     <button onClick={closeHandler}></button>
//                     124124124124
//                     <div></div>
//                 </div>
//             </div>
//         </>
//     )
// }
export default NavBar
