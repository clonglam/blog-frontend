import { ReactNode, createContext, useState } from "react"

interface IThemeContext {
    theme: "light" | "dark"
    toggleTheme: () => void
}
export const ThemeContext = createContext<IThemeContext | null>(null)

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [theme, setTheme] = useState<"light" | "dark">("light")

    const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light")

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <div className={`theme-${theme}`}>
                <div className="layout-bg">{children}</div>
            </div>
        </ThemeContext.Provider>
    )
}
