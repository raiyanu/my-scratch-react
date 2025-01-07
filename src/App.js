import React, { useContext } from "react";
import { ThemeContext } from "./useTheme";

export default function App() {
    const { Theme, SwitchTheme } = useContext(ThemeContext);
    const ThemeStle = {
        backgroundColor: `${Theme === "dark" ? "black" : "white"}`,
        color: `${Theme === "dark" ? "white" : "black"}`,
        borderColor: `${Theme === "dark" ? "white" : "black"}`,
    };
    return (
        <div style={{ ...ThemeStle, padding: "1rem" }} className="text-red-900">
            hey there {Theme.toUpperCase()} <br />
            <br />
            <br />
            <button style={ThemeStle} onClick={SwitchTheme}>
                switch theme
            </button>
        </div>
    );
}
