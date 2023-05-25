import { motion } from "framer-motion"
import { MdBrightness5, MdOutlineModeNight } from "react-icons/md"
import useTheme from "../../../hooks/useTheme"

const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30,
}

const ThemeTogger = () => {
    const { theme, toggleTheme } = useTheme()

    return (
        <div
            className="theme-switch"
            data-isOn={theme === "light"}
            onClick={toggleTheme}
        >
            <motion.div className="handle" layout transition={spring}>
                {theme === "dark" ? <MdOutlineModeNight /> : <MdBrightness5 />}
            </motion.div>
        </div>
    )
}

export default ThemeTogger
