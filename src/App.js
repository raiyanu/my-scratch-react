import { useContext } from "react";
import { ThemeContext } from "./useTheme";

export default function App() {
    const theme = useContext(ThemeContext);
    let themeStyle = {
        background: `${theme === "dark" ? "black" : "white"}`,
        color: `${!theme === "dark" ? "black" : "white"}`,
    };
    return <div style={themeStyle}>hey there</div>;
}