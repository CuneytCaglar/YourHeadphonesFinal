import { createContext, useState } from "react";

const ThemeContext = createContext() // provider , consumer
function ThemeContextProvider( {children} ) {


const [theme, setTheme] = useState(
    localStorage.getItem("theme") || document.documentElement.dataset.bsTheme || "dark"
)

function handleTheme(){
    const newTheme = theme === "dark" ? "light" : "dark"
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme)
    document.documentElement.dataset.bsTheme = newTheme
}



    const context = {
        theme: theme,
        handleTheme: handleTheme
    }

    return <ThemeContext.Provider value={context}>
        {children}
    </ThemeContext.Provider>

}

export {ThemeContext, ThemeContextProvider}