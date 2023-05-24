import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"

const useTheme = () => {
    const currentThemeContext = useContext(ThemeContext)

    if (!currentThemeContext) {
        throw new Error(
            "useTheme has to be used within <ThemeContext.Provider>"
        )
    }

    return currentThemeContext
}

export default useTheme
