import React from "react"
import useTheme from "../../hooks/useTheme"
import { MdOutlineModeNight, MdBrightness5 } from "react-icons/md"

const ThemeTogger = () => {
    const { theme, toggleTheme } = useTheme()

    return (
        <button onClick={toggleTheme} className="theme-toggler">
            {theme === "dark" ? <MdOutlineModeNight /> : <MdBrightness5 />}
        </button>
    )
}

export default ThemeTogger
