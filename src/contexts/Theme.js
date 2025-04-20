import { createContext, useContext, useEffect } from "react";

export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {},
})

export const ThemeProvider = ThemeContext.Provider

export default function useTheme(){
    const theme = useContext(ThemeContext)
    useEffect(() => {
        console.log('Theme mode:', theme.themeMode)
    }, [theme.themeMode])
    return theme
}