import React, { createContext, useState } from "react";

export const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
    const [Theme, setTheme] = useState("dark");
    const SwitchTheme = () => {
        setTheme(prev => prev === 'dark' ? 'light' : 'dark');
    }
    return (
        <ThemeContext.Provider value={{ Theme, SwitchTheme }} >
            {children}
        </ThemeContext.Provider>
    )
}