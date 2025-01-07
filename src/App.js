import React, { useContext, useDeferredValue, useEffect, useMemo, useRef, useState } from "react";
import { ThemeContext } from "./useTheme";

export default function App() {
    const { Theme, SwitchTheme } = useContext(ThemeContext);
    const [count, setCount] = useState(0)
    const count2 = useRef(0)
    const getTheme = useMemo(() => {
        return ProcessTheme(Theme);
    }, [Theme]) // Memoize the theme! createsTheme on Theme variable value change only\

    const deferedTheme = useDeferredValue(getTheme);
    // const getTheme = ProcessTheme(Theme); // createsTheme on each render

    return (
        <div style={{ ...getTheme, padding: "1rem" }}>
            hey there {Theme.toUpperCase()} <br />
            <br />
            <br />
            <button style={deferedTheme} onClick={SwitchTheme}>
                switch theme
            </button>
            <button style={{ ...getTheme, padding: "1rem" }} onClick={() => {
                setCount(preCount => preCount + 1)
            }}>
                {count}
            </button>
            <button style={{ ...getTheme, padding: "1rem" }} onClick={() => {
                count2.current += 1;
            }}>
                {count2.current}
            </button>
        </div>
    );
}
function ProcessTheme(Theme) {
    console.log("processing Theme...");
    console.log(Theme);
    return {
        backgroundColor: `${Theme === "dark" ? "black" : "white"}`,
        color: `${Theme === "dark" ? "white" : "black"}`,
        border: `1px solid ${Theme === "dark" ? "white" : "black"}`,
    }
}