import React from "react"
import { Link } from "react-router-dom"
import { RouterPathLabel } from "../NavBar"

type Props = {
    navigation: RouterPathLabel[]
}

const Navigation_desktop = ({ navigation }: Props) => {
    return (
        <div className="navigation-desktop">
            <nav className="navbar ">
                {navigation.map(({ path, label }, index) => (
                    <Link key={index} to={path} className="nav-item">
                        {label}
                    </Link>
                ))}
            </nav>
        </div>
    )
}

export default Navigation_desktop
